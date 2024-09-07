import Header from "./Header"
import {useState} from "react"

 const Login = () => {

    const [isSignInForm,setIsSignInForm] = useState(true);
    const toggleSignUp = () =>{
        setIsSignInForm(!isSignInForm)
    }
  return  <div>
        <Header/>
        <div className="absolute">
        <img alt="" aria-hidden="true" data-uia="nmhp-card-hero+background+image" src="https://assets.nflxext.com/ffe/siteui/vlv3/8728e059-7686-4d2d-a67a-84872bd71025/e90516bd-6925-4341-a6cf-0b9f3d0c140a/IN-en-20240708-POP_SIGNUP_TWO_WEEKS-perspective_WEB_34324b52-d094-482b-8c2a-708dc64c9065_small.jpg" srcset="https://assets.nflxext.com/ffe/siteui/vlv3/8728e059-7686-4d2d-a67a-84872bd71025/e90516bd-6925-4341-a6cf-0b9f3d0c140a/IN-en-20240708-POP_SIGNUP_TWO_WEEKS-perspective_WEB_34324b52-d094-482b-8c2a-708dc64c9065_small.jpg 1000w, https://assets.nflxext.com/ffe/siteui/vlv3/8728e059-7686-4d2d-a67a-84872bd71025/e90516bd-6925-4341-a6cf-0b9f3d0c140a/IN-en-20240708-POP_SIGNUP_TWO_WEEKS-perspective_WEB_34324b52-d094-482b-8c2a-708dc64c9065_medium.jpg 1500w, https://assets.nflxext.com/ffe/siteui/vlv3/8728e059-7686-4d2d-a67a-84872bd71025/e90516bd-6925-4341-a6cf-0b9f3d0c140a/IN-en-20240708-POP_SIGNUP_TWO_WEEKS-perspective_WEB_34324b52-d094-482b-8c2a-708dc64c9065_large.jpg 1800w"></img>
        </div>
        <form className="w-80 opacity-80  absolut  p-8 bg-black absolute mx-auto my-40 right-0 left-0 flex flex-col">
            <h1 className="text-white py-2 text-2xl ">{isSignInForm ? "Sign In" : "Sign Up"}</h1>
            <input type="text" placeholder="Email Address" className="p-2 my-2  w-full bg-gray-800 "/>
            {!isSignInForm ? <input type="text" placeholder="Full Name" className="p-2 my-2  w-full bg-gray-800 "/> : null}
            <input type="password" placeholder="Password" className="p-2 my-2 w-full bg-gray-800 "/>
            <button className="p-2  w-full bg-red-800 hover:bg-red-900 my-2 text-white rounded-lg">{isSignInForm ? "Sign In" : "Sign Up"}</button>
            <p className="text-white py-2 cursor-pointer" onClick={toggleSignUp}>{isSignInForm ? "New to Netflix? Sign Up." : "Already a registered. Sign In Now."}</p>
        </form>
    </div>
 }

 export default Login;