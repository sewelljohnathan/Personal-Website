import { auth } from "/config/firebase"
import { createUserWithEmailAndPassword, signInWithEmailAndPassword, sendEmailVerification, signOut } from "firebase/auth";


const AuthBtns = props => {

    const resetSignupModal = () => {
        const signupEmail = document.getElementById("signupEmail");
        signupEmail.value = "";
        const signupPassword = document.getElementById("signupPassword");
        signupPassword.value = "";
        const signupAlert = document.getElementById("signupAlert");
        signupAlert.textContent = "";
    }
    const resetLoginModal = () => {
        const loginEmail = document.getElementById("loginEmail");
        loginEmail.value = "";
        const loginPassword = document.getElementById("loginPassword");
        loginPassword.value = "";
        const loginAlert = document.getElementById("loginAlert");
        loginAlert.textContent = "";
    }

    const openSignupModal = () => {
        const { Modal } = require("bootstrap");
        
        // Reset Information
        resetSignupModal();

        // Show Modal
        const signupModal = new Modal("#signupModal");
        signupModal.show();
    }
    const openLoginModal = () => {
        const { Modal } = require("bootstrap");
        
        // Reset Information
        resetLoginModal();

        // Show Modal
        const loginModal = new Modal("#loginModal");
        loginModal.show();
    }

    const signup = (e) => {
        e.preventDefault();

        const email = e.target.email.value;
        const password = e.target.password.value;
        const signupAlert = document.getElementById("signupAlert");

        createUserWithEmailAndPassword(auth, email, password)
        .then((userCredential) => {
            const user = userCredential.user;
            sendEmailVerification(user);
            signOut(auth);
            
            resetSignupModal();
            signupAlert.textContent = "A verification email has been sent!"
        })
        .catch((error) => {
            switch (error.code) {
                case "auth/email-already-in-use":
                    signupAlert.textContent = "This email has aleady been used."
                    break;
                case "auth/invalid-email":
                    signupAlert.textContent = "This is not a valid email."
                    break;
                case "auth/operation-not-allowed":
                    console.error("Enable email/password accounts.")
                case "auth/weak-password":
                    signupAlert.textContent = "Password is too weak."
                    break;
            }
        });
    }
    const login = (e) => {
        e.preventDefault();

        const email = e.target.email.value;
        const password = e.target.password.value;
        const loginAlert = document.getElementById("loginAlert");
        
        signInWithEmailAndPassword(auth, email, password)
        .then((userCredential) => {
            const user = userCredential.user;
            if (!user.emailVerified) {
                signOut(auth);
                loginAlert.textContent = "Please verify your email before logging in.";
                return;
            }
            resetLoginModal();
        })
        .catch((error) => {
            switch (error.code) {
                case "auth/invalid-email":
                    loginAlert.textContent = "This is not a valid email.";
                    break;
                case "auth/user-disabled":
                    loginAlert.textContent = "This account has been disabled.";
                    break;
                case "auth/user-not-found":
                    loginAlert.textContent = "There is no account with this email.";
                    break;
                case "auth/wrong-password":
                    loginAlert.textContent = "Wrong password.";
                    break;
              }
        });
    } 

    return (
        <div>
            <div id="signupModal" class="modal fade" tabIndex="-1">
                <div class="modal-dialog">
                    <div class="modal-content">
                        <form onSubmit={signup}>
                            <div class="modal-header">
                                <h5 class="modal-title">Sign Up!</h5>
                                <button type="button" class="btn-close" data-bs-dismiss="modal"></button>
                            </div>
                            <div class="modal-body">
                                <div>
                                    <label for="email" class="form-label" >Email address</label>
                                    <input name="email" class="form-control" id="signupEmail" type="email" />
                                    <p class="form-text">This will never be shared.</p>
                                </div>
                                <div>
                                    <label for="email" class="form-label">Password</label>
                                    <input name="password" class="form-control" id="signupPassword" type="password" />
                                </div>     
                            </div>
                            <div class="modal-footer">
                                <p id="signupAlert"></p>
                                <button type="button" class="btn btn-secondary bg-gradient" data-bs-dismiss="modal">Close</button>
                                <button type="submit" class="btn btn-primary bg-gradient">Sign Up</button>
                            </div>
                        </form>
                    </div>
                </div>
            </div> 
            <div id="loginModal" class="modal fade" tabIndex="-1">
                <div class="modal-dialog">
                    <div class="modal-content">
                        <form onSubmit={login}>
                            <div class="modal-header">
                                <h5 class="modal-title">Log In!</h5>
                                <button type="button" class="btn-close" data-bs-dismiss="modal"></button>
                            </div>
                            <div class="modal-body">
                                <div>
                                    <label for="email" class="form-label" >Email address</label>
                                    <input name="email" class="form-control" id="loginEmail" type="email" />
                                    <p class="form-text">This will never be shared.</p>
                                </div>
                                <div>
                                    <label for="email" class="form-label">Password</label>
                                    <input name="password" class="form-control" id="loginPassword" type="password" />
                                </div>
                            </div>
                            <div class="modal-footer">
                                <p id="loginAlert"></p>
                                <button type="button" class="btn btn-secondary bg-gradient" data-bs-dismiss="modal">Close</button>
                                <button type="submit" class="btn btn-primary bg-gradient">Log In</button>
                            </div>
                        </form>
                    </div>
                </div>
            </div> 
            <div class="gap-2 d-flex justify-content-end">
                <button type="button" class="btn btn-primary btn-sm bg-gradient" onClick={openLoginModal}>Login</button>
                <button type="button" class="btn btn-secondary btn-sm bg-gradient" onClick={openSignupModal}>Sign Up</button>
            </div>
        </div>
    )
}

export default AuthBtns;