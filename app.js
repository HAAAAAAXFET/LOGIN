// Configuración de Firebase (asegúrate de reemplazar con tu configuración)
import { initializeApp } from "https://www.gstatic.com/firebasejs/11.0.2/firebase-app.js";
import { getAuth, signInWithEmailAndPassword } from "https://www.gstatic.com/firebasejs/11.0.2/firebase-analytics.js";

const firebaseConfig = {
  apiKey: "AIzaSyAKA1Ak4BqLbl-6QJe5HMo5W37vQgebGes",
  authDomain: "TU_AUTH_DOMAIN",
  projectId: "login-326ec",
  storageBucket: "login-326ec.firebasestorage.app",
  messagingSenderId: "604189500732",
  appId: "604189500732"
};

// Inicializar Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

// Manejo del formulario de inicio de sesión
document.getElementById('loginForm').addEventListener('submit', async (e) => {
  e.preventDefault();

  const email = document.getElementById('email').value;
  const password = document.getElementById('password').value;

  try {
    await signInWithEmailAndPassword(auth, email, password);
    alert('Inicio de sesión exitoso');
    // Redirigir a otra página o realizar otra acción
  } catch (error) {
    document.getElementById('errorMessage').textContent = 'Error: ' + error.message;
  }
});
