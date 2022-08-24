import { getAuth, signInWithPopup, GoogleAuthProvider } from "firebase/auth";
import { useContext } from "react";
import { UserContext } from "../contexts/userContext";
import { app } from "../services/firebaseConfig.JS";


export function Login() {
    const {setUser} = useContext(UserContext)

    const auth = getAuth(app);
    function signInWithGoogle() {
        const provider = new GoogleAuthProvider();
    
        signInWithPopup(auth, provider)
          .then((result) => {
            console.log(result.user);
            setUser(result.user);
    
          }).catch((error) => {
            console.log(error);
          });
      }

    return (

        <div className="w-screen h-screen justify-center items-center bg-zinc-600 text-2xl flex flex-col gap-20">

            <p className="font-extrabold text-4xl w-2/4 text-center">ESTE É UM TESTE DE AUTENTICAÇÃO COM FIREBASE</p>

            <button className="w-72 h-12 bg-black text-white p-2 rounded-md" onClick={() => signInWithGoogle()}>Acesse com o google</button>

          
            
        </div>
    )
}