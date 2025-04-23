import { Tabs } from 'expo-router';
import { StyleSheet, Text } from 'react-native';
import Colors from '@/constants/Colors';
import { CalendarDays, Users, Newspaper, SquarePlay as PlaySquare, BookText } from 'lucide-react-native';

export default function TabLayout() {
  return (
    <Tabs
      screenOptions={{
        tabBarActiveTintColor: Colors.primary[500],
        tabBarInactiveTintColor: Colors.neutral[500],
        tabBarStyle: styles.tabBar,
        tabBarLabelStyle: styles.tabBarLabel,
        headerStyle: styles.header,
        headerTitleStyle: styles.headerTitle,
        headerTintColor: Colors.primary[500],
        tabBarIconStyle: styles.tabBarIcon,
      }}>
      <Tabs.Screen
        name="index"
        options={{
          title: 'Home',
          tabBarIcon: ({ color, size }) => <Newspaper size={size} color={color} />,
          headerTitle: 'Latest News',
        }}
      />
      <Tabs.Screen
        name="program"
        options={{
          title: 'Program',
          tabBarIcon: ({ color, size }) => <CalendarDays size={size} color={color} />,
          headerTitle: 'Congress Program',
        }}
      />
      <Tabs.Screen
        name="speakers"
        options={{
          title: 'Speakers',
          tabBarIcon: ({ color, size }) => <Users size={size} color={color} />,
          headerTitle: 'Our Speakers',
        }}
      />
      <Tabs.Screen
        name="videos"
        options={{
          title: 'Videos',
          tabBarIcon: ({ color, size }) => <PlaySquare size={size} color={color} />,
          headerTitle: 'Lecture Videos',
        }}
      />
      <Tabs.Screen
        name="materials"
        options={{
          title: 'Materials',
          tabBarIcon: ({ color, size }) => <BookText size={size} color={color} />,
          headerTitle: 'Scientific Materials',
        }}
      />
    </Tabs>
  );
}

const styles = StyleSheet.create({
  tabBar: {
    backgroundColor: Colors.white,
    borderTopColor: Colors.neutral[200],
    height: 60,
    paddingBottom: 5,
    paddingTop: 5,
  },
  tabBarLabel: {
    fontFamily: 'Inter_500Medium',
    fontSize: 12,
  },
  tabBarIcon: {
    marginTop: 2,
  },
  header: {
    backgroundColor: Colors.white,
    borderBottomColor: Colors.neutral[200],
    borderBottomWidth: 1,
  },
  headerTitle: {
    fontFamily: 'Inter_600SemiBold',
    fontSize: 18,
    color: Colors.primary[500],
  },
});