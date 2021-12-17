import { IRoutes } from "../types";
import Home from "../components/Home/Home";
import SignIn from "../components/SingIn/SingIn";
import SignUp from "../components/SignUp/SignUp";
import SignOut from "../components/SignOut/SignOut";

export const routes: IRoutes = {
  home: {
    key: "home",
    path: "/",
    element: <Home />,
    navbar: true,
    title: "Navbar.home",
    showPrivate: true,
    showPublic: true,
  },
  signIn: {
    key: "signIn",
    path: "/sign-in",
    element: <SignIn />,
    navbar: true,
    title: "Navbar.signIn",
    showPrivate: false,
    showPublic: true,
  },
  signUp: {
    key: "signUp",
    path: "/sign-up",
    element: <SignUp />,
    navbar: true,
    title: "Navbar.signUp",
    showPrivate: false,
    showPublic: true,
  },
  signOut: {
    key: "signOut",
    path: "/sign-out",
    element: <SignOut />,
    navbar: true,
    title: "Navbar.signOut",
    showPrivate: true,
    showPublic: false,
  },
};
