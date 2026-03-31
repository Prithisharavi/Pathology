import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import Layout from './components/Layout';
import Dashboard from './components/Dashboard';
import TestReports from './components/TestReports';
import Patients from './components/Patients';
import Settings from './components/Settings';

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Navigate to="/pathologist/dashboard" replace />} />
        <Route path="/pathologist" element={<Layout />}>
          <Route path="dashboard" element={<Dashboard />} />
          <Route path="test-reports" element={<TestReports />} />
          <Route path="patients" element={<Patients />} />
          <Route path="settings" element={<Settings />} />
          <Route path="*" element={<Navigate to="dashboard" replace />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}