import React from 'react'


class Contact extends React.Component{
    render(){
      return(
<div>


<div class="main-two">
    <div class="components">
   

    <img src={
        require("./images-project/personal_info-removebg-preview.png")} alt=""/>
      <form action="page-one.html" target="_blank">

        <p class="comment" >I'd love to see your comments</p>
        <input type="text" placeholder="Name"/><br/><br/>

        <input type="email" placeholder="Email"/><br/><br/>

        <textarea placeholder="comment"></textarea> <br/><br/>
        <input class="send"  value="Send"/>
      </form>



    </div>
  </div>
</div>

        )
}
}

export default Contact