import React from 'react'
import Styles from "../styles/SectionA.module.css"

const sectionCard=[
     {  id:"1",
        image:"https://yourimageshare.com/ib/EtKcJ17ryb.webp",
        title:"Behind the program",
        btntext:"Discover Now"
     },
      {  id:"2",
     image:"https://yourimageshare.com/ib/wcmsEpRS0L.webp",
     title:"Why online?",
     btntext:"Discover Now"
  },
   {  id:"3",
  image:"https://yourimageshare.com/ib/Me8LrnwPkm.webp",
  title:"The science of ONIT",
  btntext:"Discover Now"
}
]

const SectionA = () => {
  return (
    <>
    <div>
     <h2 id={Styles.title}>Our <span style={{color:"red"}}>Language</span> learning platform</h2>
    <div id={Styles.sectionA}>
   
    {
        sectionCard?.map((item)=>(
            <div key={item.id}>
              <img src={item.image} alt="card" />
              <h3>{item.title}</h3>
              <button>{item.btntext}</button>
            </div>
        ))
    }
</div>
    </div>
    </>
  )
}

export default SectionA