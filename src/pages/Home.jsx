import { UserContext } from "../contexts/userContext"
import { useContext, useEffect, useState } from "react"
import { onAuthStateChanged, getAuth, signOut } from "firebase/auth"

export function Home() {
    function checkIfIsCancelled() {
        if (cancelled) {
          return;
        }
      }
    
    const { user, setUser } = useContext(UserContext)
    const [cancelled, setCancelled] = useState(false);
    console.log(user)
    const auth = getAuth()
    const logout = () => {
        checkIfIsCancelled();
    
        signOut(auth);
      };
    return (
        <div className="text-white text-3xl font-arial font-bold flex w-screen h-screen bg-zinc-600">
            <div className="flex bg-black p-5 w-screen h-28 items-center justify-between">
                <div className=" flex gap-10">
                    <img className="w-20 h-20 rounded-full" src={user.photoURL} alt="" />
                    <div className="flex flex-col">
                        <strong className="text-blue-600" > {user.displayName}</strong>
                        <p className="text-lg">{user.email}</p>
                    </div>

                </div>
                <button onClick={logout} className="bg-blue-600 p-2 hover:shadow-xl text-xl hover:shadow-zinc-700 hover:duration-300 rounded-md">Encerrar sessão</button>
            </div>
        </div>
    )
}
