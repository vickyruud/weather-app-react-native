import { View, Platform, StyleSheet, Pressable } from "react-native";
import React from "react";
import { Ionicons } from "@expo/vector-icons";
import { colors } from "../utils/index";

const { PRIMARY_COLOR } = colors;

export default function ReloadIcon({ load }) {
  const reloadIconName = Platform.OS === "ios" ? "ios-refresh" : "md-refresh";

  return (
    <View>
      <Pressable onPress={load}>
        <Ionicons
          name={reloadIconName}
          size={24}
          style={styles.reloadIcon}
          color={PRIMARY_COLOR}
        />
      </Pressable>
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
