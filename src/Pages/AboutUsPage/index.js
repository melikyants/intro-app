import React from 'react'
import { Component1,ComponentWithState,ComponentPosts } from '../../components'

const textForComponent = "We are passing props to a component from the About Page"
export const AboutUsPage = ()=>{
  
  const [posts, setPosts] = React.useState([])
  const [showAnotherPage, setShowAnotherPage] = React.useState(false)

  React.useEffect( async()=>{
    let result = [];

    
    async function getPosts (){
      let result = []
      await fetch('https://jsonplaceholder.typicode.com/posts')
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
        setPosts(posts=>[...result])
      }
      }
    getPosts()
  },[])

  // [] - its mean we render only one time when component mounted
  // without [] - will run on each render
  //[someId] will run each time someId updated

  const onSavePosts = (state)=>{
    console.log('state',state)
  }

  return(<div>
    <h1> About Us </h1>
    <button onClick={()=>setShowAnotherPage(!showAnotherPage)}>Change What to show </button>
    {showAnotherPage ?(<div>
    <Component1 text={textForComponent}/>
    <ComponentWithState initialCount={5}/>
    {posts.length && <ComponentPosts title="About us" items={posts} onSave={onSavePosts}/>}
    </div>
    ) : <div>Another PAge rendered with a state </div>}
  </div>)
}