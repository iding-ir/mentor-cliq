import { IRoutes } from "../types";
import * as URLS from "../constants/urls";
import Home from "../components/Home/Home";
import SignIn from "../components/SingIn/SingIn";
import SignUp from "../components/SignUp/SignUp";
import SignOut from "../components/SignOut/SignOut";
import Profile from "../components/Profile/Profile";

export const routes: IRoutes = {
  home: {
    key: "home",
    path: URLS.HOME,
    element: <Home />,
    navbar: true,
    title: "Navbar.home",
    showPrivate: true,
    showPublic: true,
  },
  signIn: {
    key: "signIn",
    path: URLS.SIGN_IN,
    element: <SignIn />,
    navbar: true,
    title: "Navbar.signIn",
    showPrivate: false,
    showPublic: true,
  },
  signUp: {
    key: "signUp",
    path: URLS.SIGN_UP,
    element: <SignUp />,
    navbar: true,
    title: "Navbar.signUp",
    showPrivate: false,
    showPublic: true,
  },
  signOut: {
    key: "signOut",
    path: URLS.SIGN_OUT,
    element: <SignOut />,
    navbar: true,
    title: "Navbar.signOut",
    showPrivate: true,
    showPublic: false,
  },
  profile: {
    key: "profile",
    path: URLS.PROFILE,
    element: <Profile />,
    navbar: true,
    title: "Navbar.profile",
    showPrivate: true,
    showPublic: false,
  },
};
