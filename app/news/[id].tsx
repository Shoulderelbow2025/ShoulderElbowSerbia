import React from 'react';
import { View, Text, StyleSheet, ScrollView, Image } from 'react-native';
import { useLocalSearchParams, Stack, useRouter } from 'expo-router';
import Button from '@/components/ui/Button';
import Colors from '@/constants/Colors';
import Layout from '@/constants/Layout';
import { newsItems } from '@/constants/MockData';

export default function NewsDetailScreen() {
  const { id } = useLocalSearchParams<{ id: string }>();
  const router = useRouter();
  
  // Find the news item by ID
  const newsItem = newsItems.find(item => item.id === id);
  
  // Format date (e.g., "2025-02-10" to "February 10, 2025")
  const formatDate = (dateString?: string) => {
    if (!dateString) return '';
    const date = new Date(dateString);
    return date.toLocaleDateString('en-US', {
      month: 'long',
      day: 'numeric',
      year: 'numeric',
    });
  };
  
  if (!newsItem) {
    return (
      <>
        <Stack.Screen options={{ title: 'News' }} />
        <View style={styles.errorContainer}>
          <Text style={styles.errorText}>News article not found.</Text>
          <Button title="Go Back" onPress={() => router.back()} />
        </View>
      </>
    );
  }

  return (
    <>
      <Stack.Screen 
        options={{ 
          title: 'News',
          headerBackTitle: 'News'
        }} 
      />
      <ScrollView style={styles.container} contentContainerStyle={styles.content}>
        {newsItem.imageUrl && (
          <Image 
            source={{ uri: newsItem.imageUrl }} 
            style={styles.image}
            resizeMode="cover"
          />
        )}
        
        <Text style={styles.title}>{newsItem.title}</Text>
        <Text style={styles.date}>{formatDate(newsItem.date)}</Text>
        
        <View style={styles.divider} />
        
        <Text style={styles.content}>{newsItem.content}</Text>
        
        <View style={styles.actionButtons}>
          <Button 
            title="Share Article" 
            onPress={() => {}}
            variant="outline"
            style={styles.shareButton}
          />
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
  content: {
    paddingBottom: Layout.spacing.xl,
  },
  image: {
    width: '100%',
    height: 200,
  },
  title: {
    fontFamily: 'Inter_700Bold',
    fontSize: 24,
    color: Colors.primary[700],
    marginTop: Layout.spacing.l,
    marginHorizontal: Layout.spacing.l,
  },
  date: {
    fontFamily: 'Inter_400Regular',
    fontSize: 14,
    color: Colors.neutral[600],
    marginTop: Layout.spacing.s,
    marginHorizontal: Layout.spacing.l,
  },
  divider: {
    height: 1,
    backgroundColor: Colors.neutral[200],
    marginVertical: Layout.spacing.l,
    marginHorizontal: Layout.spacing.l,
  },
  content: {
    fontFamily: 'Inter_400Regular',
    fontSize: 16,
    color: Colors.neutral[800],
    lineHeight: 24,
    marginHorizontal: Layout.spacing.l,
  },
  actionButtons: {
    marginTop: Layout.spacing.xl,
    marginHorizontal: Layout.spacing.l,
  },
  shareButton: {
    marginTop: Layout.spacing.m,
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