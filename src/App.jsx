import { useState } from "react";
import { Routes, Route } from "react-router-dom";
import WeekView from "./pages/WeekView";
import DayView from "./pages/DayView";

export default function App() {
  const [completed, setCompleted] = useState({});
  const toggleComplete = (key) =>
    setCompleted((prev) => ({ ...prev, [key]: !prev[key] }));

  return (
    <Routes>
      <Route path="/" element={<WeekView />} />
      <Route
        path="/day/:dayIndex"
        element={<DayView completed={completed} onToggle={toggleComplete} />}
      />
    </Routes>
  );
}
