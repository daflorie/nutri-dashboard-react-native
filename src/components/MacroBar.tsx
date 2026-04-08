import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

type Props = {
  label: string;
  current: number;
  total: number;
  unit: string;
};

export const MacroBar: React.FC<Props> = ({ label, current, total, unit }) => {
  const percentage = Math.min(Math.round((current / total) * 100), 100);

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.label}>{label}</Text>
        <Text style={styles.values}>
          {current} / {total}{unit}
        </Text>
      </View>
      <View style={styles.barBg}>
        <View style={[styles.barFill, { width: `${percentage}%` }]} />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: { marginBottom: 14 },
  header: { flexDirection: 'row', justifyContent: 'space-between', marginBottom: 4 },
  label: { fontSize: 15, fontWeight: '600', color: '#111827' },
  values: { fontSize: 15, color: '#64748b' },
  barBg: { height: 8, backgroundColor: '#e6f0e9', borderRadius: 999, overflow: 'hidden' },
  barFill: { height: '100%', backgroundColor: '#54b977', borderRadius: 999 },
});