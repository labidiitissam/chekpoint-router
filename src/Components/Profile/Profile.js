//importation
import React from 'react'

const Profile = () => {
  return (

    //profile
    <div style={{display:' flex',flexDirection:'Row',justifyContent:'space-around',color:'black',padding:'1.5%', backgroundColor:'pink',width:'90%',marginLeft:'5%'}}>
    <a href="/FullName">FullName</a>
    <a href='/Address'>Address</a>
    <a href='/ProfilePhoto'>ProfilePhoto</a>
    </div>
  )
}

export default Profile
