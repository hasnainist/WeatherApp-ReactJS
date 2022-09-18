import { Component } from "react";
import { Form, Button, Card, CardImg, CardBody, Row } from 'reactstrap';
import {Stagger} from 'react-animation-components'


class Weather extends Component {

    constructor(props) {
        super(props);

        this.state = {
            data: {},
            render: false,
            ok:true
        }
    }

    componentDidMount() {

        const api = "https://api.openweathermap.org/data/2.5/weather?lat=" + this.props.lat + "&lon=" + this.props.lon + "&appid=21dddb1f4f4170509871368121e848dd";
        fetch(api)
            .then(response => response.json())
            .then((result) => {


                this.setState({ data: result });
                this.setState({ render: true });
               if(result.cod==='400')
               {

                this.setState({ok:false})
                
               }

            })
        
    }





    render() {




        const backtoHome = () => {
            this.props.home();
        }

       
        if(this.state.ok){
        if (this.state.render) {
            const source="./imgs/"+this.state.data.weather[0].main+".png";

            return (


                <body class="d-flex h-100 text-center bg-dark">

                    
                        <div className="container ">
                            <div className="row justify-content-center">
                                <div className="col-md-3">
                                    <Card className="border-0">

                                        <CardImg src={source} width="100px" alt="weather app logo" className='border-0 bg-dark' />

                                    </Card>
                                </div>

                                <div className="row justify-content-center">
                                    <div className="col-md-6">
                                        <Card className="border-0 mb-3 bg-dark">

                                            <CardBody className="text-white">


                                               
                                                <p className="fs-1">{this.state.data.name} , {this.state.data.sys.country}</p>
                                                <hr size="5" width="90%" color="white" className="mx-auto" />

                                                <Row className="align-items-center mb-4">
                                                    <p className="fw-light fs-4">{this.state.data.weather[0].main}</p>
                                                </Row>

                                                <Row>

                                                    <div className="col-5 ms-auto">
                                                        <p className="fw-light fs-6">temp | {this.state.data.main.temp} K</p>
                                                    </div>

                                                    <div className="col-5 me-auto">
                                                        <p className="fw-light">feels like | {this.state.data.main.feels_like} K</p>
                                                    </div>
                                                </Row>



                                                <Row>

                                                    <div className="col-5 ms-auto">
                                                        <p className="fw-light">min | {this.state.data.main.temp_min} K</p>
                                                    </div>

                                                    <div className="col-5 me-auto">
                                                        <p className="fw-light">max | {this.state.data.main.temp_max} K</p>
                                                    </div>


                                                </Row>

                                                <Row>

                                                    <div className="col-5 ms-auto">
                                                        <p className="fw-light">desc | {this.state.data.weather[0].description}</p>
                                                    </div>
                                                    <div className="col-5 me-auto">
                                                        <p className="fw-light">humidity | {this.state.data.main.humidity} %</p>
                                                    </div>

                                                </Row>


                                                <Row>

                                                    <div className="col-5 ms-auto">
                                                        <p className="fw-light">pressure | {this.state.data.main.pressure} hPa</p>
                                                    </div>
                                                    <div className="col-5 me-auto">
                                                        <p className="fw-light">wind speed | {this.state.data.wind.speed} km/h</p>

                                                    </div>


                                                </Row>
                                               
                                            



                                            </CardBody>


                                        </Card>
                                    </div>
                                </div>


                                <Form onSubmit={backtoHome}><Button type="submit">Home</Button></Form>

                            </div>

                        </div>



                   

                </body>
            );
        }




        else {
            return (
                <body class="d-flex h-100 text-center bg-dark">


                    <div className="container ">
                        <div className="row justify-content-center">
                            <div className="col-md-3">
                                <Card className="border-0">

                                    <CardImg src='./imgs/loading.png' width="100px" alt="weather app logo" className='border-0 bg-dark' />

                                </Card>
                            </div>

                            <div className="row justify-content-center">
                                <div className="col-md-6">
                                    <Card className="border-0 mb-3 bg-dark">

                                        <CardBody className="text-white">



                                            <p className="fs-1">...</p>
                                            <hr size="5" width="90%" color="white" className="mx-auto" />

                                            <Row className="align-items-center mb-4">
                                                <p className="fw-light fs-4">...</p>
                                            </Row>

                                            <Row>

                                                <div className="col-5 ms-auto">
                                                    <p className="fw-light fs-6">...</p>
                                                </div>

                                                <div className="col-5 me-auto">
                                                    <p className="fw-light">...</p>
                                                </div>
                                            </Row>



                                            <Row>

                                                <div className="col-5 ms-auto">
                                                    <p className="fw-light">...</p>
                                                </div>

                                                <div className="col-5 me-auto">
                                                    <p className="fw-light">...</p>
                                                </div>


                                            </Row>

                                            <Row>

                                                <div className="col-5 ms-auto">
                                                    <p className="fw-light">...</p>
                                                </div>
                                                <div className="col-5 me-auto">
                                                    <p className="fw-light">...</p>
                                                </div>

                                            </Row>


                                            <Row>

                                                <div className="col-5 ms-auto">
                                                    <p className="fw-light">...</p>
                                                </div>
                                                <div className="col-5 me-auto">
                                                    <p className="fw-light">...</p>

                                                </div>


                                            </Row>





                                        </CardBody>


                                    </Card>
                                </div>
                            </div>


                            <Button type="submit">Home</Button>

                        </div>

                    </div>





                </body>
            );

        }
    }
    else
    {
        return (
        <div >
        <div className="container vh-100 align-items-center">
        <div className="m-5 p-5">
        <h1 className="m-5 pt-5 font-monospace ">{this.state.data.message} :&#40; </h1>
        <Form onSubmit={backtoHome}><Button type="submit">Home</Button></Form>
        </div>
        </div>
        </div>
        )
    }
    
    }
    












}
export default Weather;