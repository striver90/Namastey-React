import React, { lazy, Suspense } from "react";
import ReactDOM from "react-dom/client";
import Header from "./components/Header";
import Body from "./components/Body";
import Footer from "./components/Footer";
import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom";
//import About from "./components/About";
import Error from "./components/Error";
import Contact from "./components/Contact";
import ResturantMenu from "./components/ResturantMenu";
import Profile from "./components/Profile";
import Shimmer from "./components/ShimmerUI";
//import Instamart from "./components/Instamart";
const Instamart = lazy(() => import("./components/Instamart"));
const About = lazy(() => import("./components/About"));

// Chunking
// Dynamic import
// Dynamic bundling
// Code splitting
// Lazy Loading
// On Demand Loading

{
  /* When you loads on demand (on lading demand), react will try to load the component which actually at this is not there, 
    so reacts suspends it from loading.
    
    // Upon On Demand Loadin -> upon render -> react suspend loading

    How to handle it??
    Will use Suspense
*/
  // Important ::  Dont ever try to lazy load a component inside a component
}

const AppLayout = () => {
  //const Instamart = lazy(() => import("./components/Instamart"));  // Dont ever try to lazy load a component inside a component
  return (
    <div>
      <Header />
      <Outlet />
      <Footer />
    </div>
  );
};

const appRouter = createBrowserRouter([
  {
    path: "/",
    element: <AppLayout />,
    errorElement: <Error />,
    children: [
      {
        path: "/",
        element: <Body />,
      },
      {
        path: "about", // parentPath +{path} => localhost:1234/about
        element: (
          <Suspense fallback={<h1>Loading!!</h1>}>
            <About />
          </Suspense>
        ),
        children: [
          {
            path: "profile", //parentPath +{path} => localhost:1234/about/profile
            element: <Profile />,
          },
        ],
      },
      {
        path: "/contact",
        element: <Contact />,
      },
      {
        path: "/instamart",
        element: (
          <Suspense fallback={<Shimmer />}>
            <Instamart />
          </Suspense>
        ),
      },
      {
        path: "/resturants/:resid",
        element: <ResturantMenu />,
      },
    ],
  },
]);
const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<RouterProvider router={appRouter} />);
