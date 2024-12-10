export interface ScheduleItem {
    time: string;
    activity: string;
    duration?: string;
    category?: 'prayer' | 'workout' | 'meal' | 'work' | 'rest';
}

export const scheduleItems: ScheduleItem[] = [
    { time: '5:30', activity: 'Wake up', category: 'rest' },
    { time: '5:45', activity: 'Namaz', category: 'prayer' },
    { time: '6:00', activity: 'First workout', category: 'workout' },
    { time: '8:00', activity: 'Breakfast', category: 'meal' },
    { time: '8:00', activity: 'Build projects', duration: '12:00', category: 'work' },
    { time: '12:30', activity: 'Lunch', category: 'meal' },
    { time: '13:00', activity: '2nd HR', category: 'work' },
    { time: '13:00', activity: 'DSA', duration: '16:00', category: 'work' },
    { time: '17:00', activity: 'Second workout', category: 'workout' },
    { time: '17:15', activity: 'ASR', category: 'prayer' },
    { time: '17:30', activity: 'Research on Investments', duration: '18:30', category: 'work' },
    { time: '18:45', activity: 'Maghrib', category: 'prayer' },
    { time: '18:45', activity: 'Build Projects', duration: '21:30', category: 'work' },
    { time: '21:30', activity: 'Dinner', category: 'meal' },
    { time: '22:00', activity: 'ISHA', category: 'prayer' },
    { time: '23:00', activity: 'Sleep', category: 'rest' }
];