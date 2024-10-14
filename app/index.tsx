import { useAppSelector } from "@config/store";
import { Redirect } from "expo-router";

function Index() {
  const isLogged = useAppSelector((state) => state.AuthSlice.isLogged);

  if (isLogged) return <Redirect href="/(app)/home" />;
  return <Redirect href="/(on-boarding)" />;
}

export default Index;
