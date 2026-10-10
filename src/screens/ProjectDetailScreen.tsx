import React from 'react';
import { ScrollView, View, Text, StyleSheet } from 'react-native';
import { useRoute, type RouteProp } from '@react-navigation/native';
import type { RootStackParamList } from '../navigation/types';
import { PROJECTS } from '../constants/data';
import { COLORS, SPACING, RADIUS } from '../constants/theme';

type DetailRoute = RouteProp<RootStackParamList, 'ProjectDetail'>;

export default function ProjectDetailScreen() {
  const route = useRoute<DetailRoute>();
  const { projectId } = route.params;
  const project = PROJECTS.find((p) => p.id === projectId);

  if (!project) {
    return (
      <View style={styles.screen}>
        <Text style={styles.error}>Project not found.</Text>
      </View>
    );
  }

  return (
    <ScrollView style={styles.screen} contentContainerStyle={styles.content}>
      <Text style={styles.title}>{project.title}</Text>

      <View style={styles.section}>
        <Text style={styles.label}>Problem</Text>
        <Text style={styles.body}>{project.problem}</Text>
      </View>

      <View style={styles.section}>
        <Text style={styles.label}>My Contribution</Text>
        <Text style={styles.body}>{project.contribution}</Text>
      </View>

      <View style={styles.section}>
        <Text style={styles.label}>Technology Used</Text>
        <Text style={styles.body}>{project.technology}</Text>
      </View>

      <View style={styles.section}>
        <Text style={styles.label}>Description</Text>
        <Text style={styles.body}>{project.description}</Text>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  screen: { flex: 1, backgroundColor: COLORS.background },
  content: { padding: SPACING.md },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    color: COLORS.text,
    marginBottom: SPACING.md,
  },
  section: {
    backgroundColor: COLORS.card,
    padding: SPACING.md,
    borderRadius: RADIUS.sm,
    borderWidth: 1,
    borderColor: COLORS.border,
    marginBottom: SPACING.md,
  },
  label: {
    fontSize: 12,
    fontWeight: '700',
    color: COLORS.primary,
    marginBottom: 4,
  },
  body: { fontSize: 15, color: COLORS.text, lineHeight: 22 },
  error: { padding: SPACING.lg, color: COLORS.error },
});