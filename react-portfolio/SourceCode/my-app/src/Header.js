

import React from 'react'
class Header extends React.Component{
    render(){
      return(

<nav class="navbar navbar-expand-sm bg-dark navbar-dark shadow-sm">
        <div class="container-fluid">
            <a class="navbar-brand" href="a">&#10045; Majd</a>
            <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#collapsibleNavbar">
                <span class="navbar-toggler-icon"></span>
            </button>
            <div class="collapse navbar-collapse" id="navbarResponsive">
                <ul class="navbar-nav ms-auto me-4 my-3 my-lg-0">
                    <li class="nav-item">
                        <a class="nav-link active" href="/">Home</a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link" href="#about">About</a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link" href="#skill">Qualifications</a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link" href="/project">Projects</a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link " href="/contact">Contact </a>
                    </li>



                </ul>
            </div>
        </div>
    </nav>

)
}
}

export default Header;