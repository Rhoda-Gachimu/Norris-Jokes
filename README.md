# Norris-Jokes
<!-- TABLE OF CONTENTS -->

  + [Description](#description)
  + [Installation Requirement](#Installation)
  + [Technology Used](#technology-used)
  + [Getting Started](#getting-started)
  + [Prerequisites](#prerequisites)
  + [Contribution](#contribution)
  + [Code Samples](#code-samples)
  + [Licence](#licence)
  + [Authors Info](#author-Info)
 
<!-- ABOUT THE PROJECT -->
## Description
It is a Website with the following MVPs: The landing page ,Random jokes section,Reviews section and Footer section. <br>
The significance of this project is:
<ol>
<li>It gives the user a site where they can view jokes</li>
<li>The website also provides a platform that allows users to subscribe for more jokes.</li>
</ol>

### Technology Used

Several technologies have been used in the design and implementation of this website.
The technologies are:
<ol>
<li>HTML5</li>
<li>CSS</li>
<li>JavaScript</li>
<li>Figma</li>

<p align="right">(<a href="#top">back to top</a>)</p>



<!-- GETTING STARTED -->
## Getting Started

These are the steps required to use this project:

### Prerequisites

NodeJS
* npm
  ```sh
  npm install npm@latest -g
  ```
  On windows PowerShell
  ```
  nvm install latest
  ```
  HTML and CSS require no installations as they can run on the web browser

### Installation

1. Clone the repo
   git clone [git@github.com:Rhoda-Gachimu/Norris-Jokes.git](https://github.com/Rhoda-Gachimu/Norris-Jokes)

<p align="right">(<a href="#top">back to top</a>)</p>



<p align="right">(<a href="#top">back to top</a>)</p>

## Demo
Use the link provided to navigate to the Norris website.
[The Norris](https://github.com/Rhoda-Gachimu/Norris-Jokes)<br>

The page appears as shown below and has the following features:
- This is the landingpage: It a descriptive section that tells you what the website is all about. The About Us,jokes,feedback links and the ContactUs button will help you navigate through the page.
 <img src="/assets/Images/Screenshot from 2022-09-06 15-10-17.png" alt="">

  ## Contribution
If you need to contribute to this project follow the steps below:<br>
- Clone the repo(`git clone <repo link>`)
- Create a branch where you will add changes (`git branch -b <branchname>`)
- Add the changes (`git add .`)
- Commit changes (`git commit -m"contributing changes"`)
- Push your changes (`git push origin <branchname>`)
  
## Code Samples
```Html
<body>
    <div class="query">

<!-- NAVIGATION BAR -->
<nav>
    <label for="" class="nav"><a href="">The Norris</a></label>
    <ul class="nav-link">
        <li><a href="#funny">Home</a></li>
        <li><a href="#aboutus">AboutUs</a></li>
        <li><a href="#viewjokes">Jokes</a></li>
        <li><a href="#feedback">Feedback</a></li>
        <li><a href="#subscribe">Subscribe</a></li>
    </ul>
    <button class="nav"><a href="#contact">ContactUs</a></button>
</nav>

<!-- HOME SECTION -->
<div class="Homepage">
     <div class="content">
    <h1 id="funny">Looking for Funny Jokes ? </h1>
    <h2 id="place">You're in the right place .</h2>
    </div>
                <div class="image">
    <img src="./assets/Images/jokes.png" alt="" width="900">
         </div>
</div>

     <!-- About Us -->
     <div id="info">
     <h2 id="aboutus">About Us</h2>
     </div>
    <div class="About">
       <img src="assets/Images/Brilliantemoji.jpg" alt="" width="900">
          <p>Humour is something that is funny, something that makes us smile, laugh and roll on the floor laughing, 
        The Norris aims to give our users moments  where they  can just smile or hysterically laugh . Have you ever forgotten a time when you laughed like crazy or cried like a baby? That’s what we want you to experience.</p>
    </div>

    <!-- jokes -->
    <div class="click">
         <button id="viewjokes">CLICK HERE :) FOR JOKES <img id="hand"  src="/assets/Images/icons8-hand-up-50.png" alt="" ></button>
    
         <p id="in"> </p>
    </div>      
```
 <!-- CSS PART OF THE ABOVE SECTIONS -->
 ```
 nav{
     /* background-color: blue;    */
     width: 85%;
     margin: auto;
     display: flex;
     justify-content: space-between; 
    align-items: center;
     height: 10vh; 

}

label>a{
    font-size:2.5rem;
    color: #DB0E0E;
    font-weight: bolder;
    text-decoration: none;
}
.nav-link {
     /* background-color:red;  */
     display: flex;
    list-style: none; 
}

li{
    margin-right: 60px; 
    font-size: 1.2rem;
    font-weight: 600;
 }

 nav>ul>li>a{
    transform: translateY(5px)  ;
    transition: all 0.2s;
 }
 nav>ul>li>a :hover{
    width: 100%;
    height: 5px;
    border-bottom: solid #DB0E0E;
    color: #DB0E0E; 
 } 
```


<!-- ACKNOWLEDGMENTS -->
## Authors Info
  
 Rhoda Gachimu (https://github.com/Rhoda-Gachimu)  


Project Link: [https://github.com/Rhoda-Gachimu/Norris-Jokes]

<p align="right">(<a href="#top">back to top</a>)</p>



<!-- LICENSE -->
## License
### MIT License

Distributed under the MIT License. See `LICENSE.txt` for more information.
[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)  
`[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)`

<p align="right">(<a href="#top">back to top</a>)</p>
