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
import amazon from './assets/amazon.png'
import api from './assets/api.png'
import nizam from'./assets/nizam.png'
import emailjs from '@emailjs/browser'
import { useRef } from 'react';
import { Modal, Button } from "react-bootstrap";
import {  useState } from "react";




function App() {


  const [showModal, setShowModal] = useState(false);
const [modalMessage, setModalMessage] = useState("");


  const form = useRef()
const sendEmail = (e) => {
  e.preventDefault();

  emailjs
    .sendForm(
      "service_oad0rtb",
      "template_zynpxna",
      form.current,
      "evkkb9DKNhAiMoqyZ"
    )
    .then((result) => {
      console.log("✅ Email sent:", result.text);
      setModalMessage("Your message was sent successfully! ");
      setShowModal(true);
      e.target.reset();
    })
    .catch((error) => {
      console.error("❌ Email send error:", error.text);
      setModalMessage("Failed to send your message. Please try again later.");
      setShowModal(true);
    });
};





  const handleAnimationComplete = () => {
  console.log('Animation completed!');
};
  return (
    <>


  <SplashCursor />
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
            text=" Muhammad Nizamudheen"
            
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




 <div className="col-md-4">
        <div className="project-box">
          <img src={amazon} alt="Interest Calculator" />
          <h5>Amazon Clone</h5>
          <a href="https://penoft-z8sy.vercel.app/" target="_blank" rel="noopener noreferrer">
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
          <p>+91 9895581583</p>
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

<form ref={form} onSubmit={sendEmail}>
<div
  className="p-5 rounded-4 text-light text-center mt-5"
  style={{
    backgroundColor: "#0b0b0b",
    border: "1px solid #00fff5",
    boxShadow: "0 0 25px rgba(0, 255, 245, 0.3)",
    maxWidth: "700px",
    margin: "0 auto",
  }}
>
 <div className="text-center mb-5">
    <ShinyText
      text="GET IN TOUCH"
      speed={3}
      className="text-center texst"
      style={{ fontSize: '80px' }}
    />
  </div>

  <style>
    {`
      ::placeholder {
        color: rgba(255, 255, 255, 0.9) !important;
        opacity: 1;
      }
      input:focus::placeholder,
      textarea:focus::placeholder {
        color: rgba(255, 255, 255, 0.7) !important;
      }
    `}
  </style>

  {/* Username */}
  <div className="mb-3">
    <input
      type="text"
      name='from_name'
      className="form-control text-center"
      placeholder="Username"
      style={{
        backgroundColor: "transparent",
        border: "1.5px solid #00fff5",
        color: "white",
        borderRadius: "12px",
        padding: "14px",
        fontSize: "16px",
        boxShadow: "0 0 18px rgba(0, 255, 245, 0.25)",
        transition: "0.3s",
      }}
      onFocus={(e) =>
        (e.target.style.boxShadow = "0 0 28px rgba(0, 255, 245, 0.7)")
      }
      onBlur={(e) =>
        (e.target.style.boxShadow = "0 0 18px rgba(0, 255, 245, 0.25)")
      }
    />
  </div>

  {/* Email */}
  <div className="mb-3">
    <input
      type="email"
      name='from_email'
      className="form-control text-center"
      placeholder="Email"
      required
      style={{
        backgroundColor: "transparent",
        border: "1.5px solid #00fff5",
        color: "white",
        borderRadius: "12px",
        padding: "14px",
        fontSize: "16px",
        boxShadow: "0 0 18px rgba(0, 255, 245, 0.25)",
        transition: "0.3s",
      }}
      onFocus={(e) =>
        (e.target.style.boxShadow = "0 0 28px rgba(0, 255, 245, 0.7)")
      }
      onBlur={(e) =>
        (e.target.style.boxShadow = "0 0 18px rgba(0, 255, 245, 0.25)")
      }
    />
  </div>

  {/* Message */}
  <div className="mb-3">
    <textarea
      rows="4"
      className="form-control text-center"
      name='message'
      placeholder="Message"
      style={{
        backgroundColor: "transparent",
        border: "1.5px solid #00fff5",
        color: "white",
        borderRadius: "12px",
        padding: "14px",
        fontSize: "16px",
        boxShadow: "0 0 18px rgba(0, 255, 245, 0.25)",
        transition: "0.3s",
      }}
      onFocus={(e) =>
        (e.target.style.boxShadow = "0 0 28px rgba(0, 255, 245, 0.7)")
      }
      onBlur={(e) =>
        (e.target.style.boxShadow = "0 0 18px rgba(0, 255, 245, 0.25)")
      }
    ></textarea>
  </div>

  {/* Submit Button */}
  <button
    className="btn w-50 mt-3"
    style={{
      border: "1.5px solid #00fff5",
      color: "#00fff5",
      backgroundColor: "transparent",
      borderRadius: "10px",
      padding: "10px 20px",
      fontWeight: "500",
      fontSize: "16px",
      boxShadow: "0 0 25px rgba(0, 255, 245, 0.45)",
      transition: "all 0.3s ease",
    }}
    onMouseOver={(e) => {
      e.target.style.backgroundColor = "#00fff5";
      e.target.style.color = "#000";
      e.target.style.boxShadow = "0 0 35px rgba(0, 255, 245, 0.9)";
    }}
    onMouseOut={(e) => {
      e.target.style.backgroundColor = "transparent";
      e.target.style.color = "#00fff5";
      e.target.style.boxShadow = "0 0 25px rgba(0, 255, 245, 0.45)";
    }}
  >
    Submit
  </button>
</div>
</form>



  
</div>


<Modal
  show={showModal}
  onHide={() => setShowModal(false)}
  centered
  backdrop="static"
  keyboard={false}
>
  <div
    style={{
      backgroundColor: "#0b0b0b",
      color: "#00fff5",
      border: "1px solid #00fff5",
      borderRadius: "15px",
      boxShadow: "0 0 25px rgba(0, 255, 245, 0.6)",
    }}
  >
    <Modal.Header closeButton className="border-0">
      <Modal.Title className="w-100 text-center">
         Message Status
      </Modal.Title>
    </Modal.Header>
    <Modal.Body className="text-center">
      <p style={{ fontSize: "18px" }}>{modalMessage}</p>
    </Modal.Body>
    <Modal.Footer className="border-0 d-flex justify-content-center">
      <Button
        variant="outline-info"
        onClick={() => setShowModal(false)}
        className="px-4 py-2"
        style={{
          borderRadius: "10px",
          boxShadow: "0 0 20px rgba(0, 255, 245, 0.5)",
        }}
      >
        Close
      </Button>
    </Modal.Footer>
  </div>
</Modal>



    </>
  )
}

export default App
