import { View, Text, StyleSheet, Image } from "react-native";
import React from "react";

export default function WeatherInfo({ currentWeather }) {
  const {
    main: { temp },
    name,
    weather: [details],
  } = currentWeather;

  const { icon, main, description } = details;
  const iconUrl = `http://openweathermap.org/img/wn/${icon}@4x.png`;
  console.log(iconUrl);

  return (
    <View style={styles.weatherInfo}>
      <Text>{name}</Text>
      <Image style={styles.weatherIcon} source={{ uri: iconUrl }} />
      <Text>{temp}</Text>
      <Text style={styles.weatherDesciption}>{description}</Text>
      <Text>{main}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  weatherInfo: {
    alignItems: "center",
  },
  weatherIcon: {
    width: 100,
    height: 100,
  },
  weatherDesciption: {
    textTransform: "capitalize",
  },
});
