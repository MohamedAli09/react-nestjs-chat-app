import { Button, Stack, TextField } from "@mui/material";
import React, { useState } from "react";

interface AuthProps {
  submitlabel: string;
  onSubmit: (credential: { email: string; password: string }) => Promise<void>;
  children: React.ReactNode;
}

const Auth = ({ submitlabel, onSubmit, children }: AuthProps) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
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
      />
      <TextField
        type="password"
        label="Password"
        variant="outlined"
        value={password}
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
