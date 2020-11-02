import React from 'react'
import { Component1 , ComponentWithState, ComponentPosts} from '../../components'

const textForComponent = "We are passing props to a component from the Home Page"
export const HomePage = ()=>{
  const [todos, setTodos] = React.useState([])
  
  React.useEffect( async()=>{
    let result = [];

    
    async function getTodos (){
      let result = []
      await fetch('https://jsonplaceholder.typicode.com/todos')
        .then(response => response.json())
        .then(data => {
          if(data){
            for(let i in data){
              result.push(data[i])
            }
          }
        })
      if(result){
        console.log("AboutUsPage -> result", result)
        setTodos(todos=>[...result])
      }
      }
    getTodos()
  },[])

  // [] - its mean we render only one time when component mounted
  // without [] - will run on each render
  //[someId] will run each time someId updated

  const onSave = (state)=>{
  let updatedTodos = []
    for(let i in state){
      
    let findTodo = todos.filter((todo)=> todo.id === +i)[0]
    updatedTodos.push([Object.assign(findTodo, {title: state[i]})])
  }
  setTodos(todos=> [...todos, updatedTodos])
  }
  
  return(<div>
    <h1> Home  </h1>
    <Component1 text={textForComponent}/>
    <ComponentWithState initialCount={34}/>

    {todos.length && <ComponentPosts title="Todos" items={todos} onSave={onSave}/>}
  </div>)
}