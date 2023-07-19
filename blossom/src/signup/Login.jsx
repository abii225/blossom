import React from 'react'
import Styles from "../styles/Login.module.css"

const Login = () => {
  return (
    <>
      <div className={Styles.content}>
         <div className={Styles.text}>
            Login
         </div>
         <form action="#">
            <div className={Styles.field}>
               <input required="" placeholder='sample@gmail.com' type="text" className={Styles.input}/>
               {/* <span className={Styles.span}><svg className={Styles.svg} xml:space="preserve"  viewBox="0 0 512 512" y="0" x="0" height="20" width="50" xmlns:xlink="http://www.w3.org/1999/xlink" version="1.1" xmlns="http://www.w3.org/2000/svg"><g><path className="" data-original="#000000" fill="#595959" d="M256 0c-74.439 0-135 60.561-135 135s60.561 135 135 135 135-60.561 135-135S330.439 0 256 0zM423.966 358.195C387.006 320.667 338.009 300 286 300h-60c-52.008 0-101.006 20.667-137.966 58.195C51.255 395.539 31 444.833 31 497c0 8.284 6.716 15 15 15h420c8.284 0 15-6.716 15-15 0-52.167-20.255-101.461-57.034-138.805z"></path></g></svg></span> */}
               <label className={Styles.label}>Email or Phone</label>
            </div>
            <div className={Styles.field}>
               <input required="" placeholder='password' type="password" className={Styles.input}/>
               {/* <span className={Styles.span}><svg  xml:space="preserve" style="enable-background:new 0 0 512 512" viewBox="0 0 512 512" y="0" x="0" height="20" width="50" xmlns:xlink="http://www.w3.org/1999/xlink" version="1.1" xmlns="http://www.w3.org/2000/svg"><g><path class="" data-original="#000000" fill="#595959" d="M336 192h-16v-64C320 57.406 262.594 0 192 0S64 57.406 64 128v64H48c-26.453 0-48 21.523-48 48v224c0 26.477 21.547 48 48 48h288c26.453 0 48-21.523 48-48V240c0-26.477-21.547-48-48-48zm-229.332-64c0-47.063 38.27-85.332 85.332-85.332s85.332 38.27 85.332 85.332v64H106.668zm0 0"></path></g></svg></span> */}
               <label className={Styles.label}>Password</label>
            </div>
            <div className={Styles.forgotpass}>
               <h3>Forgot Password?</h3>
            </div>
            <button className={Styles.button}>Sign in</button>
            <div className={Styles.signup}>
               Not a member?
               <h3>signup now</h3>
            </div>
         </form>
      </div>
    </>
  )
}

export default Login