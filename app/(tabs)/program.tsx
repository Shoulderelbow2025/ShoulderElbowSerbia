import React, { useState, useCallback } from 'react';
import { View, StyleSheet, FlatList, Text, TouchableOpacity } from 'react-native';
import { programItems } from '@/constants/MockData';
import ProgramCard from '@/components/ui/ProgramCard';
import Colors from '@/constants/Colors';
import Layout from '@/constants/Layout';

export default function ProgramScreen() {
  // Get unique dates from program items
  const uniqueDates = [...new Set(programItems.map(item => item.date))].sort();
  
  // State to track selected date
  const [selectedDate, setSelectedDate] = useState(uniqueDates[0]);
  
  // Filter items by selected date
  const filteredItems = programItems.filter(item => item.date === selectedDate);
  
  // Format date for display (e.g., "2025-05-15" to "May 15")
  const formatDate = useCallback((dateString: string) => {
    const date = new Date(dateString);
    return date.toLocaleDateString('en-US', {
      month: 'long',
      day: 'numeric',
    });
  }, []);

  return (
    <View style={styles.container}>
      {/* Date filter tabs */}
      <View style={styles.dateTabsContainer}>
        <FlatList
          horizontal
          data={uniqueDates}
          keyExtractor={(item) => item}
          showsHorizontalScrollIndicator={false}
          contentContainerStyle={styles.dateTabsList}
          renderItem={({ item }) => (
            <TouchableOpacity
              style={[
                styles.dateTab,
                selectedDate === item && styles.selectedDateTab,
              ]}
              onPress={() => setSelectedDate(item)}
            >
              <Text
                style={[
                  styles.dateTabText,
                  selectedDate === item && styles.selectedDateTabText,
                ]}
              >
                {formatDate(item)}
              </Text>
            </TouchableOpacity>
          )}
        />
      </View>
      
      {/* Program items for selected date */}
      <FlatList
        data={filteredItems}
        keyExtractor={(item) => item.id}
        contentContainerStyle={styles.listContainer}
        ListHeaderComponent={() => (
          <Text style={styles.sectionTitle}>
            Schedule for {formatDate(selectedDate)}
          </Text>
        )}
        renderItem={({ item }) => <ProgramCard item={item} />}
        ListEmptyComponent={() => (
          <View style={styles.emptyContainer}>
            <Text style={styles.emptyText}>No events scheduled for this date.</Text>
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
  dateTabsContainer: {
    backgroundColor: Colors.white,
    shadowColor: Colors.black,
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 2,
  },
  dateTabsList: {
    paddingVertical: Layout.spacing.m,
    paddingHorizontal: Layout.spacing.s,
  },
  dateTab: {
    paddingHorizontal: Layout.spacing.m,
    paddingVertical: Layout.spacing.s,
    borderRadius: Layout.radius.medium,
    marginHorizontal: Layout.spacing.xs,
    backgroundColor: Colors.neutral[100],
  },
  selectedDateTab: {
    backgroundColor: Colors.primary[500],
  },
  dateTabText: {
    fontFamily: 'Inter_500Medium',
    fontSize: 14,
    color: Colors.neutral[700],
  },
  selectedDateTabText: {
    color: Colors.white,
  },
  listContainer: {
    padding: Layout.spacing.m,
  },
  sectionTitle: {
    fontFamily: 'Inter_600SemiBold',
    fontSize: 18,
    color: Colors.primary[600],
    marginBottom: Layout.spacing.m,
  },
  emptyContainer: {
    padding: Layout.spacing.xl,
    alignItems: 'center',
    justifyContent: 'center',
  },
  emptyText: {
    fontFamily: 'Inter_400Regular',
    fontSize: 16,
    color: Colors.neutral[600],
    textAlign: 'center',
  },
});