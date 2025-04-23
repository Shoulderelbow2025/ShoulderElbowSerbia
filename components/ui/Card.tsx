import React from 'react';
import { View, StyleSheet, ViewStyle, StyleProp } from 'react-native';
import Colors from '@/constants/Colors';
import Layout from '@/constants/Layout';

interface CardProps {
  children: React.ReactNode;
  style?: StyleProp<ViewStyle>;
  elevated?: boolean;
}

export default function Card({ children, style, elevated = false }: CardProps) {
  return (
    <View style={[styles.card, elevated && styles.elevated, style]}>
      {children}
    </View>
  );
}

const styles = StyleSheet.create({
  card: {
    backgroundColor: Colors.white,
    borderRadius: Layout.radius.medium,
    borderWidth: 1,
    borderColor: Colors.neutral[200],
    padding: Layout.spacing.m,
    marginBottom: Layout.spacing.m,
  },
  elevated: {
    shadowColor: Colors.black,
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 6,
    elevation: 3,
  },
});