import React from 'react';
import { View, Text, Image, StyleSheet } from 'react-native';
import { COLORS, SPACING, RADIUS } from '../constants/theme';

interface Props {
  fullName: string;
  headline: string;
  imageUri: string | null;
  verificationCode: string;
}

export default function ProfileCard({
  fullName,
  headline,
  imageUri,
  verificationCode,
}: Props) {
  return (
    <View style={styles.card}>
      {imageUri ? (
        <Image source={{ uri: imageUri }} style={styles.image} />
      ) : (
        <View style={[styles.image, styles.placeholder]}>
          <Text style={styles.placeholderText}>{fullName.charAt(0)}</Text>
        </View>
      )}

      <Text style={styles.name}>My name is {fullName}.</Text>
      <Text style={styles.headline}>{headline}</Text>
      <Text style={styles.code}>Verification: {verificationCode}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  card: {
    backgroundColor: COLORS.card,
    padding: SPACING.lg,
    borderRadius: RADIUS.md,
    alignItems: 'center',
    borderWidth: 1,
    borderColor: COLORS.border,
  },
  image: {
    width: 120,
    height: 120,
    borderRadius: 60,
    marginBottom: SPACING.md,
  },
  placeholder: {
    backgroundColor: COLORS.primary,
    justifyContent: 'center',
    alignItems: 'center',
  },
  placeholderText: { color: '#fff', fontSize: 48, fontWeight: 'bold' },
  name: {
    fontSize: 22,
    fontWeight: 'bold',
    color: COLORS.text,
    textAlign: 'center',
    marginBottom: SPACING.sm,
  },
  headline: {
    fontSize: 16,
    color: COLORS.textMuted,
    textAlign: 'center',
    marginBottom: SPACING.sm,
  },
  code: {
    fontSize: 13,
    color: COLORS.primary,
    fontWeight: '600',
    marginTop: SPACING.sm,
  },
});