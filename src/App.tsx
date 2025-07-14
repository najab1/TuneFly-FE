import { BrowserRouter, Routes, Route } from "react-router-dom";
import Signup from "./pages/signup";
import Login from "./pages/login";
import Dashboard from "./pages/dashboard";
import NewCampaigns from "./pages/newCampaigns";
import CreateCampaigns from "./pages/createCampaigns";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/signup" element={<Signup />} />
        <Route path="/login" element={<Login />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/newCampaigns" element={<NewCampaigns />} />
        <Route path="/createCampaigns" element={<CreateCampaigns />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;