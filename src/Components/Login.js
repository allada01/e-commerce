import { signInWithPopup } from 'firebase/auth';
import React from 'react';
import { auth, provider } from '../firebase';
import { useNavigate } from 'react-router-dom';

function Login(props) {         // props --> info={setIsLoggedIn}

    const navigate= useNavigate()              // once login is succesful go to the homepage

    function pleaseLogin(){
        //Display the PopUp
        signInWithPopup(auth, provider) // you want to signin with popup(signInWithPopup) for what purpose(authentification) for which authentification (googleauth)
        .then(function(){               // if login is succesful in Popup

            props.info(true);    // props.info is nothing but setIsLoggedIn(in Navbar component)    // if the control is coming to .then function that means user is logged in therefore setIsLoggedIn(true)
            // Logic to display the mail id and username used to login
            const userName= auth.currentUser.displayName;
            const Email= auth.currentUser.email;
            console.log(userName, Email);
            // userNavigate("/home") cannot be used here instead of the above code because it is a Hook in react and Hooks are not used in callback functions

            navigate("/home");
        })
        .catch(function(){              // if login is not succesful

        })
    
    }


  return (
    <div style={{margin: 30}}>
        <button type="button" class="btn btn-outline-primary" onClick={pleaseLogin}>Login with Google</button>

    </div>
  )
}

export default Login