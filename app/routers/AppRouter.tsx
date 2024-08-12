import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navigation from "../components/Navigation"
import Main from "../components/Main";
import * as Pages from "../Pages";

interface ComponentProps {};

const AppRouter: React.FC<ComponentProps> = () => (
  <Router>
    <Routes>
      <Route path="/" element={ <Pages.OutturnsPage /> } />
      <Route path="/outturns" element={ <Pages.OutturnsPage /> } />
      <Route path="/outturns/:id" element={ <Pages.ActiveOutturnPage /> } />
      <Route path="/login" element={ <></> } />
      <Route path="/signup" element={ <></> } />
      <Route path="/casks" element={ <Pages.CasksPage /> } />
      <Route path="/component-test" element={ <Pages.ComponentTestPage /> } />
    </Routes>
  </Router>
);

export default AppRouter;
