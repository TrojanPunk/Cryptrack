import { useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";
import Logo from "../assets/logo.png";
import SignIn from "./signIn";

const Appbar = () => {
  const navigate = useNavigate();
  const [isSignedIn, setIsSignedIn] = useState(false);

  const handleSignIn = () => {
    setIsSignedIn(true);
  };

  const handleSignOut = () => {
    setIsSignedIn(false);
  };

  useEffect(() => {
    const email = localStorage.getItem('email');
    setIsSignedIn(!!email); // Set isSignedIn based on whether email exists in localStorage
  }, []);

  return (
    <div className="bg-gray-800 text-white h-14 flex items-center">
      <div className="wrapper-container w-full"
        style={{display: 'flex', justifyContent: 'space-between'}}
      >
        <div className="flex items-left gap-1 cursor-pointer" onClick={() => navigate('/')}>
          <img className="logo" style={{width: '200px', height: 'auto'}} src={Logo} />
        </div>
        {isSignedIn ? (
            <SignIn onSignOut={handleSignOut} />
          ) : (
            <SignIn onSignIn={handleSignIn} />
          )}
      </div>
    </div>
  )
}

export default Appbar;
