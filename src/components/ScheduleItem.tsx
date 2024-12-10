import * as React from "react";
import { StyleSheet } from "react-nativescript";
import { ScheduleItem as ScheduleItemType } from '../utils/scheduleData';

const categoryColors = {
    prayer: '#4CAF50',
    workout: '#FF5722',
    meal: '#2196F3',
    work: '#9C27B0',
    rest: '#607D8B'
};

export function ScheduleItem({ item }: { item: ScheduleItemType }) {
    return (
        <gridLayout style={[styles.scheduleItem, { borderLeftColor: categoryColors[item.category] }]} columns="*, auto">
            <stackLayout col={0}>
                <label className="text-lg font-bold" style={{ color: '#2c3e50' }}>
                    {item.activity}
                </label>
                <label className="text-sm" style={{ color: '#7f8c8d' }}>
                    {item.time} {item.duration ? `- ${item.duration}` : ''}
                </label>
            </stackLayout>
            <label col={1} className="text-sm" style={{ color: '#95a5a6' }}>
                {item.category}
            </label>
        </gridLayout>
    );
}

const styles = StyleSheet.create({
    scheduleItem: {
        marginHorizontal: 16,
        marginVertical: 8,
        padding: 16,
        backgroundColor: '#ffffff',
        borderRadius: 8,
        borderLeftWidth: 4,
        elevation: 2,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,
    }
});