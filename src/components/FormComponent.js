import {React, useState} from 'react';
import { Button, Form, FormGroup, Input, Col ,Row, CardImg, Card} from 'reactstrap';
import Weather from './Weather';
import {Stagger,Fade} from 'react-animation-components'

 function FormComponent (props) {

   const[longitude,setLongitude]=useState("");
 const handleChangeLong =(event)=>{
    setLongitude(event.target.value);
 }
 const[latitude,setLatitude]=useState("");
 const handleChangeLat =(event)=>{
    setLatitude(event.target.value);
 }

 const handleSubmit=(event)=>{
   event.preventDefault();
   props.onSubmit(latitude,longitude);
 }

 if(props.submit){
    return (
      <div className='container'>
        <div className='row'>
        <div className='col-5 mx-auto my-5'>
        <h1 class="mt-5">Explore the Weather</h1>
      <Form onSubmit={handleSubmit}>
        <FormGroup>
        <p class="fw-lighter">Check weather using coordinates.</p>
          <div className='row'>
          <div className='col-md-5 mx-auto my-3 '>
          <Card className='border-0'>
          <CardImg src='./imgs/cloudy.png' width="100px" alt="weather app logo" className='bg-dark' />
          </Card>
          </div>
          </div>
          <Row>
          <Col md={6} className='form-group mt-3 mx-auto'>
          <Input type="long" name="long" id="long" placeholder="longitude" value={longitude} onChange={handleChangeLong}/>
          </Col>
          </Row>
          <Row className=''>
          <Col md={6} className='form-group mt-3 mx-auto'>
          <Input type="lat" name="lat" id="lat" placeholder="latitude" value={latitude} onChange={handleChangeLat}/>
          </Col>
          </Row>
        </FormGroup>
        <Button type="submit">Search</Button>
      </Form>
      </div>
      </div>
      </div>
    );
  }
  else{
    return(
      <Stagger  in
      transformProps={{
          exitTransform: 'scale(0.5) translateY(-50%)'
      }}>
          <Fade in>
    <Weather lon={longitude} lat={latitude} home={props.back}/>
    </Fade>
    </Stagger>
    );
  }

  }


export default FormComponent;