import React from 'react';
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  Text,
  View,
  StyleSheet,
  TouchableOpacity,
  FlatList,
  Image, 
} from 'react-native';
import { colors } from './src/constants/colors';
import { macros, meals } from './src/constants/data';
import { CircularProgress } from './src/components/CircularProgress';
import { MacroBar } from './src/components/MacroBar';
import { MealCard } from './src/components/MealCard';


const logoImg = require('../NutriTrack/src/assets/leaf.png'); 

const App = () => {
  return (
    <SafeAreaView style={styles.container}>
      <StatusBar barStyle="dark-content" backgroundColor="#EAF7E6" />

      <View style={styles.header}>
        <View style={styles.logoContainer}>
          <Text style={styles.logo}>NutriTrack</Text>
          <Image 
            source={logoImg} 
            style={styles.logoImage} 
          />
        </View>
      </View>

      <ScrollView 
        style={styles.scroll} 
        showsVerticalScrollIndicator={false}
        contentContainerStyle={styles.scrollContent}
      >
        <View style={styles.mainContent}>

          <View style={styles.topContainer}>
            <CircularProgress />

            <View style={styles.macrosContainer}>
              {macros.map((macro, index) => (
                <MacroBar
                  key={index}
                  label={macro.label}
                  current={macro.current}
                  total={macro.total}
                  unit={macro.unit}
                />
              ))}
            </View>
          </View>

          {/* Tabs */}
          <View style={styles.tabs}>
            {['TODAY', 'HISTORY', 'FOODS', 'SETTINGS'].map((tab) => (
              <TouchableOpacity
                key={tab}
                style={[styles.tab, tab === 'TODAY' && styles.tabActive]}
              >
                <Text style={[styles.tabText, tab === 'TODAY' && styles.tabTextActive]}>
                  {tab}
                </Text>
              </TouchableOpacity>
            ))}
          </View>

          {/* Container MEALS gray */}
          <View style={styles.mealsContainer}>
            <Text style={styles.sectionTitle}>MEALS</Text>

            <FlatList
              data={meals}
              renderItem={({ item }) => <MealCard {...item} />}
              keyExtractor={(_, index) => index.toString()}
              scrollEnabled={false}
            />

            {/* Add Meal */}
            <TouchableOpacity style={styles.addMeal}>
              <View style={styles.addCircle}>
                <Text style={styles.plus}>+</Text>
              </View>
              <Text style={styles.addText}>Add Meal</Text>
            </TouchableOpacity>

            {/* LOG FOOD */}
            <TouchableOpacity style={styles.logButton}>
              <Text style={styles.logText}>LOG FOOD</Text>
            </TouchableOpacity>
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: { 
    flex: 1, 
    backgroundColor: '#EAF7E6' 
  },
  header: {
    backgroundColor: '#EAF7E6',
    paddingVertical: 15,
    alignItems: 'center',
    paddingTop: 50,
    zIndex: 10,
  },
  logoContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },
  logo: {
    fontSize: 28,
    fontWeight: '800',
    color: '#111827',
  },
  logoImage: {
    width: 30,   
    height: 70,  
    marginLeft: 3,
    resizeMode: 'contain',
  },
  scroll: { flex: 1 },
  scrollContent: { 
    paddingBottom: 0 
  },
  mainContent: { 
    paddingHorizontal: 20, 
    paddingTop: 10,
  },
  topContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginBottom: 32,
    marginTop: 10,
  },
  macrosContainer: {
    flex: 1,
    paddingLeft: 30,
  },
  tabs: {
    flexDirection: 'row',
    borderBottomColor: '#e5e7eb',
    backgroundColor: '#fff',
    marginLeft: -20,
    marginRight: -20,
    paddingHorizontal: 20,
  },
  tab: { 
    flex: 1, 
    paddingVertical: 14, 
    alignItems: 'center' 
  },
  tabActive: { 
    borderBottomWidth: 3, 
    borderBottomColor: colors.primaryGreen 
  },
  tabText: { 
    fontSize: 15, 
    fontWeight: '600', 
    color: '#64748b' 
  },
  tabTextActive: { 
    color: colors.primaryGreen 
  },
  mealsContainer: {
    backgroundColor: '#EAEEEF',
    marginLeft: -20,
    marginRight: -20,
    paddingHorizontal: 20,
    paddingTop: 24,
    paddingBottom: 60,
  },
  sectionTitle: {
    fontSize: 19,
    fontWeight: '500',
    color: '#111827',
    marginBottom: 16,
  },
  addMeal: {
    backgroundColor: '#fff',
    borderRadius: 16,
    paddingVertical: 12,
    alignItems: 'center',
    marginTop: 4,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 3 },
    shadowOpacity: 0.08,
    shadowRadius: 10,
    elevation: 4,
  },
  addCircle: {
    width: 40,
    height: 40,
    borderRadius: 25,
    backgroundColor: colors.primaryGreen,
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 10,
  },
  plus: { fontSize: 26, color: '#fff', fontWeight: '600' },
  addText: { fontSize: 16.5, fontWeight: '400', color: '#000' },
  logButton: {
    backgroundColor: colors.primaryGreen,
    height: 58,
    width: 200,
    borderRadius: 30,
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 28,
    alignSelf: 'center',
  },
  logText: { color: '#fff', fontSize: 17.5, fontWeight: '500' },
});

export default App;