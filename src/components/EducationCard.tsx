import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { COLORS, SPACING, RADIUS } from '../constants/theme';
import { Education } from '../types';

export default function EducationCard({ item }: { item: Education }) {
  return (
    <View style={styles.card}>
      <Text style={styles.institution}>{item.institution}</Text>
      <Text style={styles.qualification}>{item.qualification}</Text>
      <Text style={styles.year}>{item.year}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  card: {
    backgroundColor: COLORS.card,
    padding: SPACING.md,
    borderRadius: RADIUS.sm,
    borderWidth: 1,
    borderColor: COLORS.border,
    marginBottom: SPACING.sm,
    borderLeftWidth: 4,
    borderLeftColor: COLORS.primary,
  },
  institution: { fontSize: 16, fontWeight: 'bold', color: COLORS.text },
  qualification: { fontSize: 14, color: COLORS.textMuted, marginTop: 2 },
  year: {
    fontSize: 13,
    color: COLORS.primary,
    marginTop: 4,
    fontWeight: '600',
  },
});