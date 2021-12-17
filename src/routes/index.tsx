import { IRoutes } from "../types";
import SignIn from "../components/SingIn/SingIn";

export const routes: IRoutes = {
  signIn: {
    key: "signIn",
    path: "/",
    element: <SignIn />,
    navbar: true,
    title: "Navbar.signIn",
  },
};
