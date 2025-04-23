import React from 'react';
import { View, StyleSheet, FlatList, Text, Image } from 'react-native';
import { useRouter } from 'expo-router';
import { newsItems } from '@/constants/MockData';
import NewsCard from '@/components/ui/NewsCard';
import Button from '@/components/ui/Button';
import Colors from '@/constants/Colors';
import Layout from '@/constants/Layout';

export default function NewsScreen() {
  const router = useRouter();
  
  // Find the featured/highlighted news item, if any
  const featuredNews = newsItems.find(news => news.isHighlighted);
  // Get the rest of the news items
  const regularNews = newsItems.filter(news => !news.isHighlighted);

  return (
    <View style={styles.container}>
      <FlatList
        data={regularNews}
        keyExtractor={(item) => item.id}
        contentContainerStyle={styles.listContainer}
        ListHeaderComponent={() => (
          <>
            <View style={styles.welcomeContainer}>
              <Text style={styles.welcomeTitle}>
                Welcome to the Shoulder and Elbow Society of Serbia
              </Text>
              <Text style={styles.welcomeSubtitle}>
                Your resource for the latest congress information and medical research
              </Text>
            </View>
            
            {featuredNews && (
              <View style={styles.featuredContainer}>
                <Text style={styles.sectionTitle}>Featured News</Text>
                <NewsCard news={featuredNews} />
              </View>
            )}
            
            <Text style={styles.sectionTitle}>Latest Updates</Text>
          </>
        )}
        renderItem={({ item }) => <NewsCard news={item} />}
        ListFooterComponent={() => (
          <View style={styles.footer}>
            <Button 
              title="View All News" 
              onPress={() => {}}
              variant="outline"
              style={styles.viewAllButton}
            />
          </View>
        )}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.neutral[50],
  },
  listContainer: {
    padding: Layout.spacing.m,
  },
  welcomeContainer: {
    marginBottom: Layout.spacing.l,
  },
  welcomeTitle: {
    fontFamily: 'Inter_700Bold',
    fontSize: 22,
    color: Colors.primary[700],
    marginBottom: Layout.spacing.s,
    textAlign: 'center',
  },
  welcomeSubtitle: {
    fontFamily: 'Inter_400Regular',
    fontSize: 16,
    color: Colors.neutral[700],
    textAlign: 'center',
    lineHeight: 22,
  },
  featuredContainer: {
    marginBottom: Layout.spacing.l,
  },
  sectionTitle: {
    fontFamily: 'Inter_600SemiBold',
    fontSize: 18,
    color: Colors.primary[600],
    marginBottom: Layout.spacing.m,
  },
  footer: {
    marginTop: Layout.spacing.m,
    marginBottom: Layout.spacing.xl,
    alignItems: 'center',
  },
  viewAllButton: {
    minWidth: 150,
  },
});