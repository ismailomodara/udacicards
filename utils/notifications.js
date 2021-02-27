import * as Permissions from 'expo-permissions';
import * as Notifications from 'expo-notifications'
import AsyncStorage from '@react-native-async-storage/async-storage';


const NOTIFICATION_KEY = "UDACICARDS_NOTIFICATIONS";

export const clearLocalNotification = () => {
    return AsyncStorage.removeItem(NOTIFICATION_KEY)
        .then(Notifications.cancelAllScheduledNotificationsAsync())
}

export const createNotification = () => {
    return {
        title: "It's time for your quiz",
        body: "Have you done your quiz today?",
        android: {
            sound: true,
            priority: 'high',
            sticky: false,
            vibrate: true
        },
        ios: {
            sound: true
        }
    }
}

export const setLocalNotification = () => {
    AsyncStorage.getItem(NOTIFICATION_KEY)
        .then(JSON.parse)
        .then((data) => {
            if (data === null) {
                Permissions.askAsync(Permissions.NOTIFICATIONS).then(({ status }) => {
                    if (status === 'granted') {
                        Notifications.cancelAllScheduledNotificationsAsync().then(() => {
                            let tomorrow = new Date()
                            tomorrow.setDate(tomorrow.getDate() + 1)
                            tomorrow.setHours(20)
                            tomorrow.setMinutes(0)

                            Notifications.scheduleNotificationAsync(
                                createNotification(),
                                { time: tomorrow, repeat: 'day'}
                            );

                            AsyncStorage.setItem(NOTIFICATION_KEY, JSON.stringify(true))
                        })
                    }
                });
            }
        });
}