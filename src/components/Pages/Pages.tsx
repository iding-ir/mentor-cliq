import CssBaseline from "@mui/material/CssBaseline";
import { Routes, Route } from "react-router-dom";

import Layout from "../Layout/Layout";
import { routes } from "../../routes";
import { IRoute } from "../../types";
import { useAuth } from "../../hooks/useAuth";

const Pages = () => {
  const { auth } = useAuth();
  const { isLoggedIn } = auth;

  const renderRoutes = () => {
    return Object.values(routes).map(
      ({ key, path, element, showPrivate, showPublic }: IRoute) => {
        return showPrivate && !showPublic && !isLoggedIn ? null : (
          <Route key={key} path={path} element={element} />
        );
      }
    );
  };

  return (
    <>
      <CssBaseline />

      <Layout>
        <Routes>{renderRoutes()}</Routes>
      </Layout>
    </>
  );
};

export default Pages;
