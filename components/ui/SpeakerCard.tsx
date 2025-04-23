import React from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity } from 'react-native';
import { useRouter } from 'expo-router';
import Card from './Card';
import Colors from '@/constants/Colors';
import Layout from '@/constants/Layout';
import { Speaker } from '@/types';

interface SpeakerCardProps {
  speaker: Speaker;
}

export default function SpeakerCard({ speaker }: SpeakerCardProps) {
  const router = useRouter();
  
  const handlePress = () => {
    router.push(`/speakers/${speaker.id}`);
  };

  return (
    <TouchableOpacity onPress={handlePress} activeOpacity={0.7}>
      <Card elevated style={styles.card}>
        <View style={styles.container}>
          <Image 
            source={{ uri: speaker.imageUrl }} 
            style={styles.image}
            resizeMode="cover"
          />
          <View style={styles.infoContainer}>
            <Text style={styles.name}>{speaker.name}</Text>
            <Text style={styles.title}>{speaker.title}</Text>
            <Text style={styles.institution}>{speaker.institution}</Text>
            <Text style={styles.country}>{speaker.country}</Text>
          </View>
        </View>
      </Card>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  card: {
    padding: 0,
    overflow: 'hidden',
  },
  container: {
    flexDirection: 'row',
  },
  image: {
    width: 100,
    height: '100%',
  },
  infoContainer: {
    flex: 1,
    padding: Layout.spacing.m,
  },
  name: {
    fontFamily: 'Inter_600SemiBold',
    fontSize: 16,
    color: Colors.primary[700],
    marginBottom: Layout.spacing.xs,
  },
  title: {
    fontFamily: 'Inter_500Medium',
    fontSize: 14,
    color: Colors.primary[500],
    marginBottom: Layout.spacing.xs,
  },
  institution: {
    fontFamily: 'Inter_400Regular',
    fontSize: 14,
    color: Colors.neutral[700],
  },
  country: {
    fontFamily: 'Inter_400Regular',
    fontSize: 14,
    color: Colors.neutral[600],
    marginTop: Layout.spacing.xs,
  },
});