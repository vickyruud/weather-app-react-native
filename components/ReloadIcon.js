import { View, Platform, StyleSheet } from "react-native";
import React from "react";
import { Ionicons } from "@expo/vector-icons";
import { colors } from "../utils/index";

const { PRIMARY_COLOR } = colors;

export default function ReloadIcon({ load }) {
  const reloadIconName = Platform.OS === "ios" ? "ios-refresh" : "md-refresh";

  return (
    <View>
      <Ionicons
        name={reloadIconName}
        size={24}
        style={styles.reloadIcon}
        color={PRIMARY_COLOR}
        onPress={load}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  reloadIcon: {
    position: "absolute",
    top: 60,
    right: 20,
  },
});
