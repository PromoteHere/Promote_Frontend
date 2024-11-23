"use client"
import { Provider } from "react-redux";
import HomePage from "./home/homepage";
import LoginForm from "./login/page";
import Steppr from "./bookappointment/page"
import store from "@/Services/store";
import 'bootstrap/dist/css/bootstrap.css';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

export default function Home() {
  return (
    <Provider store={store}>
      <Router>
        <main>
          <Routes>
            <Route path="/" element={<LoginForm />} />
            <Route path="/home" element={<HomePage />} />
          </Routes>
        </main>
      </Router>
    </Provider>
  );
}
