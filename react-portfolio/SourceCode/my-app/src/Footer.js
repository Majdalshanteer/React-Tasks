
import React from 'react'


class Footer extends React.Component{
    render(){
      return(

    <footer>
    <div class="page-components">
        <div> <a href="page-one.html">Home</a></div>
        <div> <a href="#about">About me</a></div>
        <div><a href="#skill">Qualification</a></div>
        <div><a href="page-two.html">Projects</a></div>
        <div> <a href="page-three.html">Contact </a></div>
    </div>

    <div class="contact">

      
        <div class="location"><img src={
        require("./images-project/pngtree-vector-location-icon-png-image_317888-removebg-preview.png")} alt=""/>Jordan -
            As-Salt </div>

        <div class="phone"><img src={
        require("./images-project/contact-page-point-text-escobar-telephone-removebg-preview.png")} alt=""/>
            0778098748</div>
        <div class="mail"><img src={
        require("./images-project/email-icon-png-black-24-removebg-preview.png")} alt=""/>
            majd.jalshanteer@gmail.com</div>




    </div>



</footer>

)
}
}

export default Footer;