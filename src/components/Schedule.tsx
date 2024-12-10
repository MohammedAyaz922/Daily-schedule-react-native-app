import * as React from "react";
import { useEffect, useState } from "react";
import { StyleSheet } from "react-nativescript";
import { scheduleItems } from '../utils/scheduleData';
import { NotificationService } from '../utils/notificationService';
import { ScheduleItem } from './ScheduleItem';
import { Color } from "@nativescript/core";

export function Schedule() {
    const [isNotificationsEnabled, setIsNotificationsEnabled] = useState(false);

    useEffect(() => {
        setupNotifications();
    }, []);

    const setupNotifications = async () => {
        try {
            const hasPermission = await NotificationService.requestPermission();
            setIsNotificationsEnabled(hasPermission);
            
            if (hasPermission) {
                scheduleItems.forEach(item => {
                    NotificationService.scheduleNotification(item);
                });
            }
        } catch (error) {
            console.error('Failed to setup notifications:', error);
        }
    };

    const handleTestNotification = () => {
        NotificationService.testNotification();
    };

    return (
        <scrollView backgroundColor={new Color("#f5f6fa")}>
            <stackLayout style={styles.container}>
                <stackLayout style={styles.header}>
                    <label className="text-2xl font-bold" style={styles.title}>
                        Daily Schedule
                    </label>
                    <button 
                        text={isNotificationsEnabled ? "Test Notification" : "Enable Notifications"} 
                        onTap={isNotificationsEnabled ? handleTestNotification : setupNotifications}
                        style={styles.testButton}
                    />
                </stackLayout>

                <label className="text-sm mb-4" style={styles.subtitle}>
                    {isNotificationsEnabled 
                        ? "Notifications are enabled. You'll receive alerts for your scheduled activities." 
                        : "Enable notifications to receive schedule alerts"}
                </label>

                {scheduleItems.map((item, index) => (
                    <ScheduleItem key={index} item={item} />
                ))}
            </stackLayout>
        </scrollView>
    );
}

const styles = StyleSheet.create({
    container: {
        padding: 16,
    },
    header: {
        marginBottom: 16,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
    },
    title: {
        color: '#2c3e50',
        marginBottom: 8,
    },
    subtitle: {
        color: '#7f8c8d',
        textAlign: 'center',
    },
    testButton: {
        backgroundColor: '#3498db',
        color: 'white',
        padding: 8,
        borderRadius: 4,
        fontSize: 14,
    }
});