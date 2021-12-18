import HomeIcon from "@mui/icons-material/Home";
import SignInIcon from "@mui/icons-material/Login";
import SignUpIcon from "@mui/icons-material/ExitToApp";
import ProfileIcon from "@mui/icons-material/AccountBox";
import SuggestionsIcon from "@mui/icons-material/Ballot";
import SearchIcon from "@mui/icons-material/ListAlt";
import SignOutIcon from "@mui/icons-material/Logout";

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
    icon: <SignInIcon />,
  },
  signUp: {
    key: "signUp",
    path: URLS.SIGN_UP,
    element: <SignUp />,
    navbar: true,
    title: "Navbar.signUp",
    showPrivate: false,
    showPublic: true,
    icon: <SignUpIcon />,
  },
  profile: {
    key: "profile",
    path: URLS.PROFILE,
    element: <Profile />,
    navbar: true,
    title: "Navbar.profile",
    showPrivate: true,
    showPublic: false,
    icon: <ProfileIcon />,
  },
  suggestions: {
    key: "suggestions",
    path: URLS.SUGGESTIONS,
    element: <Suggestions />,
    navbar: true,
    title: "Navbar.suggestions",
    showPrivate: true,
    showPublic: false,
    icon: <SuggestionsIcon />,
  },
  search: {
    key: "search",
    path: URLS.SEARCH,
    element: <Search />,
    navbar: true,
    title: "Navbar.search",
    showPrivate: true,
    showPublic: false,
    icon: <SearchIcon />,
  },
  signOut: {
    key: "signOut",
    path: URLS.SIGN_OUT,
    element: <SignOut />,
    navbar: true,
    title: "Navbar.signOut",
    showPrivate: true,
    showPublic: false,
    icon: <SignOutIcon />,
  },
};
