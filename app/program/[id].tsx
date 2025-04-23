import React from 'react';
import { View, Text, StyleSheet, ScrollView } from 'react-native';
import { useLocalSearchParams, Stack, useRouter } from 'expo-router';
import { Calendar, Clock, MapPin, User } from 'lucide-react-native';
import Button from '@/components/ui/Button';
import Colors from '@/constants/Colors';
import Layout from '@/constants/Layout';
import { programItems, speakers } from '@/constants/MockData';

export default function ProgramDetailScreen() {
  const { id } = useLocalSearchParams<{ id: string }>();
  const router = useRouter();
  
  // Find the program item by ID
  const programItem = programItems.find(item => item.id === id);
  
  // If there's a speaker associated with this program item, get their details
  const speaker = programItem?.speakerId 
    ? speakers.find(s => s.id === programItem.speakerId) 
    : undefined;
  
  // Format date (e.g., "2025-05-15" to "May 15, 2025")
  const formatDate = (dateString?: string) => {
    if (!dateString) return '';
    const date = new Date(dateString);
    return date.toLocaleDateString('en-US', {
      month: 'long',
      day: 'numeric',
      year: 'numeric',
    });
  };
  
  // Handle viewing the speaker's details
  const handleViewSpeaker = () => {
    if (speaker) {
      router.push(`/speakers/${speaker.id}`);
    }
  };
  
  if (!programItem) {
    return (
      <>
        <Stack.Screen options={{ title: 'Event Details' }} />
        <View style={styles.errorContainer}>
          <Text style={styles.errorText}>Event not found.</Text>
          <Button title="Go Back" onPress={() => router.back()} />
        </View>
      </>
    );
  }

  return (
    <>
      <Stack.Screen 
        options={{ 
          title: 'Event Details',
          headerBackTitle: 'Program'
        }} 
      />
      <ScrollView style={styles.container} contentContainerStyle={styles.content}>
        <Text style={styles.title}>{programItem.title}</Text>
        
        <View style={styles.infoCard}>
          <View style={styles.infoItem}>
            <Calendar size={20} color={Colors.primary[500]} />
            <Text style={styles.infoText}>{formatDate(programItem.date)}</Text>
          </View>
          
          <View style={styles.infoItem}>
            <Clock size={20} color={Colors.primary[500]} />
            <Text style={styles.infoText}>{programItem.time}</Text>
          </View>
          
          <View style={styles.infoItem}>
            <MapPin size={20} color={Colors.primary[500]} />
            <Text style={styles.infoText}>{programItem.location}</Text>
          </View>
          
          {speaker && (
            <View style={styles.infoItem}>
              <User size={20} color={Colors.primary[500]} />
              <Text style={styles.infoText}>
                {speaker.name}, {speaker.title}
              </Text>
            </View>
          )}
        </View>
        
        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Description</Text>
          <Text style={styles.description}>{programItem.description}</Text>
        </View>
        
        {speaker && (
          <View style={styles.speakerSection}>
            <Text style={styles.sectionTitle}>Speaker</Text>
            <Text style={styles.speakerName}>{speaker.name}</Text>
            <Text style={styles.speakerTitle}>
              {speaker.title}, {speaker.institution}
            </Text>
            <Button 
              title="View Speaker Profile" 
              onPress={handleViewSpeaker}
              style={styles.viewSpeakerButton}
              variant="outline"
            />
          </View>
        )}
        
        <View style={styles.actionButtons}>
          <Button 
            title="Add to My Schedule" 
            onPress={() => {}}
            style={styles.primaryButton}
          />
          <Button 
            title="Share Event" 
            onPress={() => {}}
            variant="ghost"
            style={styles.secondaryButton}
          />
        </View>
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
  title: {
    fontFamily: 'Inter_700Bold',
    fontSize: 24,
    color: Colors.primary[700],
    marginBottom: Layout.spacing.l,
  },
  infoCard: {
    backgroundColor: Colors.white,
    borderRadius: Layout.radius.medium,
    padding: Layout.spacing.l,
    marginBottom: Layout.spacing.l,
    shadowColor: Colors.black,
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 2,
  },
  infoItem: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: Layout.spacing.m,
  },
  infoText: {
    fontFamily: 'Inter_500Medium',
    fontSize: 16,
    color: Colors.neutral[800],
    marginLeft: Layout.spacing.s,
  },
  section: {
    marginBottom: Layout.spacing.l,
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
  speakerSection: {
    marginBottom: Layout.spacing.l,
  },
  speakerName: {
    fontFamily: 'Inter_600SemiBold',
    fontSize: 16,
    color: Colors.neutral[800],
    marginBottom: Layout.spacing.xs,
  },
  speakerTitle: {
    fontFamily: 'Inter_400Regular',
    fontSize: 14,
    color: Colors.neutral[600],
    marginBottom: Layout.spacing.m,
  },
  viewSpeakerButton: {
    alignSelf: 'flex-start',
  },
  actionButtons: {
    marginTop: Layout.spacing.l,
    marginBottom: Layout.spacing.xl,
  },
  primaryButton: {
    marginBottom: Layout.spacing.m,
  },
  secondaryButton: {},
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