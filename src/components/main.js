import { Component } from "react";
import FormComponent from './FormComponent' 
import Weather from './Weather'
import { Routes, Route, Navigate,Link } from 'react-router-dom';


class Main extends Component {

    constructor(props) {
        super(props);

        this.state=
        {longitude:'',
        latitude:'',
        submit:true    }

        this.getData.bind(this);
    }
   
    homeGo ()
    {
        this.setState({submit:true})
    }

    getData=(lat,long)=>
    {
       this.setState({longitude:long});
       this.setState({latitude:lat});
       this.setState({submit:false});
    }

    render() {


        return (

            <body class="d-flex h-100 text-center text-bg-dark">

                <div class="cover-container d-flex w-100 h-100 p-3 mx-auto flex-column">
                    <header class="mb-auto">
                        <div>
                            <h3 class="float-md-start mb-0">Weather City</h3>
                        </div>
                    </header>
                 
                    <main class="px-3">
                      
                       
                            <div class="mb-3 bg-dark">
                            <Routes>
                            <Route path='/home' element={<FormComponent onSubmit={this.getData} submit={this.state.submit} back={this.homeGo}/>}></Route>
                            <Route path='*' element={<Navigate to="/home" />}></Route>
                            </Routes>
                           
                            </div>


                           
                       


                     
                    </main>

                    <footer class="mt-auto text-white-50">
                        <p>Weather City 2022 &copy;</p>
                    </footer>
                </div>



            </body>
        );






    }






}


export default Main;