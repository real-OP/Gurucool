import React, { useContext } from "react";
import { View, StyleSheet } from "react-native";
import { Text, Card } from "react-native-paper"; 
import { ThemeContext } from "@/context/ThemeContext";

export default function ProfileScreen() {
  const { theme } = useContext(ThemeContext);
  const styles = createStyles(theme);

  return (
    <View style={styles.container}>
      <Card style={styles.card}>
        <Card.Content>
          <Text style= {{color: theme.text}} variant="headlineMedium">Hritvik Soni</Text>
          <Text variant="bodyLarge" style={{ color: theme.text, marginTop: 5 }}>
            sonihritvik77@gmail.com
          </Text>
          <Text variant="bodyMedium" style={styles.bio}>
            React Native Developer
          </Text>
        </Card.Content>
      </Card>
    </View>
  );
}

function createStyles(theme) {
  return StyleSheet.create({
    container: {
      flex: 1,
      justifyContent: "center",
      alignItems: "center",
      backgroundColor: theme.background,
    },
    card: {
      padding: 20,
      backgroundColor: theme.card,
      elevation: 3,
      borderRadius: 10,
    },
    bio: {
      fontSize: 16,
      color: "gray",
      marginTop: 5,
    },
  });
}
