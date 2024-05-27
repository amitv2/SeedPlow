import { useEffect, useState } from "react";
import { getAuth, signOut,onAuthStateChanged } from "firebase/auth";
import { app } from "./firebaseConfig";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import { faRightToBracket} from "@fortawesome/free-solid-svg-icons";
// import { useNavigate } from "react-router-dom";
function LogOut() {
    const auth = getAuth(app);

  const [user, setuser] = useState(null)

  useEffect(() => {
  onAuthStateChanged(auth,(user)=>
  {
    if(user)
    {
      setuser(user)
    }else
    {
      setuser(null)
    }

  })
  }, []);
  if(user===null)
  {
    return (
      <>

      
      </>
    )
  }
  // const user=JSON.parse(localStorage.getItem('user'))
  // const navigate=useNavigate()
  // const Logout = async () => {
  //   await signOut(auth)
  //     .then(() => {
  //       // Sign-out successful.
  //       localStorage.removeItem("token");
  //       localStorage.removeItem("user");
  //     navigate("/SignIn")
  //     })
  //     .catch((error) => {
  //       console.log(error);
  //     });
  // };

console.log(user);
  return (
  <div className=" flex space-x-2 mt-3 ">
  <h2>{user.displayName
}</h2>
<button  onClick={()=>signOut(auth)}><FontAwesomeIcon icon={faRightToBracket} className="text-2xl"
/>  </button>
  </div>
  )
}

export default LogOut;
