import React from 'react'

export const ComponentWithState = ({initialCount})=>{
  //creating state that will effect only this component
  // each time state updates, component rerenders
  const [count, setCount] = React.useState(initialCount)
  return(<div>
    <h2>ComponentWithState </h2>
    <p className="dynamic">{count}</p>
    <button onClick={()=>setCount(count=>count+1)}>Add +1</button>
    </div>)
}