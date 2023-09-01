import React from 'react';
// import 'bootstrap/dist/js/bootstrap.bundle';
// import * as bootstrap from 'bootstrap/dist/css/bootstrap.css';
// Put any other imports below so that CSS from your
// components takes precedence over default styles.

import {BrowserRouter, Link, Route, Routes} from 'react-router-dom';
import AddProduct from './AddProduct';
import Login from './Login';
import Card from './Card';


import { useNavigate } from 'react-router-dom';

function Navbar(props) {        //props will contain data={setIsLoggedIn} initial ={isLoggedIn} 
    
    //code for activating popovers
    
    
    
    // const navigate= useNavigate(a);

    function pleaseLogout(){
        //logout of the application
        // navigate("/login")(b);  (a&b) cannot be used because we are calling them outside the <Router>
        //therfore we use inbuilt window.navigator.path to this whichever path we give it will go there
        window.location.pathname= "/login"; //here we cannot use "useNavigate because in BrowserRouter we did not mention navbar we used "useNavigate in login because in Router we had defined Login(seeLogin component)"
    }

    return (
        <BrowserRouter>
             <div>
            <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
                <div className="container-fluid">
                    <a className="navbar-brand" href="#">A2Z</a>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                            
                                {/* <li className="nav-item"> */}
                                    {/* <a className="nav-link active" aria-current="page" href="#">Home</a> */}
                                    {/* <Link to='/home' className="nav-link active">Home</Link>
                                </li> */}
                                {/* <li className="nav-item"> */}
                                    {/* <a className="nav-link" href="#">Add Products</a> */}
                                    {/* <Link to='/add' className="nav-link active">Add Product</Link>
                                </li> */}

                                {/* <li className="nav-item">
                                    <a className="nav-link" href="#">Login</a> */}
                                    {/* <Link to='/login' className="nav-link active">Login</Link>
                                </li> */}
                                {/* <li className="nav-item">
                                    {/* <a className="nav-link" href="#">Logout</a> */}
                                {/* <Link to='/logout' className="nav-link active">Logout</Link>
                                </li> */}

                                {/* //instead of displaying Logout everytime we write below code */}


                                <button type="button" id='myPopover' data-html='true' class="btn btn-secondary" data-container="body" data-toggle="popover" data-placement="bottom" data-content="Vivamussagittis lacus vel augue laoreet rutrum faucibus.">
                                Cart</button>
                                {props.initial ? <>
                                    
                                    <li className="nav-item">
                                        <Link to='/home' className="nav-link active">Home</Link>    {/* created using react not bootstrap because it is react we can perform the routing actions on it */}
                                    </li>
                                    <li className="nav-item">
                                        <Link to='/add' className="nav-link active">Add Product</Link>
                                    </li>
                                    
                                    <button className="btn btn-outline-light" onClick={pleaseLogout}>Logout</button>
                                </> 
                                :  
                                <li className="nav-item"><Link to='/login' className="nav-link active">Login</Link></li>}
                                    
                                
                            
                            
                            
                        </ul>
                        <form className="d-flex" role="search">
                            <input className="form-control mr-sm-2" type="search" placeholder="Search" aria-label="Search" />
                            <button className="btn btn-outline-success" type="submit">Search</button> 
                        </form>
                        
                    </div>
                </div>
            </nav>
        </div>
        <Routes>                        {/* routes should always be written last because if it is written first page will not perform as we expected */}
            <Route path='/home' element={<Card/>}></Route>
            <Route path='/add' element={<AddProduct/>}></Route>
            <Route path='/login' element={<Login info= {props.data}/>}></Route>
            {/* <Route path='/logout' element={<Logout/>}></Route> */}
        </Routes>

        
        </BrowserRouter>
       
    )

}

export default Navbar;