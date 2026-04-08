import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { colors } from '../constants/colors';

type Props = {
  title: string;
  items: string[];
  kcal: number;
};

export const MealCard: React.FC<Props> = ({ title, items, kcal }) => (
  <View style={styles.card}>
    <View style={styles.content}>
      <Text style={styles.title}>{title}</Text>
      {items.map((item, index) => (
        <Text key={index} style={styles.item}>{item}</Text>
      ))}
    </View>
    <Text style={styles.kcal}>{kcal} kcal</Text>
  </View>
);

const styles = StyleSheet.create({
  card: {
    backgroundColor: '#fff',
    borderRadius: 16,
    padding: 16,
    marginBottom: 12,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.08,
    shadowRadius: 8,
    elevation: 3,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'stretch', 
  },
  content: { 
    flex: 1 
  },
  title: { fontSize: 16, color: '#111827' },
  item: { fontSize: 15, color: '#111827', marginTop: 2 },
  kcal: { fontSize: 17, fontWeight: '700', color: '#111827', marginLeft: 12, alignSelf: 'flex-end', 
},
});