import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";
import RenderForm from "./Components/RenderForm";
import FormCreator from "./Components/FormCreator";
import HomePage from "./Components/HomePage";
import SubmittedForms from "./Components/SubmittedForms";
import FormList from "./Components/FormList";
import FormFromPDF from "./Components/FormFromPDF";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/formList" element={<FormList />} />
        <Route path="/createForms" element={<FormCreator />} />
        <Route path="/form" element={<RenderForm />} />
        <Route path="/submittedForms" element={<SubmittedForms />} />
        <Route path="/formsFromPDF" element={<FormFromPDF />} />
      </Routes>
    </Router>
  );
}

export default App;
