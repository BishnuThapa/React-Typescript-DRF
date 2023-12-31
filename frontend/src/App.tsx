import { useState, useEffect } from 'react'
import './App.css'
import axios from 'axios'

interface Post{
  id: number;
  title: string;
  body: string;
}

function App() {
  const [post, setPost] = useState<Post[]>([])
  // useEffect(() => {
  //   // console.log(import.meta.env.VITE_API_URL)
  //   const response = fetch(`${import.meta.env.VITE_API_URL}posts`)
  //   const result = response.json()
  //   setData(result)
  // },[])
  useEffect(() => {
    axios.get(`${import.meta.env.VITE_API_URL}posts`)
      .then((res) => setPost(res.data))
      // .catch((error) => setError(error));
  },[])


  // if (error) return <p>{error}</p>;
  return (
    <>
      <h2>Welcome to React & Django Rest Framework Course</h2>
      <ul>
        {post.map((item) => (<li key={item.id}>{item.id} - {item.title} - { item.body}</li>))}
      </ul>
    </>
  );
}

export default App
