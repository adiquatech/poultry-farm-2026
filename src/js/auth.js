import { createAuth0Client } from '@auth0/auth0-spa-js';

let auth0Client;

async function createClient() {
  if (!auth0Client) {
    auth0Client = await createAuth0Client({
      domain: 'dev-jvrr4q36ry8qm78n.us.auth0.com',
      clientId: 'ElpQ7avJLY9hpUfINUPKnsPREZASndlK',
      authorizationParams: {
        redirect_uri: window.location.origin
      }
    });
  }
  return auth0Client;
}

// Signup (redirects to Auth0 hosted page)
export async function signup() {
  const client = await createClient();
  await client.loginWithRedirect({
    screen_hint: 'signup',
    signup_hint: 'email'
  });
}

// Sign-in
export async function login() {
  const client = await createClient();
  await client.loginWithRedirect({
    screen_hint: 'login'
  });
}

// Logout
export async function logout() {
  const client = await createClient();
  await client.logout({
    logoutParams: {
      returnTo: window.location.origin
    }
  });
}

// Check if user is authenticated
export async function isAuthenticated() {
  const client = await createClient();
  return await client.isAuthenticated();
}

// Get user profile
export async function getUser() {
  const client = await createClient();
  if (await client.isAuthenticated()) {
    return await client.getUser();
  }
  return null;
}

// Handle callback after redirect
export async function handleAuthCallback() {
  const client = await createClient();
  if (window.location.search.includes('code=')) {
    await client.handleRedirectCallback();
    window.history.replaceState({}, document.title, window.location.pathname);
  }
}