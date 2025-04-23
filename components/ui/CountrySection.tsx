import React, { useState } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, LayoutAnimation } from 'react-native';
import { ChevronDown, ChevronUp } from 'lucide-react-native';
import Colors from '@/constants/Colors';
import Layout from '@/constants/Layout';

interface CountrySectionProps {
  country: string;
  flag: string;
  children: React.ReactNode;
}

export default function CountrySection({ country, flag, children }: CountrySectionProps) {
  const [isExpanded, setIsExpanded] = useState(true);

  const toggleExpand = () => {
    LayoutAnimation.configureNext(LayoutAnimation.Presets.easeInEaseOut);
    setIsExpanded(!isExpanded);
  };

  return (
    <View style={styles.container}>
      <TouchableOpacity 
        style={styles.header} 
        onPress={toggleExpand}
        activeOpacity={0.7}
      >
        <View style={styles.titleContainer}>
          <Text style={styles.flag}>{flag}</Text>
          <Text style={styles.country}>{country}</Text>
        </View>
        {isExpanded ? (
          <ChevronUp size={24} color={Colors.primary[500]} />
        ) : (
          <ChevronDown size={24} color={Colors.primary[500]} />
        )}
      </TouchableOpacity>
      {isExpanded && (
        <View style={styles.content}>
          {children}
        </View>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    marginBottom: Layout.spacing.m,
    backgroundColor: Colors.white,
    borderRadius: Layout.radius.medium,
    overflow: 'hidden',
    borderWidth: 1,
    borderColor: Colors.neutral[200],
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    padding: Layout.spacing.m,
    backgroundColor: Colors.neutral[50],
  },
  titleContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  flag: {
    fontSize: 24,
    marginRight: Layout.spacing.s,
  },
  country: {
    fontFamily: 'Inter_600SemiBold',
    fontSize: 18,
    color: Colors.primary[700],
  },
  content: {
    padding: Layout.spacing.m,
  },
});