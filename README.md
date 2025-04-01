# Gurucool - React Native App

Gurucool is a React Native application designed to provide a seamless user experience with a modern UI. The app includes features such as navigation between screens, a customizable theme, and a user-friendly interface.

## Features

- **Home Screen**: Displays a personalized greeting based on the time of day and provides navigation tips.
- **Profile Screen**: Showcases user details like name, email, and bio.
- **Settings Screen**: Allows users to toggle between light and dark themes.
- **Themed Navigation**: Tab-based navigation with dynamic theming.

## Installation and Running the App Locally

1. Clone the repository:
   ```bash
   git clone <repository-url>
   cd Gurucool
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Start the development server:
   ```bash
   npm start
   ```

4. Run the app on an emulator or physical device:
   - For Android:
     ```bash
     npm run android
     ```
   - For iOS (requires macOS and Xcode):
     ```bash
     npm run ios
     ```

## Dependencies

The app uses the following libraries and frameworks:

- **React Native**: Core framework for building the app.
- **Expo Router**: For navigation and routing.
- **React Native Paper**: For UI components.
- **React Native Safe Area Context**: For safe area handling.
- **Expo Vector Icons**: For icons in the app.

## Building the APK

To build the APK for Android:

1. Install the Expo CLI globally if not already installed:
   ```bash
   npm install -g expo-cli
   ```

2. Build the APK:
   ```bash
   expo build:android
   ```

3. Follow the instructions provided by Expo to download the APK.

## Folder Structure

```
Gurucool/
├── layout.jsx       # Root layout with tab navigation
├── index.jsx        # Home screen
├── profile.jsx      # Profile screen
├── settings.jsx     # Settings screen
└── README.md        # Project documentation
```

## Additional Notes

- **Theming**: The app uses a `ThemeContext` to manage light and dark themes. Users can toggle between themes in the Settings screen.
- **Improvements**: The app includes a modern UI with Material Design principles, dynamic greetings based on the time of day, and a responsive layout.

## Author

- **Hritvik Soni**  
  React Native Developer  
  [sonihritvik77@gmail.com](mailto:sonihritvik77@gmail.com)

## License

This project is licensed under the MIT License.
