import HomeIcon from "@mui/icons-material/Home";
import LoginIcon from "@mui/icons-material/Login";
import ExitToAppIcon from "@mui/icons-material/ExitToApp";
import AccountBoxIcon from "@mui/icons-material/AccountBox";
import ListAltIcon from "@mui/icons-material/ListAlt";
import LogoutIcon from "@mui/icons-material/Logout";

import { IRoutes } from "../types";
import * as URLS from "../constants/urls";
import Home from "../components/Home/Home";
import SignIn from "../components/SingIn/SingIn";
import SignUp from "../components/SignUp/SignUp";
import SignOut from "../components/SignOut/SignOut";
import Profile from "../components/Profile/Profile";
import Search from "../components/Search/Search";
import Suggestions from "../components/Suggestions/Suggestions";

export const routes: IRoutes = {
  home: {
    key: "home",
    path: URLS.HOME,
    element: <Home />,
    navbar: true,
    title: "Navbar.home",
    showPrivate: true,
    showPublic: true,
    icon: <HomeIcon />,
  },
  signIn: {
    key: "signIn",
    path: URLS.SIGN_IN,
    element: <SignIn />,
    navbar: true,
    title: "Navbar.signIn",
    showPrivate: false,
    showPublic: true,
    icon: <LoginIcon />,
  },
  signUp: {
    key: "signUp",
    path: URLS.SIGN_UP,
    element: <SignUp />,
    navbar: true,
    title: "Navbar.signUp",
    showPrivate: false,
    showPublic: true,
    icon: <ExitToAppIcon />,
  },
  profile: {
    key: "profile",
    path: URLS.PROFILE,
    element: <Profile />,
    navbar: true,
    title: "Navbar.profile",
    showPrivate: true,
    showPublic: false,
    icon: <AccountBoxIcon />,
  },
  suggestions: {
    key: "suggestions",
    path: URLS.SUGGESTIONS,
    element: <Suggestions />,
    navbar: true,
    title: "Navbar.suggestions",
    showPrivate: true,
    showPublic: false,
    icon: <ListAltIcon />,
  },
  search: {
    key: "search",
    path: URLS.SEARCH,
    element: <Search />,
    navbar: true,
    title: "Navbar.search",
    showPrivate: true,
    showPublic: false,
    icon: <ListAltIcon />,
  },
  signOut: {
    key: "signOut",
    path: URLS.SIGN_OUT,
    element: <SignOut />,
    navbar: true,
    title: "Navbar.signOut",
    showPrivate: true,
    showPublic: false,
    icon: <LogoutIcon />,
  },
};
