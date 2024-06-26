export function authErrorMessage(error) {

    let errorMessage = '';

    switch (error.code) {
        case 'auth/email-already-in-use':
            errorMessage = 'The email address is already in use by another account.';
            break;
        case 'auth/invalid-email':
            errorMessage = 'The email address is not valid.';
            break;
        case 'auth/operation-not-allowed':
            errorMessage = 'Email and password sign-in is not enabled.';
            break;
        case 'auth/weak-password':
            errorMessage = 'The password is too weak.';
            break;
        case 'auth/user-disabled':
            errorMessage = 'This user account has been disabled.';
            break;
        case 'auth/user-not-found':
            errorMessage = 'There is no user corresponding to this email.';
            break;
        case 'auth/wrong-password':
            errorMessage = 'The password is invalid or the user does not have a password.';
            break;
        case 'auth/invalid-credential':
            errorMessage = 'The password or email wrong.';
            break;
        default:
            errorMessage = 'An unknown error occurred.';
            break;
    }

    return errorMessage
}
