import React from 'react';
import { COLORS } from '../constants/theme';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { Text } from 'react-native';

import HomeScreen from '../screens/HomeScreen';
import SkillsScreen from '../screens/SkillsScreen';
import ProjectsScreen from '../screens/ProjectsScreen';
import ProfileEditorScreen from '../screens/ProfileEditorScreen';
import AboutScreen from '../screens/AboutScreen';
import ProjectDetailScreen from '../screens/ProjectDetailScreen';

import type { RootStackParamList, TabParamList } from './types';

const Tab = createBottomTabNavigator<TabParamList>();
const Stack = createNativeStackNavigator<RootStackParamList>();

const tabIcon = (label: string) => ({ color }: { color: string }) => (
  <Text style={{ color, fontSize: 18 }}>{label}</Text>
);

function MainTabs() {
  return (
    <Tab.Navigator
  screenOptions={{
    headerTitleAlign: 'center',
    headerStyle: { backgroundColor: COLORS.primary },
    headerTintColor: '#FFFFFF',
    headerTitleStyle: { fontWeight: 'bold' },
    tabBarActiveTintColor: COLORS.primary,
    tabBarInactiveTintColor: COLORS.textMuted,
    tabBarStyle: {
      backgroundColor: '#FFFFFF',
      borderTopColor: COLORS.border,
    },
  }}
>
      <Tab.Screen
        name="Home"
        component={HomeScreen}
        options={{ tabBarIcon: tabIcon('🏠') }}
      />
      <Tab.Screen
        name="Skills"
        component={SkillsScreen}
        options={{ tabBarIcon: tabIcon('📚') }}
      />
      <Tab.Screen
        name="Projects"
        component={ProjectsScreen}
        options={{ tabBarIcon: tabIcon('💼') }}
      />
      <Tab.Screen
        name="Editor"
        component={ProfileEditorScreen}
        options={{ tabBarIcon: tabIcon('✏️') }}
      />
      <Tab.Screen
        name="About"
        component={AboutScreen}
        options={{ tabBarIcon: tabIcon('ℹ️') }}
      />
    </Tab.Navigator>
  );
}

export default function AppNavigator() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="MainTabs"
          component={MainTabs}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="ProjectDetail"
          component={ProjectDetailScreen}
          options={{ title: 'Project Details' }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}