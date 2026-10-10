import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { COLORS, SPACING, RADIUS } from '../constants/theme';
import { Skill } from '../types';

export default function SkillCard({ skill }: { skill: Skill }) {
  const levelColor =
    skill.level === 'Advanced'
      ? COLORS.success
      : skill.level === 'Intermediate'
      ? COLORS.primary
      : COLORS.textMuted;

  return (
    <View style={styles.card}>
      <Text style={styles.name}>{skill.name}</Text>
      <View style={[styles.badge, { backgroundColor: levelColor }]}>
        <Text style={styles.badgeText}>{skill.level}</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  card: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    backgroundColor: COLORS.card,
    padding: SPACING.md,
    borderRadius: RADIUS.sm,
    borderWidth: 1,
    borderColor: COLORS.border,
    marginBottom: SPACING.sm,
  },
  name: { fontSize: 16, color: COLORS.text, fontWeight: '500' },
  badge: {
    paddingHorizontal: SPACING.sm,
    paddingVertical: 4,
    borderRadius: RADIUS.round,
  },
  badgeText: { color: '#fff', fontSize: 12, fontWeight: '600' },
});