import React from 'react'
import {Link} from 'react-router-dom';
import "../styles/Home.css";
import { ProjectList } from "../helpers/ProjectList";
import ProjectItem from "../components/ProjectItems";
import about from "../assets/about.jpg";
import place from "../assets/placeholder.png";
import huehouse from "../assets/start page-portrait.png";
import huehome from "../assets/dashboard day-portrait.png";
import datingapp from "../assets/Ver 3-portrait.png";
import myroom from "../assets/Ver 4-portrait.png";
import movieintro from "../assets/movieIntro.png";
import chatbot from "../assets/chatbot.png";
import treasurehunt from "../assets/map-portrait.png";
import store from "../assets/mcstore.png";
import models from "../assets/models.png";




function Home() {
  return (
    <section>
      <div className='home'>
        <div className='headerContainer'>
          <h1> ict and media design student </h1>
        </div>
      </div>
      <div className='about' id='about' >
        <div className='text'>
          <h1>A Bit About Me</h1>
          <p>I'm an ICT and Media Design student from Croatia, currently studying at Fontys University of Applied Sciences. My focus is on front-end development and UX/UI design, and I enjoy creating intuitive, accessible digital experiences that combine thoughtful design with solid code. This portfolio showcases some of the projects I've worked on throughout my studies — from user interface concepts to mobile apps. I'm currently looking for a graduation internship where I can grow as a designer and developer, contribute to real-world challenges, and learn from a collaborative team.</p>
        </div>
        <img className='aboutimg' src={about}/>
      </div>

      <div className='projects' id='projects'>

        <div className="project-card">
          <div className="image-container">
            <img className="project-image" src={huehouse}/>
            <img className="project-image-2" src={huehome}/>
          </div>

          <div className="content">
            <div className="label">SwiftUI</div>
            <div>
              <p className="title">HueHouse</p>
              <p className="description"> A mood predictor/tracker app that not only tracks the users mood but also helps improve it</p>
            </div>
            
          </div>
        </div>

        <div className="project-card-fliped">
          <div className="content">
            <div className="label">Kotlin App</div>
            <div>
              <p className="title">Dating App</p>
              <p className="description"> A dating app that helps people find their perfect match in a convenient and truly efficient way?</p>
            </div>            
          </div>
          <div className="image-container">
            <img className="project-image-2" src={datingapp}/>
            <img className="project-image" src={myroom}/>
          </div>
        </div>

        <div className="project-card" id='card3'>
          <div className="image-container center-image">
            <img className="movie-image" src={movieintro}/>
          </div>

          <div className="content">
            <div className="label">CSS Animation</div>
            <div>
              <p className="title">Movie credits animation</p>
              <p className="description"> Catch me if you can movie intro credits animation. </p>
            </div>            
          </div>
        </div>

        <div className="project-card-fliped" id='card4'>
          <div className="content">
            <div className="label">Python</div>
            <div>
              <p className="title">Chatbot</p>
              <p className="description"> Speach to text Chatbot to help in conversation for high needs autistic childeren.</p>
            </div>            
          </div>
          <div className="image-container">
            <img className="chatbot-image" src={chatbot}/>
          </div>
        </div>

        <div className="project-card" id='card5'>
          <div className="image-container center-image">
            <img className="project-image-2" src={store}/>
            <img className="project-image" src={treasurehunt}/>
          </div>

          <div className="content">
            <div className="label">PWA</div>
            <div>
              <p className="title">McDonalds game</p>
              <p className="description"> A McDonalds treasure hunt game to bring more engagement to the McDonalds app.</p>
            </div>
          </div>
        </div>

        <div className="project-card-fliped" id='card6'>
          <div className="content">
            <div className="label">Blender</div>
            <div>
              <p className="title">3D modeling</p>
              <p className="description"> My 3D modeling passion. </p>
            </div>            
          </div>
          <div className="image-container center-image">
            <img className="models-image" src={models}/>
          </div>
        </div>

      </div>
    </section>
    
  )
}

export default Home
