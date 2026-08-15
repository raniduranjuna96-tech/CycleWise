import { useState } from 'react';
import {
  View,
  Text,
  FlatList,
  TouchableOpacity,
  StyleSheet,
  Button,
} from 'react-native';
import { CYCLE_LOGS, PHASE_COLORS } from '../data/cycleLogs';

const PHASES = ['All', 'Menstrual', 'Follicular', 'Ovulation', 'Luteal'];

export default function HomeScreen({ navigation }) {
  // useState hook #1: controls which phase filter is currently active
  const [filterPhase, setFilterPhase] = useState('All');

  const displayedLogs =
    filterPhase === 'All'
      ? CYCLE_LOGS
      : CYCLE_LOGS.filter((log) => log.phase === filterPhase);

  const cyclePhaseFilter = () => {
    const nextIndex = (PHASES.indexOf(filterPhase) + 1) % PHASES.length;
    setFilterPhase(PHASES[nextIndex]);
  };

  return (
    <View style={styles.container}>
      <View style={styles.toolbar}>
        <Button
          title={filterPhase === 'All' ? 'Filter: All' : `Filter: ${filterPhase}`}
          onPress={cyclePhaseFilter}
        />
        <Button title="Settings" onPress={() => navigation.navigate('Settings')} />
      </View>

      <FlatList
        data={displayedLogs}
        keyExtractor={(item) => item.id}
        contentContainerStyle={styles.listContent}
        renderItem={({ item }) => (
          <TouchableOpacity
            style={[styles.card, { borderLeftColor: PHASE_COLORS[item.phase] }]}
            onPress={() => navigation.navigate('Detail', { log: item })}
          >
            <View style={{ flex: 1 }}>
              <Text style={styles.date}>
                {item.date} · Day {item.cycleDay}
              </Text>
              <Text style={styles.phase}>{item.phase}</Text>
            </View>
            <Text style={styles.mood}>{item.mood}</Text>
          </TouchableOpacity>
        )}
        ListEmptyComponent={
          <Text style={styles.empty}>No entries logged for this phase yet.</Text>
        }
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#fdf6f8' },
  toolbar: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    padding: 12,
  },
  listContent: { paddingBottom: 24 },
  card: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#fff',
    marginHorizontal: 12,
    marginVertical: 6,
    padding: 14,
    borderRadius: 10,
    borderLeftWidth: 5,
    elevation: 2,
    shadowColor: '#000',
    shadowOpacity: 0.05,
    shadowRadius: 4,
  },
  date: { fontSize: 15, fontWeight: '600', color: '#222' },
  phase: { fontSize: 13, color: '#777', marginTop: 2 },
  mood: { fontSize: 14, fontWeight: '600', color: '#555' },
  empty: { textAlign: 'center', marginTop: 40, color: '#999' },
});
