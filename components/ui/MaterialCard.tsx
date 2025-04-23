import React from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity } from 'react-native';
import { FileText, BookOpen, FileSpreadsheet, Link as LinkIcon } from 'lucide-react-native';
import { useRouter } from 'expo-router';
import Card from './Card';
import Colors from '@/constants/Colors';
import Layout from '@/constants/Layout';
import { Material } from '@/types';

interface MaterialCardProps {
  material: Material;
}

export default function MaterialCard({ material }: MaterialCardProps) {
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
    router.push(`/materials/${material.id}`);
  };
  
  const getTypeIcon = () => {
    switch (material.type) {
      case 'pdf':
        return <FileText size={24} color={Colors.error[500]} />;
      case 'presentation':
        return <BookOpen size={24} color={Colors.primary[500]} />;
      case 'paper':
        return <FileSpreadsheet size={24} color={Colors.success[500]} />;
      case 'link':
        return <LinkIcon size={24} color={Colors.accent[500]} />;
      default:
        return <FileText size={24} color={Colors.neutral[500]} />;
    }
  };
  
  const getTypeLabel = () => {
    switch (material.type) {
      case 'pdf':
        return 'PDF Document';
      case 'presentation':
        return 'Presentation';
      case 'paper':
        return 'Scientific Paper';
      case 'link':
        return 'External Resource';
      default:
        return material.type;
    }
  };

  return (
    <TouchableOpacity onPress={handlePress} activeOpacity={0.7}>
      <Card elevated style={styles.card}>
        <View style={styles.container}>
          <View style={styles.iconContainer}>
            {getTypeIcon()}
          </View>
          
          <View style={styles.contentContainer}>
            <Text style={styles.title} numberOfLines={2}>
              {material.title}
            </Text>
            
            <View style={styles.metaContainer}>
              <Text style={styles.typeBadge}>
                {getTypeLabel()}
              </Text>
              <Text style={styles.date}>
                {formatDate(material.date)}
              </Text>
            </View>
            
            {material.author && (
              <Text style={styles.author}>
                By: {material.author}
              </Text>
            )}
          </View>
        </View>
      </Card>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  card: {
    padding: Layout.spacing.m,
  },
  container: {
    flexDirection: 'row',
  },
  iconContainer: {
    width: 40,
    height: 40,
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: Layout.spacing.m,
  },
  contentContainer: {
    flex: 1,
  },
  title: {
    fontFamily: 'Inter_600SemiBold',
    fontSize: 16,
    color: Colors.primary[700],
    marginBottom: Layout.spacing.xs,
  },
  metaContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: Layout.spacing.xs,
  },
  typeBadge: {
    fontFamily: 'Inter_500Medium',
    fontSize: 12,
    color: Colors.primary[600],
    backgroundColor: Colors.primary[50],
    paddingHorizontal: Layout.spacing.s,
    paddingVertical: 2,
    borderRadius: Layout.radius.small,
    marginRight: Layout.spacing.s,
  },
  date: {
    fontFamily: 'Inter_400Regular',
    fontSize: 12,
    color: Colors.neutral[600],
  },
  author: {
    fontFamily: 'Inter_400Regular',
    fontSize: 14,
    color: Colors.neutral[700],
  },
});