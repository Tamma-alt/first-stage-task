// function to get the day of the week

function getCurrentDayOfWeek() {
    const days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday']
    const currentDay = new Date();
    const dayOfWeekIndex = currentDay.getDay();
    return days[dayOfWeekIndex];
}

const dayOfTheWeekElement = document.getElementById('dayOfWeek');
const currentDayOfWeek = getCurrentDayOfWeek();
dayOfTheWeekElement.textContent = `${currentDayOfWeek}.`

// function to get curent UTC Time in milliseconds
function getCurrentUTCTime () {
    const today = new Date();
    const utcTimeInMilliseconds = today.getTime();
    return utcTimeInMilliseconds;
}

const utcTime = document.getElementById('utcTime');
const currentUTCTime = getCurrentUTCTime();

utcTime.textContent = currentUTCTime.toString();