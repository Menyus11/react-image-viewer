import React from 'react';
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import { HomePage, PicturesPage, VideoPage, AccountPage } from './componens';

function App() {
  return (

    <div>
      <BrowserRouter>

        <div className='bg-primary'>
          <div className='row'>
            <div className='nav-item col-md-1 text-center'>
              <Link to="/"><button className='btn btn-primary m-1'><b>Home</b></button></Link>
              <hr className='d-md-none my-0' />
            </div>
            <div className='nav-item col-md-1 text-center'>
              <Link to="/pictures"><button className='btn btn-primary m-1'><b>Képek</b></button></Link>
              <hr className='d-md-none my-0' />
            </div>
            <div className='nav-item col-md-1 text-center'>
              <Link to="/videos"><button className='btn btn-primary m-1'><b>Videok</b></button></Link>
              <hr className='d-md-none my-0' />
            </div>
            <div className='nav-item col-md-1 text-center'>
              <Link to="/login"><button className='btn btn-primary m-1'><b>Belépés</b></button></Link>
              <hr className='d-md-none my-0' />
            </div>
            <div className='nav-text col d-none d-xl-block text-center'>
              <h4 className="navbar-text">Nézegessen kedvére szórakoztató tartalmakat!</h4>
            </div>
          </div>
        </div>

        <Routes>
          <Route index element={<HomePage />} />
          <Route path="/pictures" element={<PicturesPage />} />
          <Route path="/videos" element={<VideoPage />} />
          <Route path="/login" element={<AccountPage />} />
        </Routes>

      </BrowserRouter>
    </div >

  );
}

export default App;
