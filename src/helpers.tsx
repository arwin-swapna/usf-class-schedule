export function getWeekday(day_number : number) {
    enum Weekday {Monday, Tuesday, Wednesday, Thursday, Friday, Saturday, Sunday}
    if (day_number >= 1 && day_number <= 7) {
        return Weekday[day_number - 1]
    }
    else return "Error"
}

export function convertTime(time_string : string) {
    const [hour, minute] = time_string.split(':');
    let formattedHour = parseInt(hour);
    var period;
    if (formattedHour > 12) {
        period = "PM";
        formattedHour = formattedHour - 12;
    }
    else if (formattedHour == 12) {
        period = "PM";
    }
    else {
        period = "AM";
    }

    return formattedHour + ":" + minute + " " + period
}