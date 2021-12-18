import { NavLink } from "react-router-dom";
import { Trans } from "react-i18next";
import Divider from "@mui/material/Divider";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";

import { routes } from "../../routes";
import { IRoute } from "../../types";
import { styles } from "./styles";
import { useAuth } from "../../hooks/useAuth";

interface IProps {
  setMobileOpen: (status: boolean) => void;
}

const Tabs = ({ setMobileOpen }: IProps) => {
  const { auth } = useAuth();
  const { isLoggedIn } = auth;

  return (
    <>
      <Divider />

      <List>
        {Object.values(routes).map(
          ({
            key,
            path,
            title,
            navbar,
            showPublic,
            showPrivate,
            icon,
          }: IRoute) => {
            return (
              navbar &&
              ((isLoggedIn && showPrivate) || (!isLoggedIn && showPublic)) && (
                <ListItem button key={key}>
                  <ListItemIcon sx={styles.icon}>{icon}</ListItemIcon>

                  <ListItemText sx={styles.link}>
                    <NavLink
                      className={({ isActive }) =>
                        isActive ? "is-selected" : ""
                      }
                      end
                      to={path}
                      onClick={() => {
                        setMobileOpen(false);
                      }}
                    >
                      <Trans i18nKey={title} />
                    </NavLink>
                  </ListItemText>
                </ListItem>
              )
            );
          }
        )}
      </List>
    </>
  );
};

export default Tabs;
