import React from 'react';
import { BrowserRouter,Routes,Route } from "react-router-dom";
import './App.css';

import Header from './Header';
import Content from './Content';
import Project from './Project';
import Contact from './Contact';
import Footer from './Footer';
// import Greet from './add';

class App extends React.Component{
constructor(){
  super()
  this.state = {
  title:"Welcome Visitor"
  };
}
// to change state use setState

  changeMessage(){
    this.setState({
      title:"Thank you for subscribing"
    })

  }


  render(){ 
   
    console.log("Render")
    return(  
   
    <BrowserRouter>

    {/* state  */}
    <p style={{color:"red",fontWeight:"bolder"}} >{this.state.title}</p>
    <button onClick={()=>this.changeMessage()}>Subscribe</button>
     

   {/* <Greet name='User'/> */}
   
 
    <Header />
  <Routes>
  <Route exact path="/" element={<Content
  // props
    name="Majd Al shanteer" 
    education="Bachelor of civil engineering at University Of Jordan with very good average."
    experience_one="Internship in coding academy by orange."
    experience_two="Civil engineer trainee at Royal Scientific Society (RSS)."
    experience_three="Good experience in drawing projects using AutoCAD."
    tSkills_one="HTML, CSS, Bootstrap."
    tSkills_two="Wireframe & Mockup Design."
    tSkills_three="Well versed in Structural design and analysis software: Prokon and safe. "/>}/>
    
    <Route exact path="/project" element={<Project />}/>
    <Route exact path="/contact" element={<Contact/>} />


   
    </Routes> 



    {/* <Content name="Majd Al shanteer" 
    education="Bachelor of civil engineering at University Of Jordan with very good average."
    experience_one="Internship in coding academy by orange."
    experience_two="Civil engineer trainee at Royal Scientific Society (RSS)."
    experience_three="Good experience in drawing projects using AutoCAD."
    tSkills_one="HTML, CSS, Bootstrap."
    tSkills_two="Wireframe & Mockup Design."
    tSkills_three="Well versed in Structural design and analysis software: Prokon and safe. "

    
    /> */}

  

    
    <Footer/>
  


 
      </BrowserRouter>
    )
  }
}

export default App;
