import { Button } from "@mui/material";
import { useAuth } from "../../firebase/hooks/Auth";

export default function LogoutBtn() {
  const { Logout } = useAuth();
  return (
    <Button
      sx={{ width: 200, marginTop: 2 }}
      onClick={() => {
        Logout();
      }}
    >
      Logout
    </Button>
  );
}
