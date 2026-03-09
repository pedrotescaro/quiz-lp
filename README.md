<p align="center">
  <img src="favicon.svg" alt="Quiz LP Logo" width="80" height="80">
</p>

<h1 align="center">Quiz LP — Prevenção de Lesão por Pressão</h1>

<p align="center">
  <strong>Plataforma educativa interativa para enfermeiros do Hospital Dr. Carmino Caricchio – Tatuapé</strong>
</p>

<p align="center">
  <img src="https://img.shields.io/badge/Firebase-Auth%20%2B%20Firestore-FFCA28?style=flat-square&logo=firebase&logoColor=white" alt="Firebase">
  <img src="https://img.shields.io/badge/Deploy-Vercel-000000?style=flat-square&logo=vercel&logoColor=white" alt="Vercel">
  <img src="https://img.shields.io/badge/HTML%2FCSS%2FJS-Vanilla-0f766e?style=flat-square" alt="Vanilla JS">
  <img src="https://img.shields.io/badge/Licença-Uso%20Institucional-115e59?style=flat-square" alt="Licença">
</p>

---

## 📋 Sobre o Projeto

O **Quiz LP** é uma aplicação web desenvolvida para capacitação continuada de profissionais de enfermagem na **prevenção de Lesão por Pressão (LPP)**. O conteúdo baseia-se nas diretrizes internacionais atualizadas **EPUAP/NPIAP/PPPIA 2019** e revisões nacionais, adaptadas à realidade hospitalar.

### Objetivos

- Testar conhecimentos em protocolos de avaliação de risco (Braden)
- Reforçar práticas de escolha de superfícies de suporte, manejo nutricional e mobilização precoce
- Fornecer feedback detalhado com explicações de cada alternativa
- Promover decisões seguras conforme evidências do COFEN/ANVISA

> **Comissão de Cuidados com a Pele**  
> Elaborado por Pedro Antônio Silvestre Tescaro

---

## ✨ Funcionalidades

| Funcionalidade | Descrição |
|---|---|
| **Autenticação** | Login por e-mail/senha e Google (Firebase Auth) |
| **Quiz interativo** | 10 questões de múltipla escolha com feedback imediato |
| **Explicações detalhadas** | Cada alternativa possui justificativa baseada em evidências |
| **Resultado visual** | Pontuação com gráfico circular animado e revisão completa |
| **Painel administrativo** | Visualização de todos os resultados dos enfermeiros |
| **Histórico** | Resultados salvos no Firestore com data e hora |
| **Responsivo** | Design adaptado para desktop, tablet e celular |
| **PWA-ready** | Favicon SVG e meta tags otimizadas |

---

## 🏗️ Estrutura do Projeto

```
QuestionarioSaude/
├── index.html          # Página única (SPA) com todas as telas
├── style.css           # Estilos completos (variáveis CSS, responsivo)
├── app.js              # Lógica da aplicação (auth, quiz, admin)
├── data.js             # Banco de questões e credenciais admin
├── firebase-config.js  # Configuração do Firebase
├── favicon.svg         # Ícone do site (logo em SVG)
├── vercel.json         # Configuração de deploy na Vercel
└── README.md           # Este arquivo
```

---

## 🚀 Como Executar

### Pré-requisitos

- Navegador moderno (Chrome, Firefox, Edge, Safari)
- Projeto Firebase configurado com:
  - **Authentication** → E-mail/Senha e Google habilitados
  - **Cloud Firestore** → Banco de dados criado

### Execução Local

1. **Clone ou baixe** o repositório:
   ```bash
   git clone <url-do-repositorio>
   cd QuestionarioSaude
   ```

2. **Configure o Firebase** em `firebase-config.js` com suas credenciais:
   ```javascript
   const firebaseConfig = {
       apiKey: "SUA_API_KEY",
       authDomain: "SEU_PROJETO.firebaseapp.com",
       projectId: "SEU_PROJETO",
       storageBucket: "SEU_PROJETO.appspot.com",
       messagingSenderId: "SEU_SENDER_ID",
       appId: "SEU_APP_ID"
   };
   ```

3. **Abra o `index.html`** diretamente no navegador ou use um servidor local:
   ```bash
   npx serve .
   ```

### Deploy na Vercel

O projeto já inclui um `vercel.json` configurado. Basta conectar o repositório à Vercel e o deploy será automático.

---

## 🔐 Painel Administrativo

Acesse o painel admin com as credenciais definidas em `data.js`:

| Campo | Valor |
|---|---|
| E-mail | Definido em `ADMIN_EMAIL` |
| Senha | Definido em `ADMIN_PASS` |

O painel exibe:
- Total de enfermeiros cadastrados
- Total de quizzes realizados
- Média geral de acertos
- Tabela detalhada com nome, acertos, nota e data de cada tentativa

---

## 🛡️ Segurança

- Headers de segurança configurados via `vercel.json`:
  - `X-Content-Type-Options: nosniff`
  - `X-Frame-Options: DENY`
  - `Referrer-Policy: strict-origin-when-cross-origin`
- Autenticação gerenciada pelo Firebase Auth
- Dados protegidos pelo Cloud Firestore

---

## 🎨 Tecnologias

- **HTML5** — Estrutura semântica
- **CSS3** — Variáveis CSS, Flexbox, Grid, animações
- **JavaScript (ES6+)** — Lógica assíncrona com async/await
- **Firebase** — Authentication + Cloud Firestore
- **Google Fonts** — Inter + Playfair Display
- **Vercel** — Hospedagem e CDN

---

## 📚 Referências Científicas

- EPUAP/NPIAP/PPPIA — *Prevention and Treatment of Pressure Ulcers/Injuries: Clinical Practice Guideline* (2019)
- COFEN — Resoluções sobre segurança do paciente
- ANVISA — Protocolos de prevenção de lesão por pressão

---

<p align="center">
  Feito com dedicação para a equipe de enfermagem do <strong>Hospital Dr. Carmino Caricchio – Tatuapé</strong>
</p>
