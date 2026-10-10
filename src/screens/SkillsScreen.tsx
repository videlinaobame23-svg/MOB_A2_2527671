import React from 'react';
import { ScrollView, Text, StyleSheet } from 'react-native';
import SkillCard from '../components/SkillCard';
import EducationCard from '../components/EducationCard';
import { SKILLS, EDUCATION } from '../constants/data';
import { COLORS, SPACING } from '../constants/theme';

export default function SkillsScreen() {
  return (
    <ScrollView style={styles.screen} contentContainerStyle={styles.content}>
      <Text style={styles.heading}>Skills</Text>
      {SKILLS.map((skill) => (
        <SkillCard key={skill.name} skill={skill} />
      ))}

      <Text style={[styles.heading, { marginTop: SPACING.lg }]}>Education</Text>
      {EDUCATION.map((item, i) => (
        <EducationCard key={i} item={item} />
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