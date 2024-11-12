import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";
import RenderForm from "./Components/RenderForm";
import FormCreator from "./Components/FormCreator";
import HomePage from "./Components/HomePage";
import SubmittedForms from "./Components/SubmittedForms";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/createForms" element={<FormCreator />} />
        <Route path="/listForms" element={<RenderForm />} />
        <Route path="/submittedForms" element={<SubmittedForms />} />
      </Routes>
    </Router>
  );
}

export default App;
