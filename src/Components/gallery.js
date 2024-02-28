import React, { Component } from 'react';

class Gallery extends Component {
  constructor() {
    super()
    this.state = {
      gallery: [
        {
          image: "https://dlh.semarangkota.go.id/wp-content/uploads/2021/02/dinkes.surabaya-go-id-1024x640.jpg"
        },
        {
          image: "https://infojateng.id/wp-content/uploads/2021/08/enam-sekolah-maju-adiwiyata-nasional_m_17889-1.jpeg"
        }, 
        {
          image: "https://dhttps://joss.co.id/data/uploads/2019/04/sekolah-adiwiyata-madiun.jpgrive.google.com/uc?id=1rJDcCOmsd14NL6DG3Wps_kewZomGcLU-"
        },
      ],
    }
  }
  render() {
    return (
      <div>
        <img src="{this.props.image}" class="img-fluid" alt="..."></img>
      </div >
    );
  }
}

export default Gallery;