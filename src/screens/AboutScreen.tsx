import React from 'react';
import { ScrollView, View, Text, StyleSheet } from 'react-native';
import { COLORS, SPACING, RADIUS } from '../constants/theme';
import {
  APP_NAME,
  STUDENT_FULL_NAME,
  REGISTRATION_NUMBER,
  VERIFICATION_CODE,
} from '../constants/data';

const VERSION = '1.0.0';

export default function AboutScreen() {
  return (
    <ScrollView style={styles.screen} contentContainerStyle={styles.content}>
      <View style={styles.card}>
        <Text style={styles.heading}>About This App</Text>

        <Row label="App Name" value={APP_NAME} />
        <Row label="Student Name" value={STUDENT_FULL_NAME} />
        <Row label="Registration Number" value={REGISTRATION_NUMBER} />
        <Row label="Verification Code" value={VERIFICATION_CODE} />
        <Row label="Version" value={VERSION} />

        <Text style={styles.statementLabel}>Data-Use Statement</Text>
        <Text style={styles.statement}>
          This application stores all profile information locally on your
          device using AsyncStorage. No personal data is transmitted to any
          server. Photos selected via camera or gallery remain on your device.
        </Text>
      </View>
    </ScrollView>
  );
}

function Row({ label, value }: { label: string; value: string }) {
  return (
    <View style={styles.row}>
      <Text style={styles.rowLabel}>{label}</Text>
      <Text style={styles.rowValue}>{value}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  screen: { flex: 1, backgroundColor: COLORS.background },
  content: { padding: SPACING.md },
  card: {
    backgroundColor: COLORS.card,
    padding: SPACING.md,
    borderRadius: RADIUS.md,
    borderWidth: 1,
    borderColor: COLORS.border,
  },
  heading: {
    fontSize: 20,
    fontWeight: 'bold',
    color: COLORS.text,
    marginBottom: SPACING.md,
  },
  row: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingVertical: 8,
    borderBottomWidth: 1,
    borderBottomColor: COLORS.border,
  },
  rowLabel: { color: COLORS.textMuted, fontSize: 14 },
  rowValue: { color: COLORS.text, fontSize: 14, fontWeight: '600' },
  statementLabel: {
    marginTop: SPACING.lg,
    fontSize: 14,
    fontWeight: '700',
    color: COLORS.text,
  },
  statement: {
    marginTop: SPACING.sm,
    fontSize: 14,
    lineHeight: 20,
    color: COLORS.text,
  },
});