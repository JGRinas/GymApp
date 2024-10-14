import { Tabs } from "expo-router";
import {
  AppleIcon,
  DummbellIcon,
  HomeIcon,
  UserIcon,
  SearchIcon,
} from "@assets/icons";
import { useAppSelector } from "@config/store";

export default function AppLayout() {
  const profile = useAppSelector((state) => state.AuthSlice.profile);
  return (
    <Tabs
      screenOptions={{
        headerShown: false,
        tabBarStyle: {
          backgroundColor: "#000",
          borderTopWidth: 0,
        },
        tabBarActiveTintColor: "#d2ff00",
        tabBarInactiveTintColor: "#fff",
        tabBarLabelStyle: {
          fontSize: 12,
          fontWeight: "600",
        },
      }}
    >
      <Tabs.Screen
        name="nutrition"
        options={{
          tabBarLabel: "Nutrición",
          tabBarIcon: ({ size }) => <AppleIcon width={size} height={size} />,
        }}
      />
      <Tabs.Screen
        name="routine"
        options={{
          tabBarLabel: profile?.role === "coach" ? "Planes" : "Rutina",
          tabBarIcon: ({ size }) => <DummbellIcon width={size} height={size} />,
        }}
      />
      <Tabs.Screen
        name="home"
        options={{
          tabBarLabel: "Inicio",
          tabBarIcon: ({ size }) => <HomeIcon width={size} height={size} />,
        }}
      />
      <Tabs.Screen
        name="profile"
        options={{
          tabBarLabel: profile?.role === "coach" ? "Alumnos" : "Perfil",
          tabBarIcon: ({ size }) => <UserIcon width={size} height={size} />,
        }}
      />
      <Tabs.Screen
        name="search"
        options={{
          tabBarLabel: "Buscar",
          tabBarIcon: ({ size }) => <SearchIcon width={size} height={size} />,
        }}
      />
    </Tabs>
  );
}
