"use client"
import { Provider } from "react-redux";
import HomePage from "./home/homepage";
import LoginForm from "./login/page";
import Steppr from "./bookappointment/page"
import store from "@/Services/store";
import 'bootstrap/dist/css/bootstrap.css';

export default function Home() {
  return (
    <Provider store={store}>
      <main>
        <div>
          {/* <Steppr/> */}
          {/* <LoginForm/> */}
          <HomePage />
        </div>
      </main>
    </Provider>
  );
}
