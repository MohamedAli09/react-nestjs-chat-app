import { API_URL } from "../constants/urls";

const useLogout = () => {
  const logout = async () => {
    const res = await fetch(`${API_URL}/auth/logout`, {
      method: "POST",
      credentials: "include",
    });
    if (!res.ok) {
      throw new Error("Logout failed");
    }
  };
  return { logout };
};
export default useLogout;
