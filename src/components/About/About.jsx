import React from 'react'
import'../About/About.css'
import SchoolIcon from '@mui/icons-material/School';
import LaptopWindowsIcon from '@mui/icons-material/LaptopWindows';
function About() {
  
  const changColor = (e) =>{

     e.target.style.color = "white"
  }


  return (
<>
<div className='bg-Color'>

<div className='container'>
<br></br><br></br>
 <center><h1 style={{color: "#fff"}} >MY <span style={{color: "#28a745"}}>- EDUCATION</span></h1></center>
 <hr style={{color : "#fff"}}/> 
 <br></br>
<div className="row row-cols-1 row-cols-md-3 g-4">
  <div className="col">
    <div className="card dell">
      {/* <img src="..." className="card-img-top" alt="..." /> */}
      <br/>
      <center><SchoolIcon onMouseOver={changColor} style={{marignTop: "40px",color: "#fff"}}/></center>
 
      <div className="card-body ">
      <h5 className="card-title text-white">Matriculation</h5>
        <p className="card-text text-white">
        <p className="card-text text-white"><small class="text-white">2013</small></p>

        School Sindh Madarssa-Tul-Islam From Technical Board
        </p>
      </div>
    </div>
  </div>
  <div className="col">
    <div className="card dell">
      {/* <img src="..." className="card-img-top" alt="..." /> */}
      <br/>
      <center><SchoolIcon onMouseOver={changColor} style={{marignTop: "40px",color: "#fff"}}/></center>
 
      <div className="card-body">
      <h5 className="card-title text-white">Diploma (DAE)</h5>
        <p className="card-text text-white">
        <p className="card-text text-white"><small class="text-white">2014-2017</small></p>
        Govt Boys Technical College Lyari From Technical Board
        </p>
      </div>
    </div>
  </div>
  <div className="col">
    <div className="card dell">
      {/* <img src="..." className="card-img-top" alt="..." /> */}
      <br/>
      <center><SchoolIcon onMouseOver={changColor} style={{marignTop: "40px",color: "#fff"}}/></center>
 
      <div className="card-body">
       <h5 className="card-title text-white">Bechlor's In IT</h5>
        <p className="card-text text-white">
        <p className="card-text text-white"><small class="text-white" >2018-2021</small></p>
        Benazir Bhutto Shaheed University Lyari Karachi
        </p>
      </div>
    </div>
  </div>
  
  <div className="col">
    <div className="card dell">
      {/* <img src="..." className="card-img-top" alt="..." /> */}
      <br/>
      <center><SchoolIcon onMouseOver={changColor} style={{marignTop: "40px",color: "#fff"}}/></center>
 
      <div className="card-body">
        <h5 className="card-title text-white">GD-VE</h5>
        <p className="card-text text-white"><small class="text-white">2019</small></p>
        <p className="card-text text-white">
        Saylani Mass IT Training Institute
        </p>
      </div>
    </div>
  </div>


  <div className="col">
    <div className="card  dell">
      {/* <img src="..." className="card-img-top" alt="..." /> */}
      <br/>
      <center><SchoolIcon onMouseOver={changColor} style={{marignTop: "40px",color: "#fff"}}/></center>
 
      <div className="card-body">
        <h5 className="card-title text-white">Web & Mobile Development</h5>
        <p className="card-text text-white"><small class="text-white">2022</small></p>
        <p className="card-text text-white">
        Saylani Mass IT Training Institute
        </p>
      </div>
    </div>
  </div>


  {/* <div className="col">
    <div className="card">
    <br/>
      <center><LaptopWindowsIcon style={{marignTop: "40px",color: "#1565c0"}}/></center>
      <div className="card-body">
        <h5 className="card-title">Skills</h5>
        <p className="card-text">
       Bootstrap 5,JavaScript ES6,React Js, React Native PhotoShop,Adobe XD,Figma, Firebase
        </p>
      </div>
    </div>
  </div> */}
</div>
</div>


</div>



</>
  )
}

export default About