import React from 'react';
import { View, Text, StyleSheet, ScrollView, Image } from 'react-native';
import { useLocalSearchParams, Stack, useRouter } from 'expo-router';
import { MapPin, Award, Tag } from 'lucide-react-native';
import Button from '@/components/ui/Button';
import Colors from '@/constants/Colors';
import Layout from '@/constants/Layout';
import { speakers, programItems } from '@/constants/MockData';

export default function SpeakerDetailScreen() {
  const { id } = useLocalSearchParams<{ id: string }>();
  const router = useRouter();
  
  // Find the speaker by ID
  const speaker = speakers.find(s => s.id === id);
  
  // Find program items associated with this speaker
  const speakerPrograms = programItems.filter(item => item.speakerId === id);
  
  if (!speaker) {
    return (
      <>
        <Stack.Screen options={{ title: 'Speaker Profile' }} />
        <View style={styles.errorContainer}>
          <Text style={styles.errorText}>Speaker not found.</Text>
          <Button title="Go Back" onPress={() => router.back()} />
        </View>
      </>
    );
  }

  return (
    <>
      <Stack.Screen 
        options={{ 
          title: 'Speaker Profile',
          headerBackTitle: 'Speakers' 
        }} 
      />
      <ScrollView style={styles.container} contentContainerStyle={styles.content}>
        <View style={styles.headerContainer}>
          <Image 
            source={{ uri: speaker.imageUrl }} 
            style={styles.speakerImage}
            resizeMode="cover"
          />
          
          <View style={styles.headerTextContainer}>
            <Text style={styles.name}>{speaker.name}</Text>
            <Text style={styles.title}>{speaker.title}</Text>
            
            <View style={styles.infoItem}>
              <MapPin size={16} color={Colors.primary[500]} />
              <Text style={styles.infoText}>
                {speaker.institution}, {speaker.country}
              </Text>
            </View>
          </View>
        </View>
        
        {speaker.topics && speaker.topics.length > 0 && (
          <View style={styles.section}>
            <Text style={styles.sectionTitle}>Areas of Expertise</Text>
            <View style={styles.topicsContainer}>
              {speaker.topics.map((topic, index) => (
                <View key={index} style={styles.topicTag}>
                  <Tag size={14} color={Colors.primary[500]} />
                  <Text style={styles.topicText}>{topic}</Text>
                </View>
              ))}
            </View>
          </View>
        )}
        
        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Biography</Text>
          <Text style={styles.biography}>{speaker.bio}</Text>
        </View>
        
        {speakerPrograms.length > 0 && (
          <View style={styles.section}>
            <Text style={styles.sectionTitle}>
              Sessions by {speaker.name.split(' ')[0]}
            </Text>
            
            {speakerPrograms.map((program) => (
              <View key={program.id} style={styles.programItem}>
                <Text style={styles.programTitle}>{program.title}</Text>
                <Text style={styles.programDetails}>
                  {new Date(program.date).toLocaleDateString('en-US', {
                    month: 'long',
                    day: 'numeric',
                    year: 'numeric',
                  })} | {program.time}
                </Text>
                <Button 
                  title="View Session" 
                  onPress={() => router.push(`/program/${program.id}`)}
                  variant="outline"
                  size="small"
                  style={styles.viewSessionButton}
                />
              </View>
            ))}
          </View>
        )}
      </ScrollView>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.neutral[50],
  },
  content: {
    padding: Layout.spacing.l,
  },
  headerContainer: {
    flexDirection: 'row',
    marginBottom: Layout.spacing.xl,
  },
  speakerImage: {
    width: 100,
    height: 100,
    borderRadius: 50,
    marginRight: Layout.spacing.l,
  },
  headerTextContainer: {
    flex: 1,
    justifyContent: 'center',
  },
  name: {
    fontFamily: 'Inter_700Bold',
    fontSize: 22,
    color: Colors.primary[700],
    marginBottom: Layout.spacing.xs,
  },
  title: {
    fontFamily: 'Inter_500Medium',
    fontSize: 16,
    color: Colors.primary[500],
    marginBottom: Layout.spacing.s,
  },
  infoItem: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  infoText: {
    fontFamily: 'Inter_400Regular',
    fontSize: 14,
    color: Colors.neutral[700],
    marginLeft: Layout.spacing.xs,
  },
  section: {
    marginBottom: Layout.spacing.xl,
  },
  sectionTitle: {
    fontFamily: 'Inter_600SemiBold',
    fontSize: 18,
    color: Colors.primary[600],
    marginBottom: Layout.spacing.m,
  },
  biography: {
    fontFamily: 'Inter_400Regular',
    fontSize: 16,
    color: Colors.neutral[800],
    lineHeight: 24,
  },
  topicsContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    marginTop: Layout.spacing.xs,
  },
  topicTag: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: Colors.primary[50],
    borderRadius: Layout.radius.medium,
    paddingHorizontal: Layout.spacing.m,
    paddingVertical: Layout.spacing.xs,
    marginRight: Layout.spacing.s,
    marginBottom: Layout.spacing.s,
  },
  topicText: {
    fontFamily: 'Inter_500Medium',
    fontSize: 14,
    color: Colors.primary[600],
    marginLeft: Layout.spacing.xs,
  },
  programItem: {
    backgroundColor: Colors.white,
    borderRadius: Layout.radius.medium,
    padding: Layout.spacing.m,
    marginBottom: Layout.spacing.m,
    borderLeftWidth: 4,
    borderLeftColor: Colors.primary[500],
  },
  programTitle: {
    fontFamily: 'Inter_600SemiBold',
    fontSize: 16,
    color: Colors.neutral[800],
    marginBottom: Layout.spacing.xs,
  },
  programDetails: {
    fontFamily: 'Inter_400Regular',
    fontSize: 14,
    color: Colors.neutral[600],
    marginBottom: Layout.spacing.s,
  },
  viewSessionButton: {
    alignSelf: 'flex-start',
  },
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