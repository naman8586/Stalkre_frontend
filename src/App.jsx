import './App.css'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Login from './components/login.jsx'
import Signup from './components/signup.jsx'
import Dashboard from './components/dashboard.jsx';
import BrandForm from './components/BrandForm.jsx';
import BrandDashboard from './components/BrandDashboard.jsx';
import TriagingDashboard from './components/TriagingDashboard.jsx';
import StepOneForm from './components/StepOneForm.jsx';
import StepTwoForm from './components/StepTwoForm.jsx';
import StepThreeForm from './components/StepThreeForm.jsx';
import StepFourForm from './components/StepFourForm.jsx';
import ProductInsight from './components/productInsight.jsx';
import SellerRiskReport from './components/SellerRiskReport.jsx';
function App() {

  return (
     <Router>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/brandform" element={<BrandForm />} />
        <Route path="/branddashboard" element={<BrandDashboard />} />
        <Route path="/triagingdashboard" element={<TriagingDashboard />} />
        <Route path="/steponeform" element={<StepOneForm />} />
        <Route path="/steptwoform" element={<StepTwoForm />} />
        <Route path="/stepthreeform" element={<StepThreeForm />} />
        <Route path="/stepfourform" element={<StepFourForm />} />
        <Route path="/productinsight" element={<ProductInsight />} />
        <Route path="/sellerriskreport" element={<SellerRiskReport />} />

      </Routes>
    </Router>
  )
}

export default App
