import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import { COLORS, SPACING, RADIUS } from '../constants/theme';
import { Project } from '../types';

interface Props {
  project: Project;
  onPress: () => void;
}

export default function ProjectCard({ project, onPress }: Props) {
  return (
    <View style={styles.card}>
      <Text style={styles.title}>{project.title}</Text>
      <Text style={styles.label}>Problem</Text>
      <Text style={styles.text}>{project.problem}</Text>
      <Text style={styles.label}>My Contribution</Text>
      <Text style={styles.text}>{project.contribution}</Text>
      <Text style={styles.label}>Technology</Text>
      <Text style={styles.text}>{project.technology}</Text>

      <TouchableOpacity style={styles.button} onPress={onPress}>
        <Text style={styles.buttonText}>View Details</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  card: {
    backgroundColor: COLORS.card,
    padding: SPACING.md,
    borderRadius: RADIUS.md,
    borderWidth: 1,
    borderColor: COLORS.border,
    marginBottom: SPACING.md,
  },
  title: {
    fontSize: 18,
    fontWeight: 'bold',
    color: COLORS.text,
    marginBottom: SPACING.sm,
  },
  label: {
    fontSize: 12,
    color: COLORS.textMuted,
    marginTop: SPACING.sm,
    fontWeight: '600',
  },
  text: { fontSize: 14, color: COLORS.text, marginTop: 2 },
  button: {
    backgroundColor: COLORS.primary,
    padding: SPACING.sm,
    borderRadius: RADIUS.sm,
    marginTop: SPACING.md,
    alignItems: 'center',
  },
  buttonText: { color: '#fff', fontWeight: '600' },
});