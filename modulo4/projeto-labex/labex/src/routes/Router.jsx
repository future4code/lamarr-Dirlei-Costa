import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import AdminHomePage from '../pages/AdminH/AdminHomePage';
import ApplicationFormPage from '..pages/Form/ApplicationFormPage';
import CreateTripPage from '../pages/Create/CreateTripPage';
import HomePage from '../pages/HomePage/HomePage';
import ListTripsPage from '../pages/ListListTripsPage';
import LoginPage from '../pages/Login/LoginPage'
import TripDetailsPage from '../pages/Details/TripDetailsPage';


const Router = () =>{

   return(
      <BrowserRouter>
         <Routes>
            <Route path='/' element={<HomePage/>}/>
            <Route path='/admin/trips/:id' element={<TripDetailsPage/>}/>
            <Route path='/admin/trips/list' element={<AdminHomePage/>}/>
            <Route path='/admin/trips/create' element={<CreateTripPage/>}/>
            <Route path= '/login' element={<LoginPage/>}/>
            <Route path='/trips/application' element={<ApplicationFormPage/>}/>
            <Route path= '/trips/list' element={<ListTripsPage/>}/>
         </Routes>
         
      </BrowserRouter>
   )

}

export default Router;

