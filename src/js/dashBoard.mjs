import { updateAuthUI } from './main.js';
import { login, signup, logout } from './auth.js';

export function initializeUI() {
  const sidebar = document.getElementById('sidebar');
  const hamburger = document.getElementById('hamburger');
  const loginLink = document.getElementById('loginLink');
  const signupLink = document.getElementById('signupLink');
  const logoutLink = document.getElementById('logoutLink');

  if (hamburger && sidebar) {
    hamburger.addEventListener('click', () => {
      sidebar.classList.toggle('active');
    });
    console.log('Hamburger and sidebar initialized');
  } else {
    console.error('Hamburger or sidebar element not found');
  }

  if (loginLink) {
    loginLink.addEventListener('click', async (e) => {
      e.preventDefault();
      await login();
    });
  }

  if (signupLink) {
    signupLink.addEventListener('click', async (e) => {
      e.preventDefault();
      await signup();
    });
  }

  if (logoutLink) {
    logoutLink.addEventListener('click', async (e) => {
      e.preventDefault();
      await logout();
      updateAuthUI();
    });
  }
}