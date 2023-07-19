import React from 'react'
import Styles from "../styles/Signup.module.css"
const Signup = () => {
  return (
    <>
   {/* <div id={Styles.container}>
    <label>User Name</label>
    <input type="text" name="" id="" />
    <label>Email</label>
    <input type="email" name="" id="" />
    <label>Password</label>
    <input type="text" name="" id="" />
    <label>Confirm password</label>
    <input type="text" name="" id="" />
   </div> */}
   <div className={Styles.form}>
      <div className={Styles.title}>Welcome</div>
      <div className={Styles.subtitle}>Let's create your account!</div>

      <div className={Styles.inputcontainer} id={Styles.ic1}>
        <input placeholder="" type="text" className={Styles.input} id={Styles.firstname}/>
        <div className={Styles.cut}></div>
        <label className={Styles.iLabel} for="firstname">First name</label>
      </div>

      <div className={Styles.inputcontainer} id={Styles.ic2}>
        <input placeholder="" type="text" className={Styles.input} id={Styles.lastname}/>
        <div className={Styles.cut}></div>
        <label className={Styles.iLabel} for="lastname">Last name</label>
      </div>
      <div className={Styles.inputcontainer} id={Styles.ic2}>
        <input placeholder="" type="text" className={Styles.input} id={Styles.email}/>
        <div className={Styles.cut} id={Styles.cutshort}></div>
        <label className={Styles.iLabel} for="email">Email</label>
      </div>
      <button className={Styles.submit} type="text">submit</button>
    </div>
    </>
  )
}

export default Signup