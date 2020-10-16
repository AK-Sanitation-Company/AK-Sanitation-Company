import React, { Component } from 'react'
import { Carousel } from 'react-bootstrap'

export default class SlidesShow extends Component {
    render() {
        return (
            <div>
                <Carousel>
  <Carousel.Item>
    <img 
      width={"100%"} height={"800 %"} 
      src="https://www.revue-ein.com/media/redaction/actualite/a618a4643fc658c954439e5fd5c6e48b59df2467a2be7.jpg"
      
    />
    <Carousel.Caption>
    </Carousel.Caption>
  </Carousel.Item>
  <Carousel.Item>
    <img
      width={"100%"} height={"800 %"} 
      src="https://scontent.ftun2-1.fna.fbcdn.net/v/t1.0-9/121653143_106247321261672_7344819099717687107_n.jpg?_nc_cat=111&_nc_sid=110474&_nc_ohc=BRTsvcSKznMAX-yndKO&_nc_ht=scontent.ftun2-1.fna&oh=6cce98b9daaad678565e5edd6aa79206&oe=5FAEB987"
      
    />

    <Carousel.Caption>
    </Carousel.Caption>
  </Carousel.Item>
  <Carousel.Item>
    <img
      width={"100%"} height={"800 %"} 
      src="https://scontent.ftun2-1.fna.fbcdn.net/v/t1.0-9/121485419_106246574595080_5023215643292788917_n.jpg?_nc_cat=110&_nc_sid=110474&_nc_ohc=Kr1P7CXAHeIAX9hgymt&_nc_ht=scontent.ftun2-1.fna&oh=28317ecc2c939d9d6af8ba3a7da7ae2f&oe=5FAE6879"
      
    />

    <Carousel.Caption>
      
    </Carousel.Caption>
  </Carousel.Item>
</Carousel>
            </div>
        )
    }
}
