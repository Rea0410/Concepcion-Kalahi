import NavigationBar from "./components/NavigationBar";
import BarangayDashboard from "./components/BarangayDashboard";
import BarangayProjects from "./components/BarangayProjects";

import { Routes, Route } from "react-router-dom";

function App() {
  return (
    <>
      <NavigationBar /> 

      <Routes>
        <Route path="/" element={<BarangayDashboard />} />
        <Route
          path="/barangay-projects/:barangay"
          element={<BarangayProjects />}
        />
      </Routes>
    </>
  );
}

export default App; 