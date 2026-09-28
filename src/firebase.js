// Firebase web config for the bks-nfl project. These values are public
// identifiers, not secrets; access is enforced by Firebase Auth and rules.
import { initializeApp } from 'https://www.gstatic.com/firebasejs/12.19.0/firebase-app.js';
import { getAuth } from 'https://www.gstatic.com/firebasejs/12.19.0/firebase-auth.js';

const firebaseConfig = {
    apiKey: 'AIzaSyDPRFGTmq--WO5izpjzqg_EcrlqcaxlQlM',
    authDomain: 'bks-nfl.firebaseapp.com',
    projectId: 'bks-nfl',
    storageBucket: 'bks-nfl.firebasestorage.app',
    messagingSenderId: '1032147976875',
    appId: '1:1032147976875:web:a2f44bb4db2b1cdd0bedee',
};

export const auth = getAuth(initializeApp(firebaseConfig));

const errorMessages = {
    'auth/invalid-credential': 'Incorrect email or password.',
    'auth/invalid-email': 'Please enter a valid email address.',
    'auth/user-disabled': 'This account has been disabled.',
    'auth/email-already-in-use': 'An account with this email already exists.',
    'auth/weak-password': 'Please choose a stronger password.',
    'auth/too-many-requests': 'Too many attempts. Please wait a moment and try again.',
    'auth/network-request-failed': 'Network error. Check your connection and try again.',
    'auth/admin-restricted-operation': 'New sign-ups are not open yet.',
};

export function authErrorMessage(error) {
    return errorMessages[error?.code] || 'Something went wrong. Please try again.';
}
