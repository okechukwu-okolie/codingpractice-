import React from 'react'

const Remove = () => {


    const no =()=>{
        
        console.log('false')
        return;
    }
     const yes =()=>{
       
        console.log('true')
        return;
    }
  return (
    <div>
      <h1>
        Do you want to delete this item
         <button className='ui green right floated button' onClick={yes}>Yes</button>
          <button className='ui red right floated button' onClick={no}>No</button>
      </h1>
    </div>
  )
}

export default Remove
