import { EditFilled } from '@ant-design/icons'
import React from 'react'
import { BiEditAlt, BiTrash } from 'react-icons/bi'

const UserPage = ({Info,HandleDelete,handleEdit}) => {
    const {id,name,email} = Info


    
  return (
    <div >
       <div>
         <img src="https://placehold.co/60x60" alt="" style={{borderRadius:'50%'}} />
      </div>
      <div style={{display:'flex',alignItems:'center',justifyContent:'space-between'}}>
      <div>
        <div>{name}</div>
        <div>{email}</div>
      </div>

        <div>
        <BiTrash onClick={()=>HandleDelete(id)}/>
        <BiEditAlt onClick={()=>handleEdit(id)} />
       </div>
      </div>
       </div>
    
  )
}

export default UserPage
