import PushNotification from "react-native-push-notification";

const showNotification = ( title, message ) => {
    PushNotification.localNotification({
        title: title,
        message: message,
        channelId: 1,
    });
};

const handleScheduleNotification = ( title, message ) => {
    PushNotification.localNotificationSchedule({
        title: title,
        message: message,
        date: new Date(Datw.now() + 5 * 1000)   
    })
}

const handleCancel = () => {
    PushNotification.cancelAllLocalNotifications();
}

export { showNotification, handleScheduleNotification, handleCancel}