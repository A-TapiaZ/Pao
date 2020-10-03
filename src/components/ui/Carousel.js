import React from 'react'
import './carousel.css';

const Carousel = () => {
  return ( 


      <div id="carouselExampleFade" className="carousel slide carousel-fade" data-ride="carousel">
        <div className="carousel-inner">
          
          <div className="carousel-item active">
            <img src="https://res.cloudinary.com/dt9ip7rkj/image/upload/v1601693341/Paopage/hogaoPatacon_qohgxf.jpg" className="d-block w-100" alt="..."/>
            <div class="carousel-caption">
              <h1>Productos 100% naturales</h1>
              <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
            </div>
          </div>
          <div className="carousel-item">
            <img src="https://res.cloudinary.com/dt9ip7rkj/image/upload/v1601693341/Paopage/tamanospresentaciones_kgevz4.jpg" className="d-block w-100" alt="..."/>
          </div>
          <div className="carousel-item">
            <img src="https://res.cloudinary.com/dt9ip7rkj/image/upload/v1601693342/Paopage/vegetales3_ujg150.jpg" className="d-block w-100" alt="..."/>
          </div>
        </div>
        <a className="carousel-control-prev" href="#carouselExampleFade" role="button" data-slide="prev">
          <span className="carousel-control-prev-icon" aria-hidden="true"></span>
          <span className="sr-only">Previous</span>
        </a>
        <a className="carousel-control-next" href="#carouselExampleFade" role="button" data-slide="next">
          <span className="carousel-control-next-icon" aria-hidden="true"></span>
          <span className="sr-only">Next</span>
        </a>
      </div>

  )
}

export default Carousel
