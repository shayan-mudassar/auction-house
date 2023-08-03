import React, { useEffect } from "react";
import { Grid } from "@mui/material";
import Registration from "../components/Login/Registration";
import LoginForm from "../components/Login/LoginForm";
import { motion } from "framer-motion";

function Login() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <motion.div
      className="loginME"
      initial={{ width: 0 }}
      animate={{ width: "90vw" }}
      exit={{ width: "80vw", transition: { duration: 0.1 } }}
    >
      <Grid container direction={"row"} spacing={1.35}>
        <Grid item>
          <LoginForm />
        </Grid>
        <Grid item>
          <Registration />
        </Grid>
      </Grid>
    </motion.div>
  );
}

export default Login;
