import React, { useState } from 'react';
import {
  ScrollView,
  View,
  Text,
  TouchableOpacity,
  Image,
  StyleSheet,
  Alert,
} from 'react-native';
import * as ImagePicker from 'expo-image-picker';
import ValidatedInput from '../components/ValidatedInput';
import { useProfile } from '../context/ProfileContext';
import { COLORS, SPACING, RADIUS } from '../constants/theme';

const AVAILABILITY_OPTIONS = [
  'Available for internships',
  'Available for freelance',
  'Not available',
];

export default function ProfileEditorScreen() {
  const { profile, updateProfile, resetProfile } = useProfile();

  const [headline, setHeadline] = useState(profile.headline);
  const [biography, setBiography] = useState(profile.biography);
  const [primarySkill, setPrimarySkill] = useState(profile.primarySkill);
  const [availability, setAvailability] = useState(profile.availability);

  const [errors, setErrors] = useState<Record<string, string>>({});

  const validate = () => {
    const e: Record<string, string> = {};

    // Rule 1: Headline
    if (!headline.trim()) e.headline = 'Headline is required.';
    else if (headline.trim().length < 5)
      e.headline = 'Headline must be at least 5 characters.';

    // Rule 2: Biography
    if (!biography.trim()) e.biography = 'Biography is required.';
    else if (biography.trim().length < 20)
      e.biography = 'Biography must be at least 20 characters.';

    // Rule 3: Primary skill
    if (!primarySkill.trim()) e.primarySkill = 'Primary skill is required.';
    else if (/^\d+$/.test(primarySkill.trim()))
      e.primarySkill = 'Primary skill cannot be only numbers.';

    setErrors(e);
    return Object.keys(e).length === 0;
  };

  const onSave = async () => {
    if (!validate()) return;
    await updateProfile({ headline, biography, primarySkill, availability });
    Alert.alert('Saved', 'Your profile has been updated.');
  };

  const onReset = () => {
    Alert.alert('Reset Profile', 'This will clear all your saved data.', [
      { text: 'Cancel', style: 'cancel' },
      {
        text: 'Reset',
        style: 'destructive',
        onPress: async () => {
          await resetProfile();
          setHeadline('');
          setBiography('');
          setPrimarySkill('');
          setAvailability(AVAILABILITY_OPTIONS[0]);
          setErrors({});
        },
      },
    ]);
  };

  const pickImage = async (source: 'camera' | 'gallery') => {
    try {
      if (source === 'camera') {
        const { status } = await ImagePicker.requestCameraPermissionsAsync();
        if (status !== 'granted') {
          Alert.alert('Permission Denied', 'Camera permission is required.');
          return;
        }
      } else {
        const { status } =
          await ImagePicker.requestMediaLibraryPermissionsAsync();
        if (status !== 'granted') {
          Alert.alert('Permission Denied', 'Gallery permission is required.');
          return;
        }
      }

      const result =
        source === 'camera'
          ? await ImagePicker.launchCameraAsync({
              allowsEditing: true,
              aspect: [1, 1],
              quality: 0.7,
            })
          : await ImagePicker.launchImageLibraryAsync({
              allowsEditing: true,
              aspect: [1, 1],
              quality: 0.7,
            });

      if (result.canceled) return;
      await updateProfile({ profileImageUri: result.assets[0].uri });
    } catch (e) {
      Alert.alert('Error', 'Could not complete the action.');
    }
  };

  const removeImage = async () => {
    await updateProfile({ profileImageUri: null });
  };

  return (
    <ScrollView style={styles.screen} contentContainerStyle={styles.content}>
      <Text style={styles.heading}>Edit Profile</Text>

      <View style={styles.imageSection}>
        {profile.profileImageUri ? (
          <Image
            source={{ uri: profile.profileImageUri }}
            style={styles.preview}
          />
        ) : (
          <View style={[styles.preview, styles.placeholder]}>
            <Text style={styles.placeholderText}>No Image</Text>
          </View>
        )}
        <View style={styles.imageButtons}>
          <TouchableOpacity
            style={styles.smallBtn}
            onPress={() => pickImage('camera')}
          >
            <Text style={styles.smallBtnText}>Camera</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.smallBtn}
            onPress={() => pickImage('gallery')}
          >
            <Text style={styles.smallBtnText}>Gallery</Text>
          </TouchableOpacity>
          {profile.profileImageUri && (
            <TouchableOpacity
              style={[styles.smallBtn, styles.removeBtn]}
              onPress={removeImage}
            >
              <Text style={styles.smallBtnText}>Remove</Text>
            </TouchableOpacity>
          )}
        </View>
      </View>

      <ValidatedInput
        label="Headline"
        value={headline}
        onChangeText={setHeadline}
        placeholder="e.g., Mobile Developer"
        error={errors.headline}
      />

      <ValidatedInput
        label="Biography"
        value={biography}
        onChangeText={setBiography}
        placeholder="Tell us about yourself..."
        error={errors.biography}
        multiline
        maxLength={300}
      />

      <ValidatedInput
        label="Primary Skill"
        value={primarySkill}
        onChangeText={setPrimarySkill}
        placeholder="e.g., React Native"
        error={errors.primarySkill}
      />

      <Text style={styles.label}>Availability</Text>
      {AVAILABILITY_OPTIONS.map((opt) => (
        <TouchableOpacity
          key={opt}
          style={[styles.option, availability === opt && styles.optionSelected]}
          onPress={() => setAvailability(opt)}
        >
          <Text
            style={[
              styles.optionText,
              availability === opt && styles.optionTextSelected,
            ]}
          >
            {opt}
          </Text>
        </TouchableOpacity>
      ))}

      <TouchableOpacity style={styles.saveBtn} onPress={onSave}>
        <Text style={styles.saveText}>Save Profile</Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.resetBtn} onPress={onReset}>
        <Text style={styles.resetText}>Reset Profile</Text>
      </TouchableOpacity>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  screen: { flex: 1, backgroundColor: COLORS.background },
  content: { padding: SPACING.md, paddingBottom: SPACING.xl },
  heading: {
    fontSize: 22,
    fontWeight: 'bold',
    color: COLORS.text,
    marginBottom: SPACING.md,
  },
  imageSection: { alignItems: 'center', marginBottom: SPACING.lg },
  preview: {
    width: 120,
    height: 120,
    borderRadius: 60,
    marginBottom: SPACING.sm,
  },
  placeholder: {
    backgroundColor: COLORS.border,
    justifyContent: 'center',
    alignItems: 'center',
  },
  placeholderText: { color: COLORS.textMuted, fontSize: 14 },
  imageButtons: { flexDirection: 'row' },
  smallBtn: {
    backgroundColor: COLORS.primary,
    paddingHorizontal: SPACING.md,
    paddingVertical: SPACING.sm,
    borderRadius: RADIUS.sm,
    marginHorizontal: 4,
  },
  removeBtn: { backgroundColor: COLORS.error },
  smallBtnText: { color: '#fff', fontWeight: '600', fontSize: 13 },
  label: {
    fontSize: 14,
    fontWeight: '600',
    color: COLORS.text,
    marginBottom: SPACING.sm,
  },
  option: {
    padding: SPACING.sm,
    borderWidth: 1,
    borderColor: COLORS.border,
    borderRadius: RADIUS.sm,
    marginBottom: SPACING.xs,
    backgroundColor: COLORS.card,
  },
  optionSelected: { borderColor: COLORS.primary, backgroundColor: '#EFF6FF' },
  optionText: { color: COLORS.text },
  optionTextSelected: { color: COLORS.primary, fontWeight: '600' },
  saveBtn: {
    backgroundColor: COLORS.primary,
    padding: SPACING.md,
    borderRadius: RADIUS.sm,
    alignItems: 'center',
    marginTop: SPACING.lg,
  },
  saveText: { color: '#fff', fontWeight: 'bold', fontSize: 16 },
  resetBtn: {
    padding: SPACING.md,
    borderRadius: RADIUS.sm,
    alignItems: 'center',
    marginTop: SPACING.sm,
  },
  resetText: { color: COLORS.error, fontWeight: '600' },
});