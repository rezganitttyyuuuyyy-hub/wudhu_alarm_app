import React, { useEffect } from 'react';
import { Tabs } from 'expo-router';
import { RewardedAd, RewardedAdEventType } from 'react-native-google-mobile-ads';
import { useApp } from '@/lib/AppContext';
import { Home, Bell, Brain, Gift, User, Settings } from 'lucide-react-native';

export default function TabLayout() {
  // كود تجهيز الإعلان في الخلفية تلقائياً
  useEffect(() => {
    const rewarded = RewardedAd.createForAdRequest('ca-app-pub-6715466815515460/7684068371', {
      requestNonPersonalizedAdsOnly: true,
    });
    rewarded.load();p
  }, []);

  const { palette } = useApp();

  return (
    <Tabs
      screenOptions={{
        headerShown: false,
        tabBarActiveTintColor: palette.primary,
        tabBarInactiveTintColor: palette.textMuted,
        tabBarStyle: {
          backgroundColor: palette.navBackground,
          borderTopColor: palette.navBorder,
          borderTopWidth: 1,
          height: 64,
          paddingBottom: 8,
          paddingTop: 8,
        },
        tabBarLabelStyle: { fontSize: 11 },
      }}
    >
      <Tabs.Screen
        name="index"
        options={{
          title: 'Home',
          tabBarIcon: ({ size, color }) => <Home size={size} color={color} />,
        }}
      />
      <Tabs.Screen
        name="alarms"
        options={{
          title: 'Alarms',
          tabBarIcon: ({ size, color }) => <Bell size={size} color={color} />,
        }}
      />
      <Tabs.Screen
        name="puzzles"
        options={{
          title: 'Puzzles',
          tabBarIcon: ({ size, color }) => <Brain size={size} color={color} />,
        }}
      />
      <Tabs.Screen
        name="rewards"
        options={{
          title: 'Rewards',
          tabBarIcon: ({ size, color }) => <Gift size={size} color={color} />,
        }}
      />
      <Tabs.Screen
        name="profile"
        options={{
          title: 'Profile',
          tabBarIcon: ({ size, color }) => <User size={size} color={color} />,
        }}
      />
      <Tabs.Screen
        name="settings"
        options={{
          title: 'Settings',
          tabBarIcon: ({ size, color }) => <Settings size={size} color={color} />,
        }}
      />
    </Tabs>
  );
}
