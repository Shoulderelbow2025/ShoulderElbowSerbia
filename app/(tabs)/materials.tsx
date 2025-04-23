import React from 'react';
import { View, StyleSheet, FlatList, Text } from 'react-native';
import { materials } from '@/constants/MockData';
import MaterialCard from '@/components/ui/MaterialCard';
import Colors from '@/constants/Colors';
import Layout from '@/constants/Layout';

export default function MaterialsScreen() {
  return (
    <View style={styles.container}>
      <FlatList
        data={materials}
        keyExtractor={(item) => item.id}
        contentContainerStyle={styles.listContainer}
        ListHeaderComponent={() => (
          <View style={styles.headerContainer}>
            <Text style={styles.title}>Scientific Materials</Text>
            <Text style={styles.subtitle}>
              Access research papers, presentations, and educational resources
            </Text>
          </View>
        )}
        renderItem={({ item }) => <MaterialCard material={item} />}
        ListFooterComponent={() => <View style={styles.footer} />}
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
  headerContainer: {
    marginBottom: Layout.spacing.l,
  },
  title: {
    fontFamily: 'Inter_700Bold',
    fontSize: 22,
    color: Colors.primary[700],
    marginBottom: Layout.spacing.s,
  },
  subtitle: {
    fontFamily: 'Inter_400Regular',
    fontSize: 16,
    color: Colors.neutral[700],
    lineHeight: 22,
  },
  footer: {
    height: Layout.spacing.xl,
  },
});