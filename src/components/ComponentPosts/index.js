import React from 'react'

export const ComponentPosts = ({items, title})=>{
 
  return(<div>
    <h2>Recent {title}</h2>
    <h3>Here we get the props from parent component({title}) and render the array:</h3>
    
    {items.map((item)=>{
      return(<div key={item.id}>
        <p>{item.title}</p>
      </div>)
    })}
    </div>)
}