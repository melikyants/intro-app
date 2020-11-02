import React from 'react'

export const ComponentPosts = ({items, title, onSave})=>{

  const [state, setState] = React.useState({})
  const onChangeTitle = (evt)=>{
    console.log("onChangeTitle -> e", evt)
    const value = evt.target.value;
    console.log("onChangeTitle -> value", value)
    setState({
      ...state,
      [evt.target.name]: value
    });
  }
  return(<div>
    <h2>Recent {title}</h2>
    <h3>Here we get the props from parent component({title}) and render the array:</h3>
    <button onClick={()=>onSave(state)}>Update titles</button>
    {items.map((item)=>{
      return(<div key={item.id}>
        <p>{item.title}: {item.id}</p>
        <input defaultValue={item.title} onChange={onChangeTitle} name={item.id}/>
      </div>)
    })}
      
    </div>)
}