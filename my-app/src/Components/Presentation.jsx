import React, { Component } from "react";

export default class Presentation extends Component {
  render() {
    return (
      <div >
        <span style={{position:"flex",marginTop:'100px', marginLeft:"500px"}}>
      <iframe style={{marginTop:"100px"}}width="950" height="600" src="https://www.youtube.com/embed/9HP8qZzZYh4" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
       <div style={{backgroundColor:"black",width:'50%', marginLeft:"500px"}}>
        <h1 style={{marginLeft:"350px"}}> About us</h1><br></br>
        <h3 style={{color:"white", marginLeft:"50px"}}>
          {" "}
          AK is a sanitation company,<br></br>
          created in 2020 by a team of high-level technicians with extensive
          experience <br></br>
          and having the material resources.
          <br></br> In accordance with international standards to intervene in
          dangerous sites.{" "}
        </h3><br></br>
        </div>
        </span>
      </div>
    );
  }
}
