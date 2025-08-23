export const scheduleAlarm = (todo) => {
  if (!todo.isAlarmSet || !todo.dueDate) {
    return;
  }          

  const alarmTime = new Date(todo.dueDate).getTime();
  const now = new Date().getTime();
  const timeUntilAlarm = alarmTime - now;

  if (timeUntilAlarm > 0) {
    // Use setTimeout to trigger the alarm
    setTimeout(() => {
      // Check for Notification API permission
      if (Notification.permission === 'granted') {
        new Notification('To-Do Alarm!', {
          body: `Reminder: ${todo.text}`,
          icon: '/path/to/icon.png', // Optional: provide a path to an icon
        });
      }
      
      // Play an audible alarm (optional)
      const alarmSound = new Audio('/path/to/alarm.mp3'); // Create an audio element
      alarmSound.play();

      console.log(`Alarm for "${todo.text}" triggered!`);
    }, timeUntilAlarm);
  }
};

// Request notification permission from the user
export const requestNotificationPermission = () => {
  if ('Notification' in window) {
    Notification.requestPermission();//find out if this is a windows based functions and others like it.
  }
};