import React, { useEffect, useState } from 'react'
import './NewCollections.css'
import Item from '../Item/Item'

export const NewCollections = () => {

  const [new_collections,setNew_collection] = useState([]);

  useEffect(()=>{
    fetch('http://localhost:4000/newcollections')
    .then((res)=>res.json())
    .then((data)=>setNew_collection(data));
  },[])

  return (
    <div className='new-collections'>
        <h1>NEW COLLECTIONS</h1>
        <hr/>
        <div className="new-collections-item">
            {new_collections.map((item,i)=>{
                return <Item key={i} id={item.id} image={item.image} name={item.name} new_price={item.new_price} old_price={item.old_price}/>
            })}
        </div>
    </div>
  )
}
