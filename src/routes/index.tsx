import React from 'react';
import { Routes, Navigate, Route } from "react-router-dom";
import RouteWithLayout from '../components/RouteWithLayout';
// layouts
import AppLayout from '../layouts/appLayout';

// views
import AuthView from '../layouts/auth';
import AuthComponent from '../views/auth';

export default function AppRoutes() {
  return (
    <Routes>
      <Route path='/login' element={<AuthComponent />} />
      <Route path='/' element={<AppLayout />}>
        {/* <Route path='/' element={<Dashboard />} /> */}
      </Route>
      <Route path="*" element={<Navigate to="/login" />} />
    </Routes>
  );
}