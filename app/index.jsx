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
    getTime < 12 ? "Good Morning, Have A Great Day!" :
    getTime <= 15 ? "Good Afternoon, Hope You're Doing Well!" :
    getTime < 18 ? "Good Evening, Time To Wrap Up" : "It's Almost Night, How Was Your Day?";
  
  const router = useRouter();
  const styles = createStyles(theme);

  return (
    <SafeAreaProvider style={styles.container}>
      <StatusBar backgroundColor="black" barStyle="light-content" />
      <View style={styles.mainContainer}>
        <Card style={styles.card}>
          <Card.Content>
            <Text variant="headlineMedium" style={{ color: theme.text, marginBottom: 20 }}>
             Welcome To MyApp!
            </Text>
 
            <Text variant="bodyLarge" style={{ color: theme.text, marginBottom: 30 }}>
              {greeting}
            </Text>
            
            <Text variant="bodyMedium" style={{ color: theme.text, marginBottom: 15 }}>
              Explore our app:
            </Text>
            <Text variant="bodyMedium" style={{ color: theme.text, marginBottom: 10 }}>
              - <Text style={{ textDecorationLine:'underline',fontWeight: 'bold',color:theme.lightblue}}>Home :</Text> View this screen and navigate the app with ease.
            </Text>
            <Text variant="bodyMedium" style={{ color: theme.text, marginBottom: 10 }}>
              - <Text style={{ textDecorationLine:'underline',fontWeight: 'bold',color:theme.lightblue }}>Profile :</Text> Check out your contact details and personalize your profile.
            </Text>
            <Text variant="bodyMedium" style={{ color: theme.text, marginBottom: 10 }}>
              - <Text style={{ textDecorationLine:'underline',fontWeight: 'bold',color:theme.lightblue }}>Settings :</Text> Customize your experience, including toggling between light and dark themes.
            </Text>



            <Button
              mode="contained"
              onPress={() => router.push("/profile")}
              style={styles.button}
              icon={({ size, color }) => (
                <Octicons name="person" size={size} color={color} />
              )}
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
    mainContainer: {
      flex: 1,
      justifyContent: "center",
      alignItems: "center",
      paddingHorizontal: 20,
    },
    card: {
      padding: 20,
      backgroundColor: theme.card,
      elevation: 5,  // Slightly increase elevation for depth
      borderRadius: 10,
      shadowColor: '#000',
      shadowOffset: { width: 0, height: 4 },
      shadowOpacity: 0.1,
      shadowRadius: 8,
    },
    button: {
      marginTop: 20,
      paddingVertical: 8,
    },
  });
}
