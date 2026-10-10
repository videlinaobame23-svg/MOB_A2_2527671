import React, { createContext, useContext, useEffect, useState } from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { Profile } from '../types';
import { DEFAULT_PROFILE } from '../constants/data';

const STORAGE_KEY = '@portfolio_profile_v1';

interface ProfileContextType {
  profile: Profile;
  isLoading: boolean;
  updateProfile: (updates: Partial<Profile>) => Promise<void>;
  resetProfile: () => Promise<void>;
}

const ProfileContext = createContext<ProfileContextType | undefined>(undefined);

export function ProfileProvider({ children }: { children: React.ReactNode }) {
  const [profile, setProfile] = useState<Profile>(DEFAULT_PROFILE);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    (async () => {
      try {
        const json = await AsyncStorage.getItem(STORAGE_KEY);
        if (json) setProfile({ ...DEFAULT_PROFILE, ...JSON.parse(json) });
      } catch (e) {
        console.warn('Load failed', e);
      } finally {
        setIsLoading(false);
      }
    })();
  }, []);

  const updateProfile = async (updates: Partial<Profile>) => {
    const next = { ...profile, ...updates };
    setProfile(next);
    try {
      await AsyncStorage.setItem(STORAGE_KEY, JSON.stringify(next));
    } catch (e) {
      console.warn('Save failed', e);
    }
  };

  const resetProfile = async () => {
    setProfile(DEFAULT_PROFILE);
    await AsyncStorage.removeItem(STORAGE_KEY);
  };

  return (
    <ProfileContext.Provider
      value={{ profile, isLoading, updateProfile, resetProfile }}
    >
      {children}
    </ProfileContext.Provider>
  );
}

export function useProfile() {
  const ctx = useContext(ProfileContext);
  if (!ctx) throw new Error('useProfile must be used inside ProfileProvider');
  return ctx;
}