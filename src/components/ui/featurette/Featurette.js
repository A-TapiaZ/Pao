import React from 'react'
import './featurette.css'
import grande from '../../../assets/img/presentaciongrande.jpg'
import pequena from '../../../assets/img/presentacionpuequena.jpg'
import LineaSeparadora from '../hr/LineaSeparadora'


const Featurette = () => {
  return (
    <>

    <div className="container marketing">

      <div className="row featurette">
        <div className="col-md-7">
          <h2 className="featurette-heading">First featurette heading. <span className="text-muted">It’ll blow your mind.</span></h2>
          <p className="lead">Donec ullamcorper nulla non metus auctor fringilla. Vestibulum id ligula porta felis euismod semper. Praesent commodo cursus magna, vel scelerisque nisl consectetur. Fusce dapibus, tellus ac cursus commodo.</p>
        </div>
        <div className="col-md-5">
          <img 
            alt="Foto-tamano"
            src={grande}
            className="bd-placeholder-img bd-placeholder-img-lg featurette-image img-fluid mx-auto" 
            width="500" 
            height="500" 
            focusable="false" 
            aria-label="Placeholder: 500x500"/>
        </div>
      </div>

      <LineaSeparadora/>

      <div className="row featurette">
        <div className="col-md-7 order-md-2">
          <h2 className="featurette-heading">And lastly, this one. <span className="text-muted">Checkmate.</span></h2>
          <p className="lead">Donec ullamcorper nulla non metus auctor fringilla. Vestibulum id ligula porta felis euismod semper. Praesent commodo cursus magna, vel scelerisque nisl consectetur. Fusce dapibus, tellus ac cursus commodo.</p>
        </div>
        <div className="col-md-5">
          <img 
            alt="Foto-tamano"
            src={pequena}
            className="bd-placeholder-img bd-placeholder-img-lg featurette-image img-fluid mx-auto" 
            width="500" 
            height="500" 
            focusable="false" 
            aria-label="Placeholder: 500x500"/>
        </div>
      </div>

      <LineaSeparadora/>

    </div>

    </>
  )
}

export default Featurette
