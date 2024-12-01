import { Routes, Route } from "react-router-dom";
import { Suspense, lazy } from "react";
import Home from "../Home/Home";

// const Login = lazy(() => import("../Login/Login"));

const AppRouter = () => {
  return (
    <Suspense fallback={<div>로딩중...</div>}>
      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
    </Suspense>
  );
};

export default AppRouter;
