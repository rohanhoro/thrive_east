import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import "./App.css";
import ProtectedRoute from "./components/ProtectedRoute";
import AboutUs from "./pages/AboutUs";
import AdminDashboardLayout from "./pages/admin/AdminDashboardLayout";
import AdminLogin from "./pages/admin/AdminLogin";
import Enquiries from "./pages/admin/Enquiries";
import Profile from "./pages/admin/Profile";
import Team from "./pages/admin/Team";
import ContactUs from "./pages/ContactUs";
import EastNestHomeStay from "./pages/EastNestHomeStay";
import EastNestPropertyCare from "./pages/EastNestPropertyCare";
import EastSideChronicles from "./pages/EastSideChronicles";
import FAQ from "./pages/FAQ";
import Home from "./pages/Home";
import Layout from "./pages/Layout";
import NoContent from "./pages/NoContent";
import Privacy from "./pages/Privacy";
import Projects from "./pages/Projects";
import Services from "./pages/Services";
import TermsAndConditions from "./pages/TermsAndConditions";
import ThriveEastStudio from "./pages/ThriveEastStudio";
import ThriveStore from "./pages/ThriveStore";
import DashboardHome from "./pages/admin/DashboardHome";

const routes = [
  {
    id: 1,
    path: "projects",
    element: <Projects />,
  },
  {
    id: 2,
    path: "services",
    element: <Services />,
  },
  {
    id: 3,
    path: "aboutus",
    element: <AboutUs />,
  },
  {
    id: 4,
    path: "terms",
    element: <TermsAndConditions />,
  },
  {
    id: 5,
    path: "privacy",
    element: <Privacy />,
  },
  {
    id: 6,
    path: "contact",
    element: <ContactUs />,
  },
  {
    id: 7,
    path: "/services/chronicles",
    element: <EastSideChronicles />,
  },
  {
    id: 8,
    path: "/services/studio",
    element: <ThriveEastStudio />,
  },
  {
    id: 9,
    path: "/services/propertycare",
    element: <EastNestPropertyCare />,
  },
  {
    id: 10,
    path: "/services/thrivestore",
    element: <ThriveStore />,
  },
  {
    id: 11,
    path: "/services/homestay",
    element: <EastNestHomeStay />,
  },
  {
    id: 12,
    path: "/faq",
    element: <FAQ />,
  },
];

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          {routes.map((route) => (
            <Route key={route.id} path={route.path} element={route.element} />
          ))}
        </Route>
        <Route path="*" element={<NoContent />} />
        <Route path="/login" element={<AdminLogin />} />
        <Route
          path="/admin"
          element={
            <ProtectedRoute>
              <AdminDashboardLayout />
            </ProtectedRoute>
          }
        >
          <Route index element={<DashboardHome />} />
          <Route path="enquiries" element={<Enquiries />} />
          <Route path="team" element={<Team />} />
          <Route path="profile" element={<Profile />} />
        </Route>
      </Routes>
    </Router>
  );
}

export default App;
