import React from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity } from 'react-native';
import { useRouter } from 'expo-router';
import Card from './Card';
import Colors from '@/constants/Colors';
import Layout from '@/constants/Layout';
import { NewsItem } from '@/types';

interface NewsCardProps {
  news: NewsItem;
}

export default function NewsCard({ news }: NewsCardProps) {
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
    router.push(`/news/${news.id}`);
  };

  return (
    <TouchableOpacity onPress={handlePress} activeOpacity={0.7}>
      <Card 
        elevated 
        style={[
          styles.card, 
          news.isHighlighted && styles.highlightedCard
        ]}
      >
        {news.imageUrl && (
          <Image 
            source={{ uri: news.imageUrl }} 
            style={styles.image}
            resizeMode="cover"
          />
        )}
        
        <View style={styles.contentContainer}>
          {news.isHighlighted && (
            <View style={styles.highlightBadge}>
              <Text style={styles.highlightText}>Featured</Text>
            </View>
          )}
          
          <Text style={styles.date}>{formatDate(news.date)}</Text>
          <Text style={styles.title}>{news.title}</Text>
          <Text 
            style={styles.content} 
            numberOfLines={3}
          >
            {news.content}
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
  highlightedCard: {
    borderColor: Colors.primary[300],
    borderWidth: 2,
  },
  image: {
    width: '100%',
    height: 150,
  },
  contentContainer: {
    padding: Layout.spacing.m,
  },
  highlightBadge: {
    backgroundColor: Colors.primary[500],
    alignSelf: 'flex-start',
    paddingVertical: 4,
    paddingHorizontal: 8,
    borderRadius: Layout.radius.small,
    marginBottom: Layout.spacing.s,
  },
  highlightText: {
    color: Colors.white,
    fontFamily: 'Inter_500Medium',
    fontSize: 12,
  },
  date: {
    fontFamily: 'Inter_400Regular',
    fontSize: 12,
    color: Colors.neutral[600],
    marginBottom: Layout.spacing.xs,
  },
  title: {
    fontFamily: 'Inter_600SemiBold',
    fontSize: 16,
    color: Colors.primary[700],
    marginBottom: Layout.spacing.s,
  },
  content: {
    fontFamily: 'Inter_400Regular',
    fontSize: 14,
    color: Colors.neutral[700],
    lineHeight: 20,
  },
});