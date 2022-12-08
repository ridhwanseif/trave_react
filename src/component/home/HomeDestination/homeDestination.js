import React from 'react';
import '../index.css';
import Img1 from "./Nungwi.jpg";
import Img2 from "./psouth.jpg";
import Img3 from "./ston2.jpg";
import Img4 from "./dp.jpg";
import { Link } from 'react-router-dom';


import NorthDestination from './zanzibarDestination/zanzibarNorth';

function HomeDestination(){
    return(
        // <!--distination section -->
       <section className="distination" >
        <div className='distination_bg'>
           <h1>Our Transfer Destination</h1>
           <p>The Zanzibar taxi assure you a safe journey and complete the needs of your taxis transfer service with cheap price, we are available 24 hours a day.</p>
           <div className="container">
               <div className="row">
                
               <div className="col-md-3" id="col3-distination">   
                <div className="distination-box">
                <a href="zanzibarNorth.php"> 
                        <div className="distination-img">
                           <img src={Img1}/>
                        </div>
                </a>
                        <div className="distination-details">
                            <div className="container mt-3">
                                <table className="table table-hover">
                                    <thead>
                                    <tr>
                                        <th>Zanzibar North</th>
                                    </tr>
                                    </thead>
                                    <tbody>
                                        <tr>
                                            <td> <Link to='/destination'>Nungwi</Link></td>
                                        </tr>
                                        <tr>
                                            <td><Link to='/destination'>Kendwa</Link></td>
                                        </tr>
                                        <tr>
                                            <td><Link to='/destination'>Matemwe</Link></td>
                                        </tr>
                                        <tr>
                                            <td><Link to='/destination'>Kiwengwa</Link></td>
                                        </tr>
                                        <tr>
                                            <td><Link to='/destination'>Pwani Mchangani</Link></td>
                                        </tr>
                                        </tbody>
                                </table>
                </div>
                        </div>
                        <div>
                            <span><i className="fa fa-sun"></i>Days</span>
                            <span><i className="fa fa-moon"></i>Nigths</span>
                        </div>
                    </div>
                
                </div>

                <div className="col-md-3">   
                <div className="distination-box">
                <a href="zanzibarSouth.php"> 
                        <div className="distination-img">
                           <img src={Img2}/>
                        </div>
                </a>
                        <div className="distination-details">
                            <div className="container mt-3">
                                <table className="table table-hover">
                                    <thead>
                                    <tr>
                                        <th>Zanzibar South</th>
                                    </tr>
                                    </thead>
                                    <tbody>
                                    <tr>
                                        <td><Link to='/destination'>Paje</Link></td>
                                    </tr>
                                    <tr>
                                        <td><Link to='/destination'>Bwejuu</Link></td>
                                    </tr>
                                    <tr>
                                        <td><Link to='/destination'>Michamvi</Link></td>
                                    </tr>
                                    <tr>
                                        <td><Link to='/destination'>Jambiani</Link></td>
                                    </tr>
                                    <tr>
                                        <td><Link to='/destination'>Kizimkazi</Link></td>
                                    </tr>
                                    </tbody>
                                </table>
                </div>
                        </div>
                        <div>
                            <span><i className="fa fa-sun"></i>Days</span>
                            <span><i className="fa fa-moon"></i>Nigths</span>
                        </div>
                    </div>
                
                </div>

                <div className="col-md-3">   
                <div className="distination-box">
                <a href="zanzibarUrban.php"> 
                        <div className="distination-img">
                           <img src={Img3}/>
                        </div>
                </a>
                        <div className="distination-details">
                            <div className="container mt-3">
                                <table className="table table-hover">
                                    <thead>
                                    <tr>
                                        <th>Zanzibar Central/Urban</th>
                                    </tr>
                                    </thead>
                                    <tbody>
                                    <tr>
                                        <td><a href="/destination">Uroa</a></td>
                                    </tr>
                                    <tr>
                                        <td><Link to='/destination'>Marumbi</Link></td>
                                    </tr>
                                    <tr>
                                        <td><Link to='/destination'>Pongwe</Link></td>
                                    </tr>
                                    <tr>
                                        <td><Link to='/destination'>Stone Town</Link></td>
                                    </tr>
                                    <tr>
                                        <td><Link to='/destination'>Seacliff Hotel</Link></td>
                                    </tr>
                                    </tbody>
                                </table>
                </div>
                        </div>
                        <div>
                            <span><i className="fa fa-sun"></i>Days</span>
                            <span><i className="fa fa-moon"></i>Nigths</span>
                        </div>
                    </div>
                
                </div>

                <div className="col-md-3">   
                <div className="distination-box">
                <a href="zanzibarBiach.php"> 
                        <div className="distination-img">
                           <img src={Img4}/>
                        </div>
                </a>
                        <div className="distination-details">
                        <div className="container mt-3">
                        <table className="table table-hover">
                            <thead>
                            <tr>
                                <th>DestinationToDestination</th>
                            </tr>
                            </thead>
                            <tbody>
                            <tr>
                                <td><Link to='/destination'>Nungwi to Kizimkazi</Link></td>
                            </tr>
                            <tr>
                                <td><Link to='/destination'>Uroa to Jambian</Link></td>
                            </tr>
                            <tr>
                                <td><Link to='/destination'>Matemwe Michamvi</Link></td>
                            </tr>
                            <tr>
                                <td><Link to='/destination'>Kiwengwa to Kendwa</Link></td>
                            </tr>
                            <tr>
                                <td><Link to='/destination'>Stone Town to Paje</Link></td>
                            </tr>
                            </tbody>
                        </table>
                </div>
                        </div>
                        <div>
                            <span><i className="fa fa-sun"></i>Days</span>
                            <span><i className="fa fa-moon"></i>Nigths</span>
                        </div>
                    </div>
                
                </div>
               
                </div>
               </div>
        </div>
       </section>

    );
}

export default HomeDestination;