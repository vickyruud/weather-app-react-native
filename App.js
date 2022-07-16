import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import * as Location from "expo-location";
import { useEffect, useState } from "react";
import { WEATHER_API_KEY } from "@env";

export default function App() {
  const [errorMessage, setErrorMessage] = useState(null);

  async function load() {
    try {
      let { status } = await Location.requestForegroundPermissionsAsync();

      if (status !== "granted") {
        setErrorMessage("Location Permission is required!");
        return;
      }
      const location = await Location.getCurrentPositionAsync();
      const { latitude, longitude } = location.coords;
      alert(`Latitude: ${latitude}, Longitude: ${longitude}`);
    } catch (error) {}
  }

  useEffect(() => {
    load();
  }, []);

  return (
    <View style={styles.container}>
      <Text>Weather App</Text>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
