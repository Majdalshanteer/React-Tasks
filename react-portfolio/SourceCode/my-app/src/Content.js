import React from 'react'


class Content extends React.Component{
    render(){
      return(
        <div >
<div className="main">

<div className="home">
    <div className="part-one"></div>

    <div className="part-two">
        <h2>Majd AL Shanteer</h2>
        <h1>{this.props.name}</h1>
        <h2>Majd AL Shanteer</h2>



    </div>
    <div className="part-three">
   
    </div>
</div>
</div>


<p id="about" className="titles">About Me</p>


<div className="about-me">

<div className="second">

    <img src={
        require("./majd.png")} alt=""/>
</div>

<div className="first">
    <p> My name is Majd,<br/>I was a civil engineer trainee in Royal Scientific Society (RSS) , In the future i
        will be
        successful as a web developer at Orange Coding Academy,
        Essentially, my decision for a change in career stemmed from my curiosity in finding what I was
        passionate about, I think the passion, ambition, liking to learn more and more and diligence are
        enough to reach my goals in programming languages. <br/>
        In general I'm communicative person, precise, dependable and passionate to learn new skills .
    </p>
</div>

</div>

<p id="skill" className="titles">Qualifications</p>
<div className="qualification">


<div>
    <h3>Education</h3><br/>
    <p>{this.props.education}</p>
</div>
<div>
    <h3>Experience</h3><br/>
    <ul>
        <li>{this.props.experience_one}</li>
        <li> {this.props.experience_two}</li>
        <li>{this.props.experience_three}</li>
    </ul>
 

   
</div>
<div>
    <h3>Technical skills</h3><br/>
    <ul>
        <li>{this.props.tSkills_one}</li>
        <li>{this.props.tSkills_two}</li>
        <li>{this.props.tSkills_three}</li>

    </ul>
</div>
<div>
    <h3>Skills</h3><br/>
    <ul>
        <li>Attention to details.</li>
        <li>Creativity.</li>
        <li>Problem solving.</li>

    </ul>


</div>
</div>
</div>

)
}
}

export default Content