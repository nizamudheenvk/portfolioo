import './App.css'
import ProfileCard from '../Profile/ProfileCard/ProfileCard'
import SplashCursor from '../Reactbits/SplashCursor/SplashCursor'
import Navbar from 'react-bootstrap/Navbar';
import profilepic from './assets/nizam.png'
import img from './assets/react.svg'
import Particles from '../Background/Particles/Particles'
import ShinyText from '../heading/ShinyText/ShinyText'
import BlurText from '../para/BlurText/BlurText'
import { color } from 'framer-motion'
import jsimg from './assets/js.png'
import reactimage from'./assets/reactimage.png'
import node from './assets/node.png'
import mongodb from './assets/mongod.png'
import express from './assets/expressjs.png'
import html from './assets/html.png'
import css from './assets/css.png'
import github from './assets/github.png'
import { Card, Container } from 'react-bootstrap';
import projectfair from './assets/projectfair .png'
import blog from './assets/blog.png'
import foodcart from './assets/foodcart.png'
import wheather from './assets/wheather.png'
import interest from'./assets/interest.png'
import python from './assets/python.png'
import tailwind from './assets/tailwind.png'
import bootstrap from './assets/bootstrap.png'
import api from './assets/api.png'
import nizam from'./assets/nizam.png'


function App() {

  const handleAnimationComplete = () => {
  console.log('Animation completed!');
};
  return (
    <>


  {/* <SplashCursor style={{display:'none'}}/> */}
      <div
    
        className="bg-black d-flex justify-content-center align-items-center"
        style={{ width: '100%', height: '100vh', position: 'relative' }}
      >
        {/* Centered ShinyText heading with 80px font size */}
        <div
          style={{
            position: 'absolute',
            top: '50%',
            left: '50%',
            transform: 'translate(-50%, -50%)',
            // zIndex: 10,
            textAlign: 'center',
          }}
        >


{/* imgage */}


          <ShinyText
            text=" Muhammad Nizamudheen VK"
            
            speed={3}
            // disabled={false}
            className='texst'
            style={{ fontSize: '100px',height:'200vh'  }}
          />
          {/* <p style={{color:'#bfbfbf',fontSize:'25px'}}>Software developer</p> */}

<div>
         <BlurText
  text="Hi, I'm a MERN Stack Web Developer with a passion for building modern, responsive, and user-friendly web applications. I specialize in MongoDB, Express.js, React.js, and Node.js to deliver full-stack solutions that are both powerful and efficient. Whether it's developing dynamic front-end interfaces or designing robust backend APIs, I enjoy turning ideas into real, functional products. I'm constantly learning and staying updated with the latest technologies to create clean, scalable code and deliver value through smart development."
  delay={130}
  animateBy="words"
    
  direction="top"
  onAnimationComplete={handleAnimationComplete}
  className="text-3xl mb-8 text-#a7a7a7  mt-5 blurrr"
  style={{ color:'red',
   
  }}
  
/>



</div>
        </div>
       

        <Particles
          particleColors={['#ffffff', '#ffffff']}
          particleCount={200}
          particleSpread={10}
          speed={0.1}
          particleBaseSize={100}
          moveParticlesOnHover={true}
          alphaParticles={false}
          disableRotation={false}
        />
      </div>
     
{/* ======= Modern Animated Skills Section ======= */}
<div style={{ backgroundColor: 'black' }} className='py-5 text-white'>
  <div className="text-center mb-5">
    <ShinyText
      text="SKILLS"
      speed={3}
      className="textt text-center"
      style={{ fontSize: '80px' }}
    />
  </div>

  <div className="skills-grid">
    {/* Skill cards */}
    {[
      { name: 'React', img: reactimage },
      { name: 'Node.js', img: node },
      { name: 'MongoDB', img: mongodb },
      { name: 'Express.js', img: express },
      { name: 'HTML5', img: html },
      { name: 'CSS3', img: css },
      { name: 'JavaScript', img: jsimg },
      { name: 'GitHub', img: github },
      {name: 'python',img:python},
      {name: 'tailwind',img:tailwind},
      {name : 'Bootstrap',img:bootstrap},
      {name : 'Rest Api',img:api}

    ].map((skill, idx) => (
      <div key={idx} className="skill-card">
        <img src={skill.img} alt={skill.name} />
        <p>{skill.name}</p>
      </div>
    ))}
  </div>
</div>


<div style={{ backgroundColor: "black" }} className="w-100 py-5 text-light">
  <div className="text-center mb-5">
    <ShinyText
      text="PROJECTS"
      speed={3}
      className="text-center texst"
      style={{ fontSize: '80px' }}
    />
  </div>

  <div className="project-grid container">
    {/* Row 1 */}
    <div className="row justify-content-center g-4">
      <div className="col-md-4">
        <div className="project-box">
          <img src="https://t4.ftcdn.net/jpg/05/12/24/35/360_F_512243529_cw6Dv8hPWjrI1ycZDWXWv9KKJhnre8DN.jpg" alt="E-Commerce App" />
          <h5>E-Commerce App</h5>
          <a href="https://e-commerce-app-five-lemon.vercel.app/" target="_blank" rel="noopener noreferrer">
            View Project <i className="fa-solid fa-arrow-up-right-from-square ms-2"></i>
          </a>
        </div>
      </div>

      <div className="col-md-4">
        <div className="project-box">
          <img src={projectfair} alt="Project Fair" />
          <h5>Project Fair</h5>
          <a href="https://project-fair-mocha.vercel.app/" target="_blank" rel="noopener noreferrer">
            View Project <i className="fa-solid fa-arrow-up-right-from-square ms-2"></i>
          </a>
        </div>
      </div>

      <div className="col-md-4">
        <div className="project-box">
          <img src={blog} alt="Blog App" />
          <h5>Blog Application</h5>
          <a href="https://blog-frontend-yej2.vercel.app/" target="_blank" rel="noopener noreferrer">
            View Project <i className="fa-solid fa-arrow-up-right-from-square ms-2"></i>
          </a>
        </div>
      </div>
    </div>

    {/* Row 2 */}
    <div className="row justify-content-center g-4 mt-4">
      <div className="col-md-4">
        <div className="project-box">
          <img src={foodcart} alt="Food Cart" />
          <h5>Food Cart</h5>
          <a href="https://food-cart-gcxi.vercel.app/" target="_blank" rel="noopener noreferrer">
            View Project <i className="fa-solid fa-arrow-up-right-from-square ms-2"></i>
          </a>
        </div>
      </div>

      <div className="col-md-4">
        <div className="project-box">
          <img src={wheather} alt="Weather App" />
          <h5>Weather App</h5>
          <a href="https://weather-app-pi-nine-70.vercel.app/" target="_blank" rel="noopener noreferrer">
            View Project <i className="fa-solid fa-arrow-up-right-from-square ms-2"></i>
          </a>
        </div>
      </div>

      <div className="col-md-4">
        <div className="project-box">
          <img src={interest} alt="Interest Calculator" />
          <h5>Interest Calculator</h5>
          <a href="https://interest-app-lake.vercel.app/" target="_blank" rel="noopener noreferrer">
            View Project <i className="fa-solid fa-arrow-up-right-from-square ms-2"></i>
          </a>
        </div>
      </div>



    </div>
  </div>
</div>
{/* educationsl */}
{/* ======= Beautiful Education Section ======= */}
{/* ======= Styled Education Section (Same Format) ======= */}
<div style={{ backgroundColor: "black" }} className="w-100 py-5 text-light">
  <div className="text-center mb-5">
    <ShinyText
      text="EDUCATION"
      speed={3}
      className="text-center texst"
      style={{ fontSize: '80px' }}
    />
  </div>

  <div className="row container mx-auto g-4">
    <div className="col-lg-6">
      <div className="edu-card h-100">
        <h5 className='text-info'>BACHELOR OF COMPUTER APPLICATION</h5>
        <p className='text-light'>Malabar College Of Arts And Science, Moodadi</p>
        <a href="/public/grade card.pdf" download>
          <button className="btn btn-outline-info btn-sm mt-2">
            Download Grade Card
          </button>
        </a>
      </div>
    </div>

    <div className="col-lg-6">
      <div className="edu-card h-100">
        <h5 className='text-info'>   +2COMPUTER SCIENCE</h5>
        <p className='text-light'>Poilkavu Higher Secondary School</p>
      </div>
    </div>

    <div className="col-lg-6">
      <div className="edu-card h-100">
        <h5 className='text-info'> SSLC</h5>
        <p className='text-light'>Govt School, Koyilandy</p>
      </div>
    </div>

     <div className="col-lg-6">
      <div className="edu-card h-100">
        <h5 className='text-info'> MERN FULL STACK INTERNSHIP</h5>
        <p className='text-light'>Lumninar Technolab Kochi</p>
      </div>
    </div>


  </div>
</div>




{/* ======= Beautiful Contact Section ======= */}
{/* ======= Modern Contact Section ======= */}
{/* ======= Beautiful Contact Section (Equal Height Cards) ======= */}
<div style={{ backgroundColor: "black" }} className="w-100 py-5 text-light">
  <div className="text-center mb-5">
    <ShinyText
      text="CONTACT"
      speed={3}
      className="text-center texst"
      style={{ fontSize: '80px' }}
    />
  </div>

  <div className="container">
    <div className="row text-center g-4">
      <div className="col-md-6 col-lg-3 d-flex">
        <div className="contact-block flex-fill d-flex flex-column justify-content-center h-100 w-100">
          <i className="fa-solid fa-phone fa-2x mb-3 text-contact"></i>
          <h6>Phone</h6>
          <p>+91 98955811583</p>
        </div>
      </div>

      <div className="col-md-6 col-lg-3 d-flex">
        <div className="contact-block flex-fill d-flex flex-column justify-content-center h-100 w-100">
          <i className="fa-solid fa-envelope fa-2x mb-3 text-contact"></i>
          <h6>Email</h6>
          <p>mhdnisam258@gmail.com</p>
        </div>
      </div>

      <div className="col-md-6 col-lg-3 d-flex">
        <div className="contact-block flex-fill d-flex flex-column justify-content-center h-100 w-100">
          
          <i className="fa-brands fa-linkedin fa-2x mb-3 text-contact"></i>
          <h6>LinkedIn</h6>
          <a
            href="https://www.linkedin.com/in/muhammad-nishamudheen-vk-a900452a0/"
            target="_blank"
            className="text-light text-decoration-none d-block"
            rel="noreferrer"
          >
 <a
            href="https://www.linkedin.com/in/muhammad-nishamudheen-vk-a900452a0/"
            target="_blank"
            className="text- text-decoration-none d-block"
            rel="noreferrer"
          >
            <p>linkedin.com/in/nizamudheen</p>
          </a>          </a>
        </div>
      </div>

      <div className="col-md-6 col-lg-3 d-flex">
        <div className="contact-block flex-fill d-flex flex-column justify-content-center h-100 w-100">
          <i className="fa-brands fa-github fa-2x mb-3 text-contact"></i>
          <h6>GitHub</h6>
          <a
            href="https://github.com/nizamudheenvk"
            target="_blank"
            className="text-light text-decoration-none d-block"
            rel="noreferrer"
          >
            <p>github.com/nizamudheenvk</p>
          </a>
        </div>
      </div>

<div
  className="w-100 py-4 d-flex justify-content-center align-items-center"
  style={{ backgroundColor: "black" }}>
  <div className="container">
    <div className="row justify-content-center">
      <div className="col-lg-6">
        <div className="education-card text-light text-center p-5">
          <a href="/nizamudheen.pdf" download>
            <button className="btn btn-outline-info px-4 py-2 mt-3 download-grade">
              <i className="fa-solid fa-download me-3"></i>Download CV
            </button>
          </a>
        </div>
      </div>
    </div>
  </div>
</div>

    </div>
  </div>


  
</div>






    </>
  )
}

export default App
