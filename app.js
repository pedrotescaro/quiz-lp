/* ============================================
   Quiz LP — Application Logic (Firebase)
   ============================================ */

// ===== DOM References =====
const $ = id => document.getElementById(id);

const screens = {
    auth: $('screen-auth'),
    quiz: $('screen-quiz'),
    result: $('screen-result'),
    admin: $('screen-admin')
};

// ===== State =====
let currentUser = null;
let currentUserProfile = null;
let currentQuestion = 0;
let userAnswers = [];
let answered = false;

// ===== Helpers =====
function showScreen(name) {
    Object.values(screens).forEach(s => s.classList.remove('active'));
    screens[name].classList.add('active');
    window.scrollTo(0, 0);
}

function hideLoading() {
    const overlay = $('loading-overlay');
    if (overlay) {
        overlay.classList.add('fade-out');
        setTimeout(() => overlay.remove(), 300);
    }
}

function toast(msg, type = '') {
    const existing = document.querySelector('.toast');
    if (existing) existing.remove();
    const el = document.createElement('div');
    el.className = 'toast' + (type ? ' ' + type : '');
    el.textContent = msg;
    document.body.appendChild(el);
    requestAnimationFrame(() => el.classList.add('show'));
    setTimeout(() => { el.classList.remove('show'); setTimeout(() => el.remove(), 300); }, 3000);
}

function setButtonLoading(btn, loading) {
    btn.disabled = loading;
    if (loading) {
        btn.dataset.originalText = btn.textContent;
        btn.textContent = 'Aguarde...';
    } else {
        btn.textContent = btn.dataset.originalText || btn.textContent;
    }
}

// SVG Icons
const ICONS = {
    check: '<svg class="icon" viewBox="0 0 20 20" fill="currentColor"><path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd"/></svg>',
    x: '<svg class="icon" viewBox="0 0 20 20" fill="currentColor"><path fill-rule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clip-rule="evenodd"/></svg>',
    info: '<svg class="icon" viewBox="0 0 20 20" fill="currentColor"><path fill-rule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z" clip-rule="evenodd"/></svg>'
};

// ===== Firebase Auth State Listener =====
let pendingGoogleUser = null;

auth.onAuthStateChanged(async (user) => {
    if (user) {
        try {
            const doc = await db.collection('users').doc(user.uid).get();
            if (doc.exists) {
                currentUser = user;
                currentUserProfile = doc.data();
                $('user-display').textContent = currentUserProfile.nome.split(' ')[0];
                showScreen('quiz');
                resetQuiz();
            } else {
                // Google user without profile — show complete-profile form
                pendingGoogleUser = user;
                $('cp-nome').value = user.displayName || '';
                $('form-login').classList.add('hidden');
                $('form-register').classList.add('hidden');
                $('form-complete-profile').classList.remove('hidden');
                $('auth-tabs-container') && $('auth-tabs-container').classList.add('hidden');
                document.querySelector('.auth-tabs').style.display = 'none';
                showScreen('auth');
            }
        } catch {
            showScreen('auth');
        }
    } else {
        currentUser = null;
        currentUserProfile = null;
        pendingGoogleUser = null;
        showScreen('auth');
    }
    hideLoading();
});

// ===== Auth Tabs =====
$('tab-login').addEventListener('click', () => switchTab('login'));
$('tab-register').addEventListener('click', () => switchTab('register'));
$('go-register').addEventListener('click', e => { e.preventDefault(); switchTab('register'); });
$('go-login').addEventListener('click', e => { e.preventDefault(); switchTab('login'); });

function switchTab(tab) {
    $('tab-login').classList.toggle('active', tab === 'login');
    $('tab-register').classList.toggle('active', tab === 'register');
    $('form-login').classList.toggle('hidden', tab !== 'login');
    $('form-register').classList.toggle('hidden', tab !== 'register');
}

// ===== Register =====
$('form-register').addEventListener('submit', async (e) => {
    e.preventDefault();
    const nome = $('reg-nome').value.trim();
    const email = $('reg-email').value.trim().toLowerCase();
    const senha = $('reg-senha').value;

    if (!nome || !email || !senha) {
        toast('Preencha todos os campos.', 'error'); return;
    }
    if (senha.length < 6) {
        toast('A senha deve ter no minimo 6 caracteres.', 'error'); return;
    }

    const btn = $('btn-register');
    setButtonLoading(btn, true);

    try {
        const cred = await auth.createUserWithEmailAndPassword(email, senha);
        await db.collection('users').doc(cred.user.uid).set({
            nome, email,
            createdAt: firebase.firestore.FieldValue.serverTimestamp()
        });
        toast('Conta criada com sucesso!', 'success');
    } catch (err) {
        if (err.code === 'auth/email-already-in-use') {
            toast('Este e-mail ja esta cadastrado.', 'error');
        } else if (err.code === 'auth/weak-password') {
            toast('Senha muito fraca.', 'error');
        } else {
            toast('Erro ao criar conta. Tente novamente.', 'error');
        }
    } finally {
        setButtonLoading(btn, false);
    }
});

// ===== Login =====
$('form-login').addEventListener('submit', async (e) => {
    e.preventDefault();
    const email = $('login-email').value.trim().toLowerCase();
    const senha = $('login-senha').value;

    // Admin check
    if (email === ADMIN_EMAIL && senha === ADMIN_PASS) {
        showScreen('admin');
        renderAdmin();
        return;
    }

    const btn = $('btn-login');
    setButtonLoading(btn, true);

    try {
        await auth.signInWithEmailAndPassword(email, senha);
    } catch (err) {
        if (err.code === 'auth/user-not-found' || err.code === 'auth/wrong-password' || err.code === 'auth/invalid-credential') {
            toast('E-mail ou senha incorretos.', 'error');
        } else {
            toast('Erro ao entrar. Tente novamente.', 'error');
        }
    } finally {
        setButtonLoading(btn, false);
    }
});

// ===== Google Sign-In =====
$('btn-google-login').addEventListener('click', async () => {
    const btn = $('btn-google-login');
    btn.disabled = true;
    try {
        const provider = new firebase.auth.GoogleAuthProvider();
        await auth.signInWithPopup(provider);
    } catch (err) {
        if (err.code !== 'auth/popup-closed-by-user') {
            toast('Erro ao entrar com Google. Tente novamente.', 'error');
        }
    } finally {
        btn.disabled = false;
    }
});

// ===== Complete Profile (Google first-time users) =====
$('form-complete-profile').addEventListener('submit', async (e) => {
    e.preventDefault();
    if (!pendingGoogleUser) return;

    const nome = $('cp-nome').value.trim();

    if (!nome) {
        toast('Preencha todos os campos.', 'error'); return;
    }

    const btn = $('btn-complete-profile');
    setButtonLoading(btn, true);

    try {
        await db.collection('users').doc(pendingGoogleUser.uid).set({
            nome,
            email: pendingGoogleUser.email,
            createdAt: firebase.firestore.FieldValue.serverTimestamp()
        });
        currentUser = pendingGoogleUser;
        currentUserProfile = { nome, email: pendingGoogleUser.email };
        pendingGoogleUser = null;
        $('user-display').textContent = nome.split(' ')[0];
        document.querySelector('.auth-tabs').style.display = '';
        showScreen('quiz');
        resetQuiz();
        toast('Perfil salvo com sucesso!', 'success');
    } catch {
        toast('Erro ao salvar perfil. Tente novamente.', 'error');
    } finally {
        setButtonLoading(btn, false);
    }
});

// ===== Logout =====
$('btn-logout').addEventListener('click', async () => {
    await auth.signOut();
    $('form-login').reset();
});

// ===== Quiz Flow =====
function resetQuiz() {
    currentQuestion = 0;
    userAnswers = [];
    answered = false;
    $('quiz-welcome').classList.remove('hidden');
    $('quiz-area').classList.add('hidden');
}

$('btn-start-quiz').addEventListener('click', () => {
    $('quiz-welcome').classList.add('hidden');
    $('quiz-area').classList.remove('hidden');
    renderQuestion();
});

function renderQuestion() {
    answered = false;
    const q = QUESTIONS[currentQuestion];
    const total = QUESTIONS.length;

    $('progress-bar').style.width = ((currentQuestion) / total * 100) + '%';
    $('question-counter').textContent = `Questao ${currentQuestion + 1} de ${total}`;
    $('question-text').textContent = q.text;
    $('btn-next').disabled = true;
    $('btn-next').textContent = currentQuestion === total - 1 ? 'Ver Resultado' : 'Proxima';

    const list = $('options-list');
    list.innerHTML = '';

    q.options.forEach((opt, i) => {
        const btn = document.createElement('button');
        btn.className = 'option-btn';
        btn.type = 'button';
        btn.innerHTML = `<span class="option-letter">${opt.letter}</span><div class="option-content"><span class="option-text">${opt.text}</span></div>`;
        btn.addEventListener('click', () => selectOption(i));
        list.appendChild(btn);
    });
}

function selectOption(idx) {
    if (answered) return;
    answered = true;
    userAnswers[currentQuestion] = idx;

    const q = QUESTIONS[currentQuestion];
    const btns = $('options-list').querySelectorAll('.option-btn');

    btns.forEach((btn, i) => {
        btn.style.pointerEvents = 'none';
        if (i === q.correct) {
            btn.classList.add('correct');
        } else if (i === idx && idx !== q.correct) {
            btn.classList.add('wrong');
        } else {
            btn.classList.add('dimmed');
        }
        const expDiv = document.createElement('div');
        const isCorrectOption = i === q.correct;
        expDiv.className = 'option-explanation ' + (isCorrectOption ? 'correct-exp' : 'wrong-exp');
        const icon = isCorrectOption ? ICONS.check : ICONS.x;
        const label = isCorrectOption ? 'Correta' : 'Incorreta';
        // Remove the "CORRETA — " or "INCORRETA — " prefix from explanation text
        const expText = q.explanations[i].replace(/^(CORRETA|INCORRETA)\s*—\s*/, '');
        expDiv.innerHTML = `<span class="exp-label">${icon} ${label}</span><span class="exp-text">${expText}</span>`;
        btn.querySelector('.option-content').appendChild(expDiv);
    });

    $('btn-next').disabled = false;
}

$('btn-next').addEventListener('click', () => {
    if (!answered) return;
    currentQuestion++;
    if (currentQuestion >= QUESTIONS.length) {
        finishQuiz();
    } else {
        renderQuestion();
    }
});

async function finishQuiz() {
    const hits = userAnswers.reduce((acc, ans, i) => acc + (ans === QUESTIONS[i].correct ? 1 : 0), 0);
    const pct = Math.round(hits / QUESTIONS.length * 100);

    // Save result to Firestore
    try {
        await db.collection('results').add({
            userId: currentUser.uid,
            email: currentUserProfile.email,
            nome: currentUserProfile.nome,
            hits,
            total: QUESTIONS.length,
            pct,
            answers: [...userAnswers],
            date: firebase.firestore.FieldValue.serverTimestamp()
        });
    } catch {
        // Result saved locally if offline
    }

    showScreen('result');
    renderResult(hits, pct);
}

function renderResult(hits, pct) {
    $('score-text').textContent = pct + '%';
    $('score-hits').textContent = hits;

    // Animate ring
    const ring = $('score-ring');
    const circumference = 2 * Math.PI * 54;
    const offset = circumference - (pct / 100) * circumference;
    ring.style.strokeDashoffset = circumference;
    ring.style.transition = 'none';
    setTimeout(() => {
        ring.style.transition = 'stroke-dashoffset 1s ease';
        ring.style.strokeDashoffset = offset;
    }, 50);

    // Message (no emojis)
    if (pct >= 80) {
        $('score-message').textContent = 'Excelente resultado!';
    } else if (pct >= 60) {
        $('score-message').textContent = 'Bom desempenho';
    } else {
        $('score-message').textContent = 'Continue estudando';
    }

    // Review cards
    const reviewDiv = $('result-review');
    reviewDiv.innerHTML = '';

    QUESTIONS.forEach((q, i) => {
        const userAns = userAnswers[i];
        const isCorrect = userAns === q.correct;

        const card = document.createElement('div');
        card.className = 'review-card ' + (isCorrect ? 'is-correct' : 'is-wrong');
        card.style.animationDelay = (i * 0.05) + 's';

        let optionsHTML = '';
        q.options.forEach((opt, j) => {
            let cls = 'was-neutral';
            if (j === q.correct) cls = 'was-correct';
            else if (j === userAns && !isCorrect) cls = 'was-wrong';

            const expClean = q.explanations[j].replace(/^(CORRETA|INCORRETA)\s*—\s*/, '');
            optionsHTML += `
                <div class="review-option ${cls}">
                    <span class="review-option-letter">${opt.letter}</span>
                    <div class="review-option-content">
                        <span class="review-option-text">${opt.text}</span>
                        <div class="review-option-exp">${expClean}</div>
                    </div>
                </div>`;
        });

        card.innerHTML = `
            <div class="review-card-header">
                <span class="review-badge ${isCorrect ? 'correct' : 'wrong'}">${isCorrect ? ICONS.check : ICONS.x} ${isCorrect ? 'Correta' : 'Incorreta'}</span>
                <span class="review-question-num">Questao ${i + 1}</span>
            </div>
            <p class="review-question-text">${q.text}</p>
            <div class="review-options">${optionsHTML}</div>`;

        reviewDiv.appendChild(card);
    });
}

$('btn-retry').addEventListener('click', () => {
    showScreen('quiz');
    resetQuiz();
});

$('btn-back-home').addEventListener('click', () => {
    showScreen('quiz');
    resetQuiz();
});

// ===== Admin Panel =====
async function renderAdmin() {
    try {
        const usersSnap = await db.collection('users').get();
        const resultsSnap = await db.collection('results').orderBy('date', 'desc').get();

        const users = usersSnap.docs.map(d => d.data());
        const results = resultsSnap.docs.map(d => d.data());

        $('admin-total-users').textContent = users.length;
        $('admin-total-quizzes').textContent = results.length;

        if (results.length > 0) {
            const avg = Math.round(results.reduce((a, r) => a + r.pct, 0) / results.length);
            $('admin-avg-score').textContent = avg + '%';
        } else {
            $('admin-avg-score').textContent = '--';
        }

        const tbody = $('admin-table-body');
        tbody.innerHTML = '';

        if (results.length === 0) {
            $('admin-empty').classList.remove('hidden');
            $('admin-table').parentElement.classList.add('hidden');
            return;
        }

        $('admin-empty').classList.add('hidden');
        $('admin-table').parentElement.classList.remove('hidden');

        results.forEach(r => {
            const tr = document.createElement('tr');
            const pillClass = r.pct >= 80 ? 'high' : r.pct >= 60 ? 'medium' : 'low';
            let dateStr = '--';
            if (r.date && r.date.toDate) {
                const d = r.date.toDate();
                dateStr = d.toLocaleDateString('pt-BR') + ' ' + d.toLocaleTimeString('pt-BR', { hour: '2-digit', minute: '2-digit' });
            }

            tr.innerHTML = `
                <td>${r.nome || '--'}</td>
                <td>${r.hits}/${r.total}</td>
                <td><span class="score-pill ${pillClass}">${r.pct}%</span></td>
                <td>${dateStr}</td>`;
            tbody.appendChild(tr);
        });
    } catch {
        toast('Erro ao carregar dados administrativos.', 'error');
    }
}

$('btn-admin-logout').addEventListener('click', async () => {
    await auth.signOut();
    showScreen('auth');
    $('form-login').reset();
});

// ===== Init =====
showScreen('auth');
