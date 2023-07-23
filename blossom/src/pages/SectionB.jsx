import React from 'react'
import Styles from "../styles/SectionB.module.css"
 const sectionBcard=[
    {id:"1",image:"https://yourimageshare.com/ib/5dsj7H8hzZ.webp",title:"Different learning techniques"},
    {id:"2",image:"https://yourimageshare.com/ib/Kpf6N7NrfX.webp",title:"Why online?"},
    {id:"3",image:"https://img.freepik.com/free-photo/beautiful-redhead-female-graduate-smiling-holding-books-diploma_176420-14261.jpg?w=996&t=st=1689718005~exp=1689718605~hmac=14bdc51567757b5afe4e2f2ae9db7161b17209171996f3924e045396a72d861f",title:"Earn your certificate in language proficiency"}
 ]

const SectionB = () => {
  return (<>
  <div  style={{marginTop:"70px"}}>
    <div className={Styles.main}>
   <h2 style={{textAlign:"center"}}>Why study with <span style={{color:"red"}}>Blossom</span>?</h2>
   </div>
      <div id={Styles.sectionB}>
      {
        sectionBcard?.map((item)=>(
            <div key={item.id} className={Styles.card} >
                <div className={Styles.imgCard}>
  <img className={Styles.image} src={item.image} alt="card" />

                </div>
                  
                <p>{item.title}</p>
            </div>
        ))
      }
       </div>
      </div>
  </>

  )
}

export default SectionB