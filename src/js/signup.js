import { signup } from './auth.js';

document.addEventListener('DOMContentLoaded', () => {
  const form = document.getElementById('signupForm');
  if (form) {
    form.addEventListener('submit', async (e) => {
      e.preventDefault();
      await signup();
      const email = document.getElementById('email').value;
      const password = document.getElementById('password').value;
      console.log(email, password);
    });
  }
});