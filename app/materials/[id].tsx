import React from 'react';
import { View, Text, StyleSheet, ScrollView, TouchableOpacity, Linking } from 'react-native';
import { useLocalSearchParams, Stack, useRouter } from 'expo-router';
import { FileText, Calendar, ExternalLink, Download } from 'lucide-react-native';
import Button from '@/components/ui/Button';
import Colors from '@/constants/Colors';
import Layout from '@/constants/Layout';
import { materials } from '@/constants/MockData';

export default function MaterialDetailScreen() {
  const { id } = useLocalSearchParams<{ id: string }>();
  const router = useRouter();
  
  // Find the material by ID
  const material = materials.find(m => m.id === id);
  
  // Format date (e.g., "2024-01-15" to "January 15, 2024")
  const formatDate = (dateString?: string) => {
    if (!dateString) return '';
    const date = new Date(dateString);
    return date.toLocaleDateString('en-US', {
      month: 'long',
      day: 'numeric',
      year: 'numeric',
    });
  };
  
  // Get type label
  const getTypeLabel = (type?: string) => {
    switch (type) {
      case 'pdf':
        return 'PDF Document';
      case 'presentation':
        return 'Presentation';
      case 'paper':
        return 'Scientific Paper';
      case 'link':
        return 'External Resource';
      default:
        return type || '';
    }
  };
  
  // Get type icon
  const getTypeIcon = (type?: string) => {
    switch (type) {
      case 'pdf':
        return <FileText size={24} color={Colors.error[500]} />;
      case 'presentation':
        return <FileText size={24} color={Colors.primary[500]} />;
      case 'paper':
        return <FileText size={24} color={Colors.success[500]} />;
      default:
        return <FileText size={24} color={Colors.neutral[500]} />;
    }
  };
  
  // Handle opening the material URL
  const handleOpenMaterial = () => {
    if (material?.url) {
      Linking.openURL(material.url);
    }
  };
  
  if (!material) {
    return (
      <>
        <Stack.Screen options={{ title: 'Material' }} />
        <View style={styles.errorContainer}>
          <Text style={styles.errorText}>Material not found.</Text>
          <Button title="Go Back" onPress={() => router.back()} />
        </View>
      </>
    );
  }

  return (
    <>
      <Stack.Screen 
        options={{ 
          title: getTypeLabel(material.type),
          headerBackTitle: 'Materials'
        }} 
      />
      <ScrollView style={styles.container} contentContainerStyle={styles.content}>
        <View style={styles.header}>
          <View style={styles.iconContainer}>
            {getTypeIcon(material.type)}
          </View>
          <View style={styles.headerTextContainer}>
            <Text style={styles.title}>{material.title}</Text>
            <Text style={styles.type}>{getTypeLabel(material.type)}</Text>
          </View>
        </View>
        
        <View style={styles.metaContainer}>
          <View style={styles.metaItem}>
            <Calendar size={16} color={Colors.primary[500]} />
            <Text style={styles.metaText}>{formatDate(material.date)}</Text>
          </View>
          
          {material.author && (
            <Text style={styles.authorText}>By: {material.author}</Text>
          )}
        </View>
        
        <View style={styles.divider} />
        
        <Text style={styles.sectionTitle}>Description</Text>
        <Text style={styles.description}>{material.description}</Text>
        
        <View style={styles.actionContainer}>
          <Button
            title="Open Material"
            onPress={handleOpenMaterial}
            icon={<ExternalLink size={16} color={Colors.white} />}
            style={styles.openButton}
          />
          
          {(material.type === 'pdf' || material.type === 'presentation') && (
            <Button
              title="Download"
              onPress={handleOpenMaterial}
              variant="outline"
              icon={<Download size={16} color={Colors.primary[500]} />}
              style={styles.downloadButton}
            />
          )}
        </View>
        
        <View style={styles.disclaimer}>
          <Text style={styles.disclaimerText}>
            This material is provided for educational purposes only. 
            Please respect intellectual property rights.
          </Text>
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
    padding: Layout.spacing.l,
  },
  header: {
    flexDirection: 'row',
    marginBottom: Layout.spacing.l,
    alignItems: 'center',
  },
  iconContainer: {
    width: 60,
    height: 60,
    backgroundColor: Colors.neutral[100],
    borderRadius: Layout.radius.medium,
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: Layout.spacing.m,
  },
  headerTextContainer: {
    flex: 1,
  },
  title: {
    fontFamily: 'Inter_700Bold',
    fontSize: 22,
    color: Colors.primary[700],
    marginBottom: Layout.spacing.xs,
  },
  type: {
    fontFamily: 'Inter_500Medium',
    fontSize: 14,
    color: Colors.primary[500],
  },
  metaContainer: {
    marginBottom: Layout.spacing.m,
  },
  metaItem: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: Layout.spacing.xs,
  },
  metaText: {
    fontFamily: 'Inter_400Regular',
    fontSize: 14,
    color: Colors.neutral[600],
    marginLeft: Layout.spacing.xs,
  },
  authorText: {
    fontFamily: 'Inter_500Medium',
    fontSize: 14,
    color: Colors.neutral[700],
  },
  divider: {
    height: 1,
    backgroundColor: Colors.neutral[200],
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
    marginBottom: Layout.spacing.xl,
  },
  actionContainer: {
    marginBottom: Layout.spacing.xl,
  },
  openButton: {
    marginBottom: Layout.spacing.m,
  },
  downloadButton: {},
  disclaimer: {
    marginTop: Layout.spacing.m,
    padding: Layout.spacing.m,
    backgroundColor: Colors.neutral[100],
    borderRadius: Layout.radius.medium,
  },
  disclaimerText: {
    fontFamily: 'Inter_400Regular',
    fontSize: 14,
    color: Colors.neutral[600],
    textAlign: 'center',
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