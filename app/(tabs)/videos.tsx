import React from 'react';
import { View, StyleSheet, FlatList, Text } from 'react-native';
import { videos } from '@/constants/MockData';
import VideoCard from '@/components/ui/VideoCard';
import Colors from '@/constants/Colors';
import Layout from '@/constants/Layout';

export default function VideosScreen() {
  return (
    <View style={styles.container}>
      <FlatList
        data={videos}
        keyExtractor={(item) => item.id}
        contentContainerStyle={styles.listContainer}
        ListHeaderComponent={() => (
          <View style={styles.headerContainer}>
            <Text style={styles.title}>Lecture Videos</Text>
            <Text style={styles.subtitle}>
              Watch presentations and talks from previous congresses
            </Text>
          </View>
        )}
        renderItem={({ item }) => <VideoCard video={item} />}
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