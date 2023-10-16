import { Navigate, Route, Routes } from "react-router";
import Nav from "../Nav";
import KanbasNavigation from "./KanbasNavigation";
import Account from "./Account";
import Dashboard from "./Dashboard";
import Courses from "./Courses";
import Calendar from "./Calendar";

function Kanbas() {
  return (
    <div className="d-flex">
      <div>
        <KanbasNavigation />
      </div>
      <div>
        <Routes>
        <Route path="/" element={<Navigate to="Dashboard" />} />
        <Route path="Account" element={<Account />} />
        <Route path="Dashboard" element={<Dashboard />} />
        <Route path="Courses/:courseId" element={<Courses />} />
        <Route path="Calendar" element={<Calendar />} />
        </Routes>
      </div>
    </div>
  );
}

export default Kanbas;
