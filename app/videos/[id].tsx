import React, { useState } from 'react';
import { View, Text, StyleSheet, ScrollView, Dimensions } from 'react-native';
import { useLocalSearchParams, Stack, useRouter } from 'expo-router';
import { Video as ExpoVideo } from 'expo-av';
import Button from '@/components/ui/Button';
import Colors from '@/constants/Colors';
import Layout from '@/constants/Layout';
import { videos, speakers } from '@/constants/MockData';

export default function VideoDetailScreen() {
  const { id } = useLocalSearchParams<{ id: string }>();
  const router = useRouter();
  const [status, setStatus] = useState({});
  
  // Find the video by ID
  const video = videos.find(v => v.id === id);
  
  // If there's a speaker associated with this video, get their details
  const speaker = video?.speakerId 
    ? speakers.find(s => s.id === video.speakerId) 
    : undefined;
  
  // Format date (e.g., "2024-05-20" to "May 20, 2024")
  const formatDate = (dateString?: string) => {
    if (!dateString) return '';
    const date = new Date(dateString);
    return date.toLocaleDateString('en-US', {
      month: 'long',
      day: 'numeric',
      year: 'numeric',
    });
  };
  
  // Calculate video width to maintain aspect ratio (16:9)
  const videoWidth = Dimensions.get('window').width;
  const videoHeight = videoWidth * 0.5625; // 16:9 aspect ratio
  
  if (!video) {
    return (
      <>
        <Stack.Screen options={{ title: 'Video' }} />
        <View style={styles.errorContainer}>
          <Text style={styles.errorText}>Video not found.</Text>
          <Button title="Go Back" onPress={() => router.back()} />
        </View>
      </>
    );
  }

  return (
    <>
      <Stack.Screen 
        options={{ 
          title: 'Video',
          headerBackTitle: 'Videos'
        }} 
      />
      <ScrollView style={styles.container}>
        {/* Video Player */}
        <View style={styles.videoContainer}>
          <ExpoVideo
            style={{ width: videoWidth, height: videoHeight }}
            source={{ uri: video.thumbnailUrl }} // In production, use actual video URL
            useNativeControls
            resizeMode="contain"
            onPlaybackStatusUpdate={status => setStatus(() => status)}
            poster={video.thumbnailUrl}
            posterStyle={{ resizeMode: 'cover' }}
          />
        </View>
        
        <View style={styles.contentContainer}>
          <Text style={styles.title}>{video.title}</Text>
          
          <View style={styles.metaContainer}>
            <Text style={styles.date}>{formatDate(video.date)}</Text>
            <Text style={styles.duration}>{video.duration}</Text>
          </View>
          
          {speaker && (
            <View style={styles.speakerContainer}>
              <Text style={styles.speakerLabel}>Presented by:</Text>
              <Text 
                style={styles.speakerName}
                onPress={() => router.push(`/speakers/${speaker.id}`)}
              >
                {speaker.name}, {speaker.title}
              </Text>
            </View>
          )}
          
          <Text style={styles.sectionTitle}>Description</Text>
          <Text style={styles.description}>{video.description}</Text>
          
          <View style={styles.actionButtons}>
            <Button 
              title="Download Presentation" 
              onPress={() => {}}
              variant="outline"
              style={styles.downloadButton}
            />
            <Button 
              title="Share Video" 
              onPress={() => {}}
              variant="ghost"
              style={styles.shareButton}
            />
          </View>
        </View>
      </ScrollView>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.white,
  },
  videoContainer: {
    backgroundColor: Colors.black,
    alignItems: 'center',
    justifyContent: 'center',
  },
  contentContainer: {
    padding: Layout.spacing.l,
  },
  title: {
    fontFamily: 'Inter_700Bold',
    fontSize: 22,
    color: Colors.primary[700],
    marginBottom: Layout.spacing.m,
  },
  metaContainer: {
    flexDirection: 'row',
    marginBottom: Layout.spacing.m,
  },
  date: {
    fontFamily: 'Inter_400Regular',
    fontSize: 14,
    color: Colors.neutral[600],
    marginRight: Layout.spacing.m,
  },
  duration: {
    fontFamily: 'Inter_500Medium',
    fontSize: 14,
    color: Colors.primary[500],
  },
  speakerContainer: {
    flexDirection: 'row',
    marginBottom: Layout.spacing.m,
    alignItems: 'center',
  },
  speakerLabel: {
    fontFamily: 'Inter_400Regular',
    fontSize: 14,
    color: Colors.neutral[700],
    marginRight: Layout.spacing.xs,
  },
  speakerName: {
    fontFamily: 'Inter_500Medium',
    fontSize: 14,
    color: Colors.primary[500],
    textDecorationLine: 'underline',
  },
  sectionTitle: {
    fontFamily: 'Inter_600SemiBold',
    fontSize: 18,
    color: Colors.primary[600],
    marginBottom: Layout.spacing.s,
  },
  description: {
    fontFamily: 'Inter_400Regular',
    fontSize: 16,
    color: Colors.neutral[800],
    lineHeight: 24,
  },
  actionButtons: {
    marginTop: Layout.spacing.xl,
  },
  downloadButton: {
    marginBottom: Layout.spacing.m,
  },
  shareButton: {},
  errorContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: Layout.spacing.l,
  },
  errorText: {
    fontFamily: 'Inter_500Medium',
    fontSize: 16,
    color: Colors.neutral[700],
    marginBottom: Layout.spacing.l,
  },
});