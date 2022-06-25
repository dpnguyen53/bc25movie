import "./App.css";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import HomeTemplate from "./containers/HomeTemplate";
import HomePage from "./containers/HomeTemplate/HomePage";
import About from "./containers/HomeTemplate/AboutPage";
import ListMoviePage from "./containers/HomeTemplate/ListMoviePage";
import AdminTemplate from "./containers/AdminTemplate";
import DashboardPage from "./containers/AdminTemplate/DashboardPage";
import AddUserPage from "./containers/AdminTemplate/AddUserPage";
import AddMoviePage from "./containers/AdminTemplate/AddMoviePage";
import PageNotFound from "./containers/PageNotFound";
import HooksPage from "./containers/HomeTemplate/HooksPage";
import HocPage from "./containers/HomeTemplate/HocPage";
import DetailMovie from "./containers/HomeTemplate/DetailMovie";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        {/* HomeTemplate */}
        <Route path="" element={<HomeTemplate />}>
          {/* HomePage */}
          <Route path="" element={<HomePage />} />
          {/* AboutPage */}
          <Route path="about" element={<About />} />
          {/* ListMoviePage */}
          <Route path="list-movie" element={<ListMoviePage />} />
          {/* HooksPage */}
          <Route path="hooks" element={<HooksPage />} />
          {/* HocPage */}
          <Route path="hoc" element={<HocPage />} />
          {/* Detail Movie */}
          <Route path="/detail/:id" element={<DetailMovie />} />
        </Route>

        {/* Redirect to admin/dashboard */}
        <Route
          path="admin"
          element={<Navigate replace to="/admin/dashboard" />}
        />

        {/* AdminTemplate */}
        <Route path="admin" element={<AdminTemplate />}>
          <Route path="dashboard" element={<DashboardPage />} />
          <Route path="add-user" element={<AddUserPage />} />
          <Route path="add-movie" element={<AddMoviePage />} />
        </Route>

        {/* PageNotFound */}
        <Route path="*" element={<PageNotFound />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
