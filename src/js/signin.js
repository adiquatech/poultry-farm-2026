import { login } from './auth.js';

document.addEventListener('DOMContentLoaded', () => {
  const form = document.getElementById('signinForm');
  if (form) {
    form.addEventListener('submit', async (e) => {
      e.preventDefault();
      await login(); 
      const email = document.getElementById('email').value;
      const password = document.getElementById('password').value;
    });
  }
});