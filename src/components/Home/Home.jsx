import React from 'react';
import './Home.css'
import IMG from '../Assests/saqib.png';
import FacebookRoundedIcon from '@mui/icons-material/FacebookRounded';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import GitHubIcon from '@mui/icons-material/GitHub';
import Button from '@mui/material/Button';
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';
import {Link} from 'react-router-dom';
const Home = () => (
 <>
 <div className='bgColor'>
 <div className='container'>
  <br></br>
  <br></br>
  <br></br>
  <div className="card-img-overlay my-5">
  
    
    <div className='container'>
  <br></br>
    
    <img src={IMG} className="card-img-center cc1" alt="..." />

    </div>
  <div className='container'>
    {/* <h1 className="card-title text-start head ">WELCOME TO MY WORLD</h1> */}
  
    <p className="card-text text-start">
    <h3 className="card-text text-start  mini"> <br/><br/><br/><br/><br/> I'm! 
    <br/> <span className='p' style={{color: "#fff"}}>Muhammad Saqib</span></h3>
        <p className='offer'>Front End Developer</p>
        <small>
  <div className='container'>      
  <div className="wrapper">
    <ul className="dynamic-txts text-start">
      <li><span>React js Developer</span></li>    
      <li><span>Web Developer</span></li>
      <li><span>Web Designer</span></li>
      <li><span>Graphics Designer</span></li>
    </ul>
    
    </div>
    </div>  
    <p className='parah'>
      
    I Am A Front End Developer With Robust Problem Solving Skills And
    Proven Experience In Creating And Designing Website Application And 
    In A Test-Driven Environment January 2022 Website Mobile And Hybrid 
    Application Course. 1 Year Experience Of Develop Website & Worked On Client Based 
    Project On HTML/CSS /Bootstrap 5/JavaScript ES6 / React Js / React Native expo cli.
</p> 

<Button variant="contained" color="success" style={{margin:'10px', color: "#fff"}}>
<Link to="/file/Muhammad Saqib (3).pdf" target="_blank" download style={{color: "#fff" , textDecoration: "none"}}>Resume <ArrowDropDownIcon/> </Link>   
      </Button>
      <br/>
 <div className='container'>     
{/* <a href='https://www.facebook.com/profile.php?id=100006012647190/'>
  <FacebookRoundedIcon  style={{color: "#fff"}}/></a> */}
<a href='https://www.linkedin.com/in/muhammad-saqib-356645208/'>
  <LinkedInIcon href="" style={{color: "#fff"}}/></a>
<a href='https://github.com/ssaqi'>
<GitHubIcon style={{color: "#fff"}}/></a>
</div>
   </small>

 </p>
    
  


  </div>

  </div>
</div>

</div>

 </>
);
export default Home;