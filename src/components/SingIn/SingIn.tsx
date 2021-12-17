import React, { useState } from "react";
import { Navigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import Paper from "@mui/material/Paper";
import { useTranslation } from "react-i18next";
import Box from "@mui/material/Box";

import { login } from "../../features/auth/slice";
import { useAuth } from "../../hooks/useAuth";
import { styles } from "./styles";

interface IProps {}

const SignIn = (props: IProps) => {
  const dispatch = useDispatch();
  const { t } = useTranslation();
  const { auth } = useAuth();

  const [username, setUsername] = useState<string>("");
  const [password, setPassword] = useState<string>("");

  const { isLoggedIn } = auth;

  return isLoggedIn ? (
    <Navigate to="/" />
  ) : (
    <Box sx={styles.Login}>
      <Paper sx={styles.wrapper}>
        <Box sx={styles.field}>
          <TextField
            required
            label={t("login.username")}
            variant="outlined"
            fullWidth={true}
            value={username}
            onChange={(event) => {
              setUsername(event.target.value);
            }}
          />
        </Box>

        <Box sx={styles.field}>
          <TextField
            type="password"
            required
            label={t("login.password")}
            variant="outlined"
            fullWidth={true}
            value={password}
            onChange={(event) => {
              setPassword(event.target.value);
            }}
          />
        </Box>

        <Box sx={styles.field}>
          <Button
            variant="outlined"
            fullWidth={true}
            onClick={() => {
              dispatch(login());
            }}
          >
            {t("login.button")}
          </Button>
        </Box>
      </Paper>
    </Box>
  );
};

export default SignIn;
