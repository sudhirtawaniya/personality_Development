import React, { useEffect } from 'react';
import {
  Routes,
  Route,
  useLocation
} from 'react-router-dom';

import './css/style.css';

import './charts/ChartjsConfig';

// Import pages
import Dashboard from './pages/Dashboard';
import FreeTest from './pages/freeTest';
import ShowFreeTest from './pages/showFreeTest';
import EditFreeTest from './pages/EditFreetest';
import IndividualPaidTest from './pages/individualPaidTest';
import EditindividualPaidTest from './pages/EditindividualPaidTest';
import ShowindividualPaidTest from './pages/showindividualPaidTest';
import ShowCoupleTest from './pages/showCoupleTest';
import CoupleTest from './pages/CoupleTest';
import EditCoupleTest from './pages/EditCoupleTest';
import Button from './pages/login/Button';

function App() {

  const location = useLocation();

  useEffect(() => {
    document.querySelector('html').style.scrollBehavior = 'auto'
    window.scroll({ top: 0 })
    document.querySelector('html').style.scrollBehavior = ''
  }, [location.pathname]); // triggered on route change

  return (
    <>
      <Routes>
      <Route exact path="/login" element={<Button />} />
        <Route exact path="/" element={<Dashboard />} />
        <Route exact path="/FreeAssessmentTest" element={<ShowFreeTest />} />
        <Route exact path="/test/Addfreetest" element={<FreeTest />} />
        <Route exact path="/test/freetest/editfreetest/:id" element={<EditFreeTest />} />
        <Route exact path="/test/individualpaidtest" element={<ShowindividualPaidTest />} />
        <Route exact path="/test/AddindividualPaidtest" element={<IndividualPaidTest />} />
        <Route exact path="/test/individualpaidtest/editindividualpaidtest/:id" element={<EditindividualPaidTest />} />
        <Route exact path="/test/coupletest" element={<ShowCoupleTest />} />
        <Route exact path="/test/Addcoupletest" element={<CoupleTest />} />
        <Route exact path="/test/coupletest/editcoupletest/:id" element={<EditCoupleTest />} />
      </Routes>
    </>
  );
}

export default App;
