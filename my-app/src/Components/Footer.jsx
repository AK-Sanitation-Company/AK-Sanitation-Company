import React from 'react'
class Footer extends React.Component {
    state = {  }
    render() { 
        return ( 
            <div 
            
            style={{backgroundColor:"black",position: "absolute",
            bottom: "0px",
            left:"0px",
            right: "0px",
            width:"100%",
            scrollSnapMarginBottom:"50px",
            height:"100px"}}>
            <span style={{display:"flex"}}>
            
            <div style={{marginTop:"15px"}}>
            <img src='https://cdn.icon-icons.com/icons2/1269/PNG/512/1497553311-103_84832.png'width="100px"style={{marginLeft:'20px',padding:"0px"}}/>
            <a href="https://www.facebook.com/Miltec-Environnement-106219201264484/?ti=as"style={{marginLeft:'5px',fontSize:'20px'}}>Facebook </a>
            </div>
            </span>
            </div>
         );
    }
}
 
export default Footer;
