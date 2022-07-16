import { View, StyleSheet, Platform } from "react-native";
import React from "react";
import { Picker } from "@react-native-community/picker";

export default function UnitsPicker({ units, setUnits }) {
  return (
    <View style={styles.unitsSystem}>
      <Picker
        selectedValue={units}
        onValueChange={(item) => setUnits(item)}
        mode="dropdown"
        itemStyle={{ fontSize: 12 }}
      >
        <Picker.Item label="C°" value="metric" />
        <Picker.Item label="F°" value="imperial" />
      </Picker>
    </View>
  );
}

const styles = StyleSheet.create({
  unitsSystem: {
    position: "absolute",
    ...Platform.select({
      ios: {
        top: -20,
      },
      android: {
        top: 100,
      },
    }),
    left: 150,
    height: 50,
    width: 100,
  },
});
