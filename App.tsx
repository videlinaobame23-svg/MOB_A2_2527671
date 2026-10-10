import React from 'react';
import { StatusBar } from 'expo-status-bar';
import { ProfileProvider } from './src/context/ProfileContext';
import AppNavigator from './src/navigation/AppNavigator';

export default function App() {
  return (
    <ProfileProvider>
      <StatusBar style="dark" />
      <AppNavigator />
    </ProfileProvider>
  );
}