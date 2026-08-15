import { useState } from 'react';
import { View, Text, StyleSheet, Button } from 'react-native';

export default function SettingsScreen() {
  // useState hook #2: controls the average cycle length used for estimates
  const [cycleLength, setCycleLength] = useState(28);

  const decrease = () => setCycleLength((prev) => Math.max(21, prev - 1));
  const increase = () => setCycleLength((prev) => Math.min(35, prev + 1));

  return (
    <View style={styles.container}>
      <Text style={styles.label}>Average Cycle Length</Text>
      <Text style={styles.value}>{cycleLength} days</Text>

      <View style={styles.row}>
        <Button title="−" onPress={decrease} />
        <View style={{ width: 20 }} />
        <Button title="+" onPress={increase} />
      </View>

      <Text style={styles.hint}>
        This value is used to estimate your next expected cycle start date.
        Typical cycles range from 21 to 35 days.
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, padding: 20, backgroundColor: '#fff' },
  label: { fontSize: 16, color: '#666' },
  value: { fontSize: 28, fontWeight: '700', marginVertical: 8 },
  row: { flexDirection: 'row', marginTop: 12 },
  hint: { marginTop: 20, color: '#777', lineHeight: 20 },
});
