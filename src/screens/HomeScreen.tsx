import React from 'react';
import { ScrollView, View, Text, StyleSheet } from 'react-native';
import { useProfile } from '../context/ProfileContext';
import ProfileCard from '../components/ProfileCard';
import { COLORS, SPACING, RADIUS } from '../constants/theme';
import { VERIFICATION_CODE } from '../constants/data';

export default function HomeScreen() {
  const { profile } = useProfile();

  return (
    <ScrollView style={styles.screen} contentContainerStyle={styles.content}>
      <ProfileCard
        fullName={profile.fullName}
        headline={profile.headline}
        imageUri={profile.profileImageUri}
        verificationCode={VERIFICATION_CODE}
      />

      <View style={styles.section}>
        <Text style={styles.sectionTitle}>About Me</Text>
        <Text style={styles.body}>{profile.biography}</Text>
      </View>

      <View style={styles.section}>
        <Text style={styles.sectionTitle}>Primary Skill</Text>
        <Text style={styles.body}>{profile.primarySkill}</Text>
      </View>

      <View style={styles.section}>
        <Text style={styles.sectionTitle}>Availability</Text>
        <Text style={styles.body}>{profile.availability}</Text>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  screen: { flex: 1, backgroundColor: COLORS.background },
  content: { padding: SPACING.md },
  section: {
    marginTop: SPACING.lg,
    backgroundColor: COLORS.card,
    padding: SPACING.md,
    borderRadius: RADIUS.md,
    borderWidth: 1,
    borderColor: COLORS.border,
  },
  sectionTitle: {
    fontSize: 16,
    fontWeight: 'bold',
    color: COLORS.text,
    marginBottom: SPACING.sm,
  },
  body: { fontSize: 15, color: COLORS.text, lineHeight: 22 },
});