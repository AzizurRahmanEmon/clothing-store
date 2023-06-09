import { createUserDocumentFromAuth, signInWithGooglePopup } from "../../../utils/firebase.utils"

const SignIn = () => {
    const logGoogleUser = async () => {
        const { user } = await signInWithGooglePopup();
        const userDocRef = createUserDocumentFromAuth(user);
    }
    return (
        <div>
           <h1>Sign In Page</h1> 
           <button onClick={logGoogleUser}>Sign In with google popup</button>
        </div>
    )
}

export default SignIn