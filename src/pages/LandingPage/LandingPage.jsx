import './LandingPage.css'
import Login from './Login'
import Signup from './Signup'



function LandingPage() {
   return(
      <div className="LandingPage">
         <div className="LandingPage-content text-center">
            <div className="LandingPage-border">
               <div className="col-md-4">
                  <div className="LandingPage-contentChild text-center">
                     <img src="https://static.npmjs.com/attachments/ck3uweazy72ye8874y9kkxnx1-gak.png" />
                  </div>
                  <div className="">
                     Sign-up now and subscribe to enjoy all the cool and the latest books - The best book rental service provider in Indonesia. 
                  </div>


                  <div className="LandingPage-tombol pt-4 text-center">
                     <a name="" id="" class="btn btn-danger" href="#" role="button">Sign Up</a>
                     <a name="" id="" class="btn btn-light" href="#" role="button">Sign In</a>
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