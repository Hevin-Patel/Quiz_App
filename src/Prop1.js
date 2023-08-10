import React from 'react'

const Prop1=(prop)=> {
    const {name,course}=prop;
  return (
    <>
     <h4>Name :
     {name}<br/><br/></h4>
     {course}
    </>
   
  )
}

export default Prop1