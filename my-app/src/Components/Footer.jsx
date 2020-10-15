import React from 'react'
class Footer extends React.Component {
    state = {  }
    render() { 
        return ( 
            <div 
            
            style={{backgroundColor:"black",position: "fixed",
            bottom: "0px",
            width:" 100%",
            height:" 100px"}}>
            <span style={{display:"flex"}}>
            <img src='https://png.pngtree.com/templates_detail/20180726/initial-k-letter-logo-with-swoosh-colored-red-and-black-png_27642.jpg'width="100px"/>
            <h3 style={{marginLeft:"50px",fontSize:'28px',marginTop:"20px"}}>AK sanitation company</h3>
            <div style={{marginTop:"15px"}}>
            <img src='https://cdn.icon-icons.com/icons2/1269/PNG/512/1497553311-103_84832.png'width="100px"style={{marginLeft:'20px'}}/>
            <a href="https://www.facebook.com"style={{marginLeft:'20px',fontSize:'28px'}}>Facebook </a>
            </div>
            </span>
            </div>
         );
    }
}
 
export default Footer;
