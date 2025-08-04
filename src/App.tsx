// import { BrowserRouter, Routes, Route } from "react-router-dom";
// import Signup from "./pages/signup";
// import Login from "./pages/login";
// import Dashboard from "./pages/dashboard";
// import NewCampaigns from "./pages/newCampaigns";
// import CreateCampaigns from "./pages/createCampaigns";
// import AssetLibrary from "./pages/assetLibrary";
// import Analytics from "./pages/analytics";
// import Settings from "./pages/settings";
// import EditProfile from "./pages/editProfile";
// import ChangePassword from "./pages/changePassword";
// import IntegratedAccount from "./pages/integratedAccounts";
// import Faqs from "./pages/faqs";
// import QrLanding from "./pages/qrLanding";
// import VerifyScreen from "./pages/verifyScreen";

// function App() {
//   return (
//     <BrowserRouter>
//       <Routes>
//         <Route path="/signup" element={<Signup />} />
//         <Route path="/login" element={<Login />} />
//         <Route path="/verifyEmail" element={<VerifyScreen />} />
//         <Route path="/dashboard" element={<Dashboard />} />
//         <Route path="/newCampaigns" element={<NewCampaigns />} />
//         <Route path="/createCampaigns" element={<CreateCampaigns />} />
//         <Route path="/assetLibrary" element={<AssetLibrary />} />
//         <Route path="/analytics" element={<Analytics />} />
//         <Route path="/settings" element={<Settings />} />\
//         <Route path="/editProfile" element={<EditProfile />} />
//         <Route path="/changePassword" element={<ChangePassword />} />
//         <Route path="/integratedAccounts" element={<IntegratedAccount />} />
//         <Route path="/faqs" element={<Faqs />} />
//         <Route path="/qrlanding" element={<QrLanding />} />
//       </Routes>
//     </BrowserRouter>
//   );
// }

// export default App;


import { BrowserRouter } from "react-router-dom";
import AdminApp from "./admin/AdminApp"; // admin-specific routes
import UserRoutes from "./UserRoutes"; // user-specific routes

function App() {
  const isAdmin = window.location.pathname.startsWith("/admin");

  return (
    <BrowserRouter>
      {isAdmin ? <AdminApp /> : <UserRoutes />}
    </BrowserRouter>
  );
}

export default App;
