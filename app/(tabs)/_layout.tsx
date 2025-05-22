import { Tabs } from "expo-router";

export default function TabsLayout() {
  return (
    <Tabs>
      <Tabs.Screen name="trips" options={{ title: "Trips" }} />
      <Tabs.Screen name="stays" options={{ title: "Stays" }} />
    </Tabs>
  );
}
