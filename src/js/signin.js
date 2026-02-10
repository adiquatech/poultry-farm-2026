// signin.js
import { login } from './auth.js';

document.addEventListener('DOMContentLoaded', () => {
  const loginBtn = document.getElementById('auth0-login-btn');
  const messageEl = document.getElementById('login-message');

  if (loginBtn) {
    loginBtn.addEventListener('click', async () => {
      // Show loading feedback
      if (messageEl) messageEl.textContent = 'Redirecting to sign in...';
      loginBtn.disabled = true;
      loginBtn.textContent = 'Redirecting...';

      try {
        await login();  // Redirects to Auth0 hosted login page
      } catch (err) {
        if (messageEl) messageEl.textContent = 'Sign in failed. Please try again.';
        loginBtn.disabled = false;
        loginBtn.textContent = 'Sign In with Auth0';
        console.error('Login error:', err);
      }
    });
  } else {
    console.error('Login button not found');
  }
});