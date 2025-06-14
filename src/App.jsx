import React from "react";
import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Login from "./pages/Login";
import Register from "./pages/Register";
import Dashboard from "./pages/Dashboard";
import LogicForm from "./pages/LogicForm";
import MathForm from "./pages/MathForm";
import PortugueseForm from "./pages/PortugueseForm";
import NotFound from "./pages/NotFound";
import PrivateRoute from "./components/PrivateRoute";

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Login />} />
      <Route path="/register" element={<Register />} />
      <Route
        path="/home"
        element={
          <PrivateRoute>
            <Home />
          </PrivateRoute>
        }
      />
      <Route
        path="/dashboard"
        element={
          <PrivateRoute>
            <Dashboard />
          </PrivateRoute>
        }
      />
      <Route
        path="/forms/logic"
        element={
          <PrivateRoute>
            <LogicForm />
          </PrivateRoute>
        }
      />
      <Route
        path="/forms/math"
        element={
          <PrivateRoute>
            <MathForm />
          </PrivateRoute>
        }
      />
      <Route
        path="/forms/portuguese"
        element={
          <PrivateRoute>
            <PortugueseForm />
          </PrivateRoute>
        }
      />
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
};

export default App;
