import { BrowserRouter, Routes, Route } from "react-router-dom";

import Header from "./components/Header/Header";
import Notes from "./pages/MainPage/Notes/Notes";
import NoteDetail from "./pages/NoteDetail/NoteDetail";
import NotFound from "./pages/NotFound/NotFound";
import { route } from "./static/Router/Routes";

const App = () => {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path={route.home} element={<Notes />} />
        <Route path={route.note} element={<NoteDetail />} />
        <Route path={route.notFound} element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
