import * as Notifications from 'expo-notifications';
import { ScheduleItem } from './scheduleData';

export const NotificationService = {
    async requestPermission() {
        try {
            const { status } = await Notifications.requestPermissionsAsync();

            if (status === 'granted') {
                console.log('Notification permission granted.');
                return true;
            } else {
                console.warn('Notification permission denied.');
                return false;
            }
        } catch (error) {
            console.error('Failed to request notification permission:', error);
            return false;
        }
    },

    async scheduleNotification(item: ScheduleItem) {
        try {
            const [hours, minutes] = item.time.split(':').map(Number);
            const scheduleTime = new Date();

            // Schedule for today if the time hasn't passed, otherwise for tomorrow
            if (scheduleTime.getHours() > hours || 
                (scheduleTime.getHours() === hours && scheduleTime.getMinutes() >= minutes)) {
                scheduleTime.setDate(scheduleTime.getDate() + 1);
            }

            scheduleTime.setHours(hours, minutes, 0, 0);

            await Notifications.scheduleNotificationAsync({
                content: {
                    title: `${item.activity} - ${item.time}`,
                    body: `It's time for your ${item.category}: ${item.activity}`,
                    sound: true,
                    data: { id: Math.floor(Math.random() * 10000) },
                },
                trigger: scheduleTime,
            });

            console.log('Notification scheduled successfully.');
        } catch (error) {
            console.error('Failed to schedule notification:', error);
        }
    },

    async testNotification() {
        try {
            const now = new Date();
            now.setSeconds(now.getSeconds() + 5);

            await Notifications.scheduleNotificationAsync({
                content: {
                    title: 'Test Notification',
                    body: 'This is a test notification! Your schedule alerts will look like this.',
                    sound: true,
                    data: { id: 999999 },
                },
                trigger: { seconds: 5 }, // Trigger in 5 seconds
            });

            console.log('Test notification scheduled successfully.');
        } catch (error) {
            console.error('Failed to send test notification:', error);
        }
    },

    async cancelAllNotifications() {
        try {
            await Notifications.cancelAllScheduledNotificationsAsync();
            console.log('All notifications canceled.');
        } catch (error) {
            console.error('Failed to cancel notifications:', error);
        }
    },
};
