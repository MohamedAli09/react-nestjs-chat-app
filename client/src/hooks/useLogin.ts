import { useState } from "react";
import { API_URL } from "../constants/urls";
import client from "../constants/apollo-client";

interface LoginRequest {
  email: string;
  password: string;
}

const useLogin = () => {
  const [error, setError] = useState<string>("");

  const login = async (request: LoginRequest) => {
    try {
      const res = await fetch(`${API_URL}/auth/login`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(request),
        credentials: "include",
      });
      if (!res.ok) {
        if (res.status === 401) {
          setError("Invalid credentials");
        } else {
          setError("Something went wrong");
        }
        return;
      }
      setError("");
      await client.refetchQueries({ include: "active" });
    } catch (err) {
      // Network error (e.g., server down) will be caught here
      setError("Something went wrong");
    }
  };

  return { login, error };
};

export { useLogin };
