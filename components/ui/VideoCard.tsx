import React from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity } from 'react-native';
import { Play, Clock } from 'lucide-react-native';
import { useRouter } from 'expo-router';
import Card from './Card';
import Colors from '@/constants/Colors';
import Layout from '@/constants/Layout';
import { Video } from '@/types';

interface VideoCardProps {
  video: Video;
}

export default function VideoCard({ video }: VideoCardProps) {
  const router = useRouter();
  
  const formatDate = (dateString: string) => {
    const date = new Date(dateString);
    return date.toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'long',
      day: 'numeric',
    });
  };
  
  const handlePress = () => {
    router.push(`/videos/${video.id}`);
  };

  return (
    <TouchableOpacity onPress={handlePress} activeOpacity={0.7}>
      <Card elevated style={styles.card}>
        <View style={styles.thumbnailContainer}>
          <Image 
            source={{ uri: video.thumbnailUrl }} 
            style={styles.thumbnail}
            resizeMode="cover"
          />
          <View style={styles.playButton}>
            <Play size={24} color={Colors.white} />
          </View>
          <View style={styles.durationBadge}>
            <Clock size={12} color={Colors.white} />
            <Text style={styles.durationText}>{video.duration}</Text>
          </View>
        </View>
        
        <View style={styles.contentContainer}>
          <Text style={styles.title} numberOfLines={2}>{video.title}</Text>
          
          <Text style={styles.date}>{formatDate(video.date)}</Text>
          
          <Text style={styles.description} numberOfLines={2}>
            {video.description}
          </Text>
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
  thumbnailContainer: {
    position: 'relative',
    width: '100%',
    height: 180,
  },
  thumbnail: {
    width: '100%',
    height: '100%',
  },
  playButton: {
    position: 'absolute',
    top: '50%',
    left: '50%',
    width: 48,
    height: 48,
    borderRadius: 24,
    backgroundColor: 'rgba(0, 0, 0, 0.7)',
    justifyContent: 'center',
    alignItems: 'center',
    marginLeft: -24,
    marginTop: -24,
  },
  durationBadge: {
    position: 'absolute',
    bottom: Layout.spacing.s,
    right: Layout.spacing.s,
    backgroundColor: 'rgba(0, 0, 0, 0.7)',
    borderRadius: Layout.radius.small,
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: 2,
    paddingHorizontal: 6,
  },
  durationText: {
    color: Colors.white,
    fontFamily: 'Inter_400Regular',
    fontSize: 12,
    marginLeft: 4,
  },
  contentContainer: {
    padding: Layout.spacing.m,
  },
  title: {
    fontFamily: 'Inter_600SemiBold',
    fontSize: 16,
    color: Colors.primary[700],
    marginBottom: Layout.spacing.xs,
  },
  date: {
    fontFamily: 'Inter_400Regular',
    fontSize: 12,
    color: Colors.neutral[600],
    marginBottom: Layout.spacing.s,
  },
  description: {
    fontFamily: 'Inter_400Regular',
    fontSize: 14,
    color: Colors.neutral[700],
    lineHeight: 20,
  },
});