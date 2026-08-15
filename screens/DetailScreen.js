import { View, Text, StyleSheet } from 'react-native';
import { PHASE_COLORS } from '../data/cycleLogs';

export default function DetailScreen({ route }) {
  const { log } = route.params;

  return (
    <View style={styles.container}>
      <View style={[styles.badge, { backgroundColor: PHASE_COLORS[log.phase] }]}>
        <Text style={styles.badgeText}>{log.phase}</Text>
      </View>

      <Text style={styles.date}>{log.date}</Text>
      <Text style={styles.dayLabel}>Cycle Day {log.cycleDay}</Text>

      <View style={styles.divider} />

      <Text style={styles.row}>
        <Text style={styles.rowLabel}>Flow: </Text>
        {log.flow}
      </Text>
      <Text style={styles.row}>
        <Text style={styles.rowLabel}>Mood: </Text>
        {log.mood}
      </Text>
      <Text style={styles.row}>
        <Text style={styles.rowLabel}>Symptoms: </Text>
        {log.symptoms.length ? log.symptoms.join(', ') : 'None logged'}
      </Text>

      <Text style={styles.note}>{log.note}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, padding: 20, backgroundColor: '#fff' },
  badge: {
    alignSelf: 'flex-start',
    paddingHorizontal: 12,
    paddingVertical: 4,
    borderRadius: 20,
    marginBottom: 12,
  },
  badgeText: { color: '#fff', fontWeight: '700', fontSize: 12 },
  date: { fontSize: 22, fontWeight: '700', color: '#222' },
  dayLabel: { fontSize: 15, color: '#666', marginTop: 2 },
  divider: { height: 1, backgroundColor: '#eee', marginVertical: 16 },
  row: { fontSize: 16, marginVertical: 4, color: '#333' },
  rowLabel: { fontWeight: '700', color: '#555' },
  note: {
    fontSize: 15,
    color: '#444',
    marginTop: 16,
    lineHeight: 22,
    fontStyle: 'italic',
  },
});
