
const getDaysUntilDayOfWeek = (dayOfWeek : any) => {
    const daysOfWeek1 = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
    const desiredDayIndex = daysOfWeek1.indexOf(dayOfWeek);
    const currentDayIndex = new Date().getDay();
    return (desiredDayIndex + 7 - currentDayIndex) % 7;
};

export default function getDayOfWeekDate(dayOfWeek : any, time : any){
    const today = new Date();
    const daysUntilDesiredDay = getDaysUntilDayOfWeek(dayOfWeek);

    if (daysUntilDesiredDay > 0) {
        today.setDate(today.getDate() + daysUntilDesiredDay);
    } else if (daysUntilDesiredDay === 0) {
        if (today.getHours() >= parseInt(time.split(":")[0])) {
            today.setDate(today.getDate() + 7);
        }
    }

    const year = today.getFullYear();
    const month = String(today.getMonth() + 1).padStart(2, "0");
    const date = String(today.getDate()).padStart(2, "0");

    return `${year}-${month}-${date}T${time}`;
};



