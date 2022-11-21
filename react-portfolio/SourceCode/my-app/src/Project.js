import React from 'react'


class Project extends React.Component{
    render(){
      return(
<div>
<p class="task-title"> My Projects</p>


<div class="project">

  <a href="html links/wireframe.pdf" target="_blank" class="wireframe"></a>

  <a class="mockup" href="html links/mockup.pdf" target="_blank"></a>


  <a class="bootstrap" href="html links/Iphone-Bootstrap.html " target="_blank"></a>

  <a class="text" href="html links/wireframe.pdf" target="_blank">Wireframe</a>
  <a class="text" href="html links/mockup.pdf" target="_blank">Mockup</a>
  <a class="text" href="html links/Iphone-Bootstrap.html " target="_blank">Bootstrap</a>

</div>

<p class="task-title"> My Tasks</p>

<div class="task">
  <a class="responsive" href="html links/Untitled-2.html" target="_blank"><img src={
        require("./images-project/responsive.JPG")} alt=""/>
    Responsive Design Task</a>
  <a class="flex" href="html links/flex.html" target="_blank"> <img src={require("./images-project/flex.JPG")} alt=""/> Flex Task</a>
  <a class="grid" href="html links/offers.html" target="_blank"> <img src={require("./images-project/grid.JPG")} alt=""/> Grid Task</a>
</div>




<div class="visit">
  <a href="https://github.com/Majdalshanteer" title="https://github.com/Majdalshanteer" target="_blank"> Visit My
    GitHub account to see more Projects & Tasks that I did it !</a>

  <img src={require("./images-project/business-3d-happy-robot-assistant-waving-hello.png")} alt=""/>
</div>


    
</div>


        )
}
}

export default Project;