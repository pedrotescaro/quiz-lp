/* ============================================
   Firebase Configuration
   ============================================
   INSTRUÇÕES:
   1. Acesse https://console.firebase.google.com
   2. Crie um novo projeto (ou use um existente)
   3. Vá em "Configurações do projeto" > "Seus apps" > Adicionar app web
   4. Copie as credenciais do firebaseConfig e cole abaixo
   5. No console Firebase, ative:
      - Authentication > Sign-in method > E-mail/Senha
      - Firestore Database > Criar banco de dados (modo de teste)
   ============================================ */

const firebaseConfig = {
    apiKey: "AIzaSyBe0cPCP_1I2kXHUI91sgz_8kqZX2OWL5M",
    authDomain: "quiz-lp-site.firebaseapp.com",
    projectId: "quiz-lp-site",
    storageBucket: "quiz-lp-site.firebasestorage.app",
    messagingSenderId: "194431148284",
    appId: "1:194431148284:web:d159da914ca73e24747779"
};

// Inicializar Firebase
firebase.initializeApp(firebaseConfig);
const auth = firebase.auth();
const db = firebase.firestore();
