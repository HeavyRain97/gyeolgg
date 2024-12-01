import { Routes, Route } from "react-router-dom";
import { Suspense, lazy } from "react";
import Home from "../Home/Home";
// import Login from "../Login/Login";
// import SignUp from "../SignUp/SignUp";

const Login = lazy(() => import("../Login/Login"));
const SignUp = lazy(() => import("../SignUp/SignUp"));

const AppRouter = () => {
  return (
    <Suspense fallback={<div>로딩중...</div>}>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<SignUp />} />
      </Routes>
    </Suspense>
  );
};

export default AppRouter;
