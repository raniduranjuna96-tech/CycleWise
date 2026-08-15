// Sample / mock data representing a user's logged cycle entries.
// In a real Sprint 2 build this would come from local storage or an API,
// but for Sprint 1 we use a static local array as required by the brief.

export const CYCLE_LOGS = [
  { id: '1', date: '2026-08-01', cycleDay: 1, phase: 'Menstrual', symptoms: ['Cramps', 'Fatigue'], mood: 'Low', flow: 'Heavy', note: 'Skipped PE class, rested at home.' },
  { id: '2', date: '2026-08-02', cycleDay: 2, phase: 'Menstrual', symptoms: ['Cramps'], mood: 'Okay', flow: 'Medium', note: 'Took paracetamol, manageable.' },
  { id: '3', date: '2026-08-03', cycleDay: 3, phase: 'Menstrual', symptoms: ['Fatigue'], mood: 'Okay', flow: 'Light', note: 'Back to normal activities.' },
  { id: '4', date: '2026-08-08', cycleDay: 8, phase: 'Follicular', symptoms: [], mood: 'Good', flow: 'None', note: 'Energy levels rising.' },
  { id: '5', date: '2026-08-12', cycleDay: 12, phase: 'Follicular', symptoms: ['Mild headache'], mood: 'Good', flow: 'None', note: 'Busy exam week, slept less.' },
  { id: '6', date: '2026-08-15', cycleDay: 15, phase: 'Ovulation', symptoms: ['Bloating'], mood: 'Good', flow: 'None', note: 'Noticed slight bloating around mid-cycle.' },
  { id: '7', date: '2026-08-19', cycleDay: 19, phase: 'Luteal', symptoms: ['Mood swings'], mood: 'Irritable', flow: 'None', note: 'Felt more irritable than usual.' },
  { id: '8', date: '2026-08-22', cycleDay: 22, phase: 'Luteal', symptoms: ['Bloating', 'Fatigue'], mood: 'Low', flow: 'None', note: 'Craving sweets, low energy.' },
  { id: '9', date: '2026-08-25', cycleDay: 25, phase: 'Luteal', symptoms: ['Breast tenderness'], mood: 'Low', flow: 'None', note: 'Typical pre-period symptoms starting.' },
  { id: '10', date: '2026-08-28', cycleDay: 28, phase: 'Luteal', symptoms: ['Cramps (mild)'], mood: 'Okay', flow: 'Spotting', note: 'Next cycle expected to start soon.' },
];

// Colour used per phase across the app so Home + Detail stay visually consistent.
export const PHASE_COLORS = {
  Menstrual: '#e57373',
  Follicular: '#81c784',
  Ovulation: '#ffb74d',
  Luteal: '#9575cd',
};
