import { Routes, Route } from "react-router-dom";
import AdminLogin from "./adminLogin";
import AdminDashboard from "./adminDashboard";
import DriverProfile from "./DriverProfile";
import ArtistProfile from "./ArtistProfile";
import NoQR from "./noQr";
import QRCode from "./QRCode";
import QRGenerator from "./qrGenerator";
import MusicRates from "./musicRates";
import DriverAccount from "./DriverAccont";
import ArtistAccount from "./ArtistAccount";

export default function AdminApp() {
  return (
    <Routes>
      <Route path="/admin/login" element={<AdminLogin />} />
      <Route path="/admin/dashboard" element={<AdminDashboard />} />
      <Route path="/admin/driverProfile" element={<DriverProfile />} />
      <Route path="/admin/artistProfile" element={<ArtistProfile />} />
      <Route path="/admin/noQR" element={<NoQR />} />
      <Route path="/admin/qrCode" element={<QRCode />} />
      <Route path="/admin/qrGenerator" element={<QRGenerator />} />
      <Route path="/admin/musicRates" element={<MusicRates />} />
      <Route path="/admin/DriverAccount" element={<DriverAccount />} />
      <Route path="/admin/ArtistAccount" element={<ArtistAccount />} />
    </Routes>
  );
}
