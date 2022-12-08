import React from "react";
import './material-kit.css';
import Tab from './destionationTab';
import './destination.css';
import { Link } from 'react-router-dom';


const Destination = () => <div>

   
  <header className="bg-gradient-dark w-100">
    <div className="page-header min-vh-65">
      <span className="mask bg-gradient-dark opacity-6"></span>
      <div className="container">
        <div className="row justify-content-center my-5">
          <div className="col-lg-8 text-center mx-auto my-auto">
            <h1 className="text-white">Zanzibar Destination Area</h1>
            <p className="lead mb-0 text-white opacity-8">welcame to the Zanzibar taxi and tours, we are here to complete the needs of your taxi transfer services from airport to hotel and from hotel to hotel across the Zanzibar.</p>
           
          </div>
        </div>
      </div>
    </div>
  </header>

  <div className="card card-body shadow-xl mx-2 mx-md-5 mt-n0">

    <section className="py-3">
      
    <div container>
      <div class="row">
        <div className="col-md-9">
            <Tab/>
        </div>
    
        <div class="col-md-3">
           <div class="col4-col">
            <div class="col4-box-seach">
                <div class="input-group mb-3 ">
                    <input type="text" class="form-control dis-search" placeholder="    Search"/>
                    <button class="btn btn-primary my-1" type="submit">Go</button>
                </div>
            </div>

            <div class="col4-box">
                <div class="container mt-3">
                <table class="table table-hover">
                    <thead>
                    <tr>
                        <th>North Areas</th>
                    </tr>
                    </thead>
                    <tbody>
                    <tr>
                        <td><Link to='/destination'>Nungwi</Link></td>
                    </tr>
                    <tr>
                        <td><Link to='/destination'>Kendwa</Link></td>
                    </tr>
                    <tr>
                        <td><a href="zanzibarNorth.php?#northMatemwe">Matemwe</a></td>
                    </tr>
                    <tr>
                        <td><a href="zanzibarNorth.php?#northKiwengwa">Kiwengwa</a></td>
                    </tr>
                    <tr>
                        <td><a href="zanzibarNorth.php?#northPMchangani">Pwani Mchangani</a></td>
                    </tr>
                    </tbody>
                </table>
                </div>
            </div>

            <div class="col4-box">
                <div class="container mt-3">
                <table class="table table-hover">
                    <thead>
                    <tr>
                        <th>South Areas</th>
                    </tr>
                    </thead>
                    <tbody>
                    <tr>
                        <td><a href="zanzibarSouth.php?#southPaje">Paje</a></td>
                    </tr>
                    <tr>
                        <td><a href="zanzibarSouth.php?#southBwejuu">Bwejuu</a></td>
                    </tr>
                    <tr>
                        <td><a href="zanzibarSouth.php?#southMichamvi">Michamvi</a></td>
                    </tr>
                    <tr>
                        <td><a href="zanzibarSouth.php?#southJambiani">Jambiani</a></td>
                    </tr>
                    <tr>
                        <td><a href="zanzibarSouth.php?#southKizimkazi">Kizimkazi</a></td>
                    </tr>
                    </tbody>
                </table>
                </div>
            </div>

            <div class="col4-box">
                <div class="container mt-3">
                <table class="table table-hover">
                    <thead>
                    <tr>
                        <th>Zanzibar Central/Urban</th>
                    </tr>
                    </thead>
                    <tbody>
                    <tr>
                        <td><a href="zanzibarUrban.php#urbanUroa">Uroa</a></td>
                    </tr>
                    <tr>
                        <td><a href="zanzibarUrban.php#urbanMarumbi">Marumbi</a></td>
                    </tr>
                    <tr>
                        <td><a href="zanzibarUrban.php#urbanPongwe">Pongwe</a></td>
                    </tr>
                    <tr>
                        <td><a href="zanzibarUrban.php#urbanSTown">Stone Town</a></td>
                    </tr>
                    <tr>
                        <td><a href="zanzibarUrban.php#urbanSHotel">Seacliff Hotel</a></td>
                    </tr>
                    </tbody>
                </table>
                </div>
            </div>

            <div class="col4-box">
                <div class="container mt-3">
                <table class="table table-hover">
                    <thead>
                    <tr>
                        <th>Destination To Destination</th>
                    </tr>
                    </thead>
                    <tbody>
                    <tr>
                        <td><a href="#">Nungwi to Kizimkazi</a></td>
                    </tr>
                    <tr>
                        <td><a href="#">Uroa to Jambian</a></td>
                    </tr>
                    <tr>
                        <td><a href="#">Matemwe to Paje</a></td>
                    </tr>
                    <tr>
                        <td><a href="#">Kiwengwa to Kendwa</a></td>
                    </tr>
                    <tr>
                        <td><a href="#">Stone Town to Paje</a></td>
                    </tr>
                    </tbody>
                </table>
                </div>
            </div>

           

            </div>
        </div>
        </div>
    </div>

    <h4>Transfer Price varies according to government taxes</h4>
    </section>

  </div>
 
 

    </div>

export default Destination;