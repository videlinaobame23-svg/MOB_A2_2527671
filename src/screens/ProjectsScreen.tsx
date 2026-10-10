import React from 'react';
import { ScrollView, Text, StyleSheet } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import type { NativeStackNavigationProp } from '@react-navigation/native-stack';
import ProjectCard from '../components/ProjectCard';
import { PROJECTS } from '../constants/data';
import type { RootStackParamList } from '../navigation/types';
import { COLORS, SPACING } from '../constants/theme';

type Nav = NativeStackNavigationProp<RootStackParamList>;

export default function ProjectsScreen() {
  const navigation = useNavigation<Nav>();

  return (
    <ScrollView style={styles.screen} contentContainerStyle={styles.content}>
      <Text style={styles.heading}>My Projects</Text>
      {PROJECTS.map((project) => (
        <ProjectCard
          key={project.id}
          project={project}
          onPress={() =>
            navigation.navigate('ProjectDetail', { projectId: project.id })
          }
        />
      ))}
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  screen: { flex: 1, backgroundColor: COLORS.background },
  content: { padding: SPACING.md },
  heading: {
    fontSize: 20,
    fontWeight: 'bold',
    color: COLORS.text,
    marginBottom: SPACING.md,
  },
});