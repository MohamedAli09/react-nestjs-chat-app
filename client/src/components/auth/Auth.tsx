import { Button, Stack, TextField } from "@mui/material";
import React, { useEffect, useState } from "react";
import useGetMe from "../../hooks/useGetMe";
import { useNavigate } from "react-router-dom";

interface AuthProps {
  submitlabel: string;
  onSubmit: (credential: { email: string; password: string }) => Promise<void>;
  children: React.ReactNode;
  error?: string;
}

const Auth = ({ submitlabel, onSubmit, children, error }: AuthProps) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const { data } = useGetMe();
  const navigate = useNavigate();
  useEffect(() => {
    if (data) {
      navigate("/");
    }
  }, [data, navigate]);
  return (
    <Stack
      spacing={3}
      sx={{
        height: "100vh",
        maxWidth: { xs: "70%", sm: "30%" },
        margin: "0 auto",
        justifyContent: "center",
      }}
    >
      <TextField
        type="email"
        label="Email"
        variant="outlined"
        value={email}
        onChange={(event) => setEmail(event.target.value)}
        error={!!error}
        helperText={error}
      />
      <TextField
        type="password"
        label="Password"
        variant="outlined"
        value={password}
        error={!!error}
        helperText={error}
        onChange={(event) => setPassword(event.target.value)}
      />
      <Button variant="contained" onClick={() => onSubmit({ email, password })}>
        {submitlabel}
      </Button>
      {children}
    </Stack>
  );
};

export default Auth;
