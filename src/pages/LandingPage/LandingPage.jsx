import './LandingPage.css'
import bg from '../../img/bg.png'
import logo from '../../img/logo.png'
import Login from './Login'
import Signup from './Signup'



function LandingPage() {
   return(
      <div className="LandingPage">
         <div className="LandingPage-content text-center">
            <div className="LandingPage-border">
               <div className="col-md-4">
                  <div className="LandingPage-contentChild text-center">
                     <img src={logo} />
                  </div>
                  <div className="">
                     Sign-up now and subscribe to enjoy all the cool and the latest books - The best book rental service provider in Indonesia. 
                  </div>


                  <div className="LandingPage-tombol pt-4 text-center">
                     <a name="" id="" class="btn btn-danger" href="#" role="button">Sign Up</a>
                     <a name="" id="" class="btn btn-dark" href="#" role="button">Sign In</a>
                  </div>
               </div>
            </div>
         </div>
                  <div className="Login card">
                     <Login />
                  </div>
                  <div className="Signup card">
                     <Signup />
                  </div>
      </div>
   )

}

export default LandingPage