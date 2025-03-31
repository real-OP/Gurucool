import React, { useContext } from "react";
import { View, Text, Pressable } from "react-native";
import Feather from "@expo/vector-icons/Feather";
import { ThemeContext } from "@/context/ThemeContext";
import { Card } from "react-native-paper";

export default function Settings() {
  const { theme, colorScheme, setColorScheme } = useContext(ThemeContext);

  return (
    <View style={{ flex: 1, justifyContent: "center", alignItems: "center", backgroundColor: theme.background }}>
      <Card style={{ backgroundColor: theme.card, padding: 20, borderRadius: 10 }}>
        <Text style={{ color: theme.text, fontSize: 16, marginBottom: 10 }}>Choose Theme:</Text>
        <Pressable
        onPress={() => setColorScheme(colorScheme === "dark" ? "light" : "dark")}
        style = {{marginHorizontal: 'auto'}}
        >
          <Feather name={colorScheme === "dark" ? "moon" : "sun"} size={30} color={theme.text} />
        </Pressable>
      </Card>
    </View>
  );
}