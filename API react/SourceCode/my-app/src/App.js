
import './App.css';
// import Axios from 'axios';
import {useEffect, useState}from 'react';
function App() {

   // const options = {
   //    method: 'GET',
   //    headers: {
   //       'X-RapidAPI-Key': 'ade407ac0cmshc7ba4a3fd31f6c7p177171jsn7dfa395b9fe6',
   //       'X-RapidAPI-Host': 'imdb8.p.rapidapi.com'
   //    }
   // };
   
   // fetch('https://imdb8.p.rapidapi.com/auto-complete?q=game%20', options)
   //    .then(response => response.json())
   //    .then(response => console.log(response))
   //    .catch(err => console.error(err));











   
const [posts, setPosts] = useState([]);
useEffect(() => {
   fetch(' https://www.googleapis.com/youtube/v3/videos?part=snippet&id=t1cOVHPM_78&key=AIzaSyCoDeb-LrindSH_kSsXHq3zSJrr6BqU9kE')

   



      .then((response) => response.json())
      .then((data) => {
         console.log(data);
         setPosts(data);
      })
      .catch((err) => {
         console.log(err.message);
      });
}, []);


  return (
    <div className="posts-container">
       {posts.map((post) => {
          return (
            
             <div className="card" style={{width: "18rem",border:"solid black 1px"}}  key={post.id}>
           
  <div class="card-body">
    <h5 class="card-title">{post.title}</h5>
   
    <p class="card-text">{post.body}</p>

  
</div>
             </div>
          );
       })}
    </div>
    );

// function App() {
//   const[catFact, setCatFact]=useState("");
//   useEffect(()=>{
// Axios.get("https://catfact.ninja/fact").then((res)=>{
//   setCatFact(res.data.fact);
//   console.log(res.data)
// })
//   },[]);

//   return (
//     <div className="App">

// <p>{catFact}</p>

//     </div>
//   );

}

export default App;
