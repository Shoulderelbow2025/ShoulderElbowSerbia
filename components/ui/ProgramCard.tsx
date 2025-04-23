import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { Calendar, Clock, MapPin } from 'lucide-react-native';
import { useRouter } from 'expo-router';
import Card from './Card';
import Colors from '@/constants/Colors';
import Layout from '@/constants/Layout';
import { ProgramItem } from '@/types';

interface ProgramCardProps {
  item: ProgramItem;
}

export default function ProgramCard({ item }: ProgramCardProps) {
  const router = useRouter();
  
  // Format date string (e.g., "2025-05-15" to "May 15, 2025")
  const formatDate = (dateString: string) => {
    const date = new Date(dateString);
    return date.toLocaleDateString('en-US', {
      month: 'long',
      day: 'numeric',
      year: 'numeric',
    });
  };

  const handlePress = () => {
    router.push(`/program/${item.id}`);
  };

  return (
    <TouchableOpacity onPress={handlePress} activeOpacity={0.7}>
      <Card elevated style={styles.card}>
        <Text style={styles.title}>{item.title}</Text>
        
        <View style={styles.metaContainer}>
          <View style={styles.metaItem}>
            <Calendar size={16} color={Colors.primary[500]} />
            <Text style={styles.metaText}>{formatDate(item.date)}</Text>
          </View>
          
          <View style={styles.metaItem}>
            <Clock size={16} color={Colors.primary[500]} />
            <Text style={styles.metaText}>{item.time}</Text>
          </View>
          
          <View style={styles.metaItem}>
            <MapPin size={16} color={Colors.primary[500]} />
            <Text style={styles.metaText}>{item.location}</Text>
          </View>
        </View>
        
        <Text style={styles.description} numberOfLines={2}>
          {item.description}
        </Text>
      </Card>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  card: {
    padding: Layout.spacing.m,
  },
  title: {
    fontFamily: 'Inter_600SemiBold',
    fontSize: 16,
    color: Colors.primary[700],
    marginBottom: Layout.spacing.s,
  },
  metaContainer: {
    marginBottom: Layout.spacing.s,
  },
  metaItem: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: Layout.spacing.xs,
  },
  metaText: {
    fontFamily: 'Inter_400Regular',
    fontSize: 14,
    color: Colors.neutral[700],
    marginLeft: Layout.spacing.xs,
  },
  description: {
    fontFamily: 'Inter_400Regular',
    fontSize: 14,
    color: Colors.neutral[600],
    lineHeight: 20,
  },
});