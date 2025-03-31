import React, { useContext } from "react";
import { View, StyleSheet } from "react-native";
import { SafeAreaProvider } from "react-native-safe-area-context";
import { StatusBar } from "react-native";
import { Text, Button, Card } from "react-native-paper"; 
import { ThemeContext } from "@/context/ThemeContext";
import { useRouter } from "expo-router";
import Octicons from '@expo/vector-icons/Octicons';

export default function HomeScreen() {
  const { theme } = useContext(ThemeContext);
  const getTime = new Date().getHours();
  const greeting =
    getTime < 12 ? "Good Morning," :
    getTime <= 15 ? "Good Afternoon," :
    getTime < 18 ? "Good Evening," : "Good Night,";
  const router = useRouter();
  const styles = createStyles(theme);

  return (
    <SafeAreaProvider style={styles.container}>
      <StatusBar backgroundColor="black" barStyle="light-content" />
      <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
        <Card style={styles.card}>
          <Card.Content>
            <Text variant="titleLarge" style= {{color: theme.text}}>{greeting}</Text>
            <Text variant="headlineSmall" style={{ marginTop: 10 ,color: theme.text}}>GuruCool</Text>
            <Button
              mode="contained"
              onPress={() => router.push("/profile")}
              style={{ marginTop: 20 }}
            >
              Go to Profile
            </Button>
          </Card.Content>
        </Card>
      </View>
    </SafeAreaProvider>
  );
}

function createStyles(theme) {
  return StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: theme.background,
    },
    card: {
      padding: 20,
      backgroundColor: theme.card,
      elevation: 3,
      borderRadius: 10,
    },
  });
}
