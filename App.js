import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View, ActivityIndicator } from "react-native";
import * as Location from "expo-location";
import { useEffect, useState } from "react";
import { WEATHER_API_KEY } from "@env";
import WeatherInfo from "./components/WeatherInfo";
import UnitsPicker from "./components/UnitsPicker";
import { colors } from "./utils/index";
import ReloadIcon from "./components/ReloadIcon";
import WeatherDetails from "./components/WeatherDetails";

const { PRIMARY_COLOR } = colors;

const BASE_WEATHER_URL = "https://api.openweathermap.org/data/2.5/weather?";

export default function App() {
  const [errorMessage, setErrorMessage] = useState(null);
  const [currentWeather, setCurrentWeather] = useState(null);
  const [units, setUnits] = useState("metric");

  async function load() {
    setCurrentWeather(null);
    setErrorMessage(null);
    try {
      let { status } = await Location.requestForegroundPermissionsAsync();

      if (status !== "granted") {
        setErrorMessage("Location Permission is required!");
        return;
      }
      const location = await Location.getCurrentPositionAsync();

      const { latitude, longitude } = location.coords;

      const weatherUrl = `${BASE_WEATHER_URL}lat=${latitude}&lon=${longitude}&appid=${WEATHER_API_KEY}&units=${units}`;

      const response = await fetch(weatherUrl);

      const result = await response.json();

      if (response.ok) {
        setCurrentWeather(result);
      } else {
        setErrorMessage(result.message);
      }
    } catch (error) {
      setErrorMessage(error.message);
    }
  }

  useEffect(() => {
    load();
  }, [units]);

  if (currentWeather) {
    return (
      <View style={styles.container}>
        <StatusBar style="auto" />
        <View style={styles.main}>
          <UnitsPicker units={units} setUnits={setUnits} />
          <ReloadIcon load={load} />
          <WeatherInfo currentWeather={currentWeather} />
        </View>
        <WeatherDetails currentWeather={currentWeather} unitsSystem={units} />
      </View>
    );
  } else if (errorMessage) {
    return (
      <View style={styles.container}>
        <Text>{errorMessage}</Text>
        <StatusBar style="auto" />
      </View>
    );
  } else {
    return (
      <View style={styles.container}>
        <ActivityIndicator size="large" color={PRIMARY_COLOR} />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,

    justifyContent: "center",
  },
  main: {
    justifyContent: "center",
    flex: 1,
  },
});
