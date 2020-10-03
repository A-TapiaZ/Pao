import React from 'react'

import hogao1 from '../../assets/img/hogaoPatacon.jpg';
import tamanos from '../../assets/img/tamanospresentaciones.jpg';
import vegetales3 from '../../assets/img/vegetales3.jpg';
import './carousel.css';

const Carousel = () => {
  return ( 


      <div id="carouselExampleFade" className="carousel slide carousel-fade" data-ride="carousel">
        <div className="carousel-inner">
          
          <div className="carousel-item active">
            <img src={hogao1} className="d-block w-100" alt="..."/>
            <div class="carousel-caption">
              <h1>Productos 100% naturales</h1>
              <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
            </div>
          </div>
          <div className="carousel-item">
            <img src={tamanos} className="d-block w-100" alt="..."/>
          </div>
          <div className="carousel-item">
            <img src={vegetales3} className="d-block w-100" alt="..."/>
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
