import { BrowserRouter, Routes, Route } from "react-router-dom";

import Header from "./components/Header/Header";
import Notes from "./pages/MainPage/Notes/Notes";
import NoteDetail from "./pages/NoteDetail/NoteDetail";

const App = () => {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<Notes />} />
        <Route path="/note/:id" element={<NoteDetail />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
