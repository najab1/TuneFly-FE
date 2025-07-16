import { BrowserRouter, Routes, Route } from "react-router-dom";
import Signup from "./pages/signup";
import Login from "./pages/login";
import Dashboard from "./pages/dashboard";
import NewCampaigns from "./pages/newCampaigns";
import CreateCampaigns from "./pages/createCampaigns";
import AssetLibrary from "./pages/assetLibrary";
import Analytics from "./pages/analytics";
import Settings from "./pages/settings";
import EditProfile from "./pages/editProfile";
import ChangePassword from "./pages/changePassword";
import IntegratedAccount from "./pages/integratedAccounts";
import Faqs from "./pages/faqs";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/signup" element={<Signup />} />
        <Route path="/login" element={<Login />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/newCampaigns" element={<NewCampaigns />} />
        <Route path="/createCampaigns" element={<CreateCampaigns />} />
        <Route path="/assetLibrary" element={<AssetLibrary />} />
        <Route path="/analytics" element={<Analytics />} />
        <Route path="/settings" element={<Settings />} />\
        <Route path="/editProfile" element={<EditProfile />} />
        <Route path="/changePassword" element={<ChangePassword />} />
        <Route path="/integratedAccounts" element={<IntegratedAccount />} />
        <Route path="/faqs" element={<Faqs />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;