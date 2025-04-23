import React, { useMemo } from 'react';
import { View, StyleSheet, ScrollView, Text } from 'react-native';
import { speakers } from '@/constants/MockData';
import SpeakerCard from '@/components/ui/SpeakerCard';
import CountrySection from '@/components/ui/CountrySection';
import Colors from '@/constants/Colors';
import Layout from '@/constants/Layout';

// Map country codes to flag emojis
const countryFlags: { [key: string]: string } = {
  US: '🇺🇸',
  PT: '🇵🇹',
  GB: '🇬🇧',
  TR: '🇹🇷',
  SI: '🇸🇮',
  HR: '🇭🇷',
  BA: '🇧🇦',
  MK: '🇲🇰',
  RS: '🇷🇸',
};

export default function SpeakersScreen() {
  // Group speakers by country
  const speakersByCountry = useMemo(() => {
    const grouped = speakers.reduce((acc, speaker) => {
      const country = speaker.country;
      if (!acc[country]) {
        acc[country] = [];
      }
      acc[country].push(speaker);
      return acc;
    }, {} as { [key: string]: typeof speakers });

    // Sort countries alphabetically
    return Object.entries(grouped).sort(([a], [b]) => a.localeCompare(b));
  }, []);

  return (
    <ScrollView style={styles.container}>
      <View style={styles.content}>
        <View style={styles.headerContainer}>
          <Text style={styles.title}>Congress Speakers</Text>
          <Text style={styles.subtitle}>
            Distinguished experts in shoulder and elbow medicine from around the world
          </Text>
        </View>

        {speakersByCountry.map(([country, countrySpeakers]) => {
          const flag = countryFlags[countrySpeakers[0].countryCode] || '🌍';
          return (
            <CountrySection 
              key={country} 
              country={country}
              flag={flag}
            >
              {countrySpeakers.map(speaker => (
                <SpeakerCard key={speaker.id} speaker={speaker} />
              ))}
            </CountrySection>
          );
        })}
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.neutral[50],
  },
  content: {
    padding: Layout.spacing.m,
  },
  headerContainer: {
    marginBottom: Layout.spacing.l,
  },
  title: {
    fontFamily: 'Inter_700Bold',
    fontSize: 24,
    color: Colors.primary[700],
    marginBottom: Layout.spacing.s,
  },
  subtitle: {
    fontFamily: 'Inter_400Regular',
    fontSize: 16,
    color: Colors.neutral[700],
    lineHeight: 22,
  },
});