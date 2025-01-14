
import { lazy, Suspense } from 'react'
import { BrowserRouter, Route, Routes } from "react-router"
import SkeletonLoader from '../components/skeleton-loader';


const HomeComponent = lazy(() => import("../pages/home/home"));
const ResultsComponent = lazy(() => import("../pages/results"));
const PageNotFoundComponent = lazy(() => import("../pages/page-not-found"));
const SignupComponent = lazy(() => import("../auth/signup-view"));
const SigninComponent = lazy(() => import("../auth/signin-view"));

// const rootpath = "/";
const homepath = "/home";
const resultspath = "/results";
const pagenotfoundpath = "*";
const signuppath = "auth/signup";
const signinpath = "auth/signin";


const AllRoutesComponent = () => {
  return (
    <Suspense fallback={<SkeletonLoader />}>
      <BrowserRouter>
        <Routes>
          {/* <Route path={rootpath} element={<Outlet />} /> */}
          <Route index path={homepath} element={<HomeComponent/>} />
          <Route path={resultspath} element={<ResultsComponent/>} />
          <Route path={signuppath} element={<SignupComponent/>} />
          <Route path={signinpath} element={<SigninComponent/>} />
          <Route path={pagenotfoundpath} element={<PageNotFoundComponent/>} />
        </Routes>
      </BrowserRouter>
    </Suspense>
  );
}


export default AllRoutesComponent;