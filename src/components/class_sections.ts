export interface ClassSectionData {
    crn: number;
    course_id: number;
    course_title: string;
    course_code: string;
    section_number: number;
    days: number[]; 
    startTime: string;
    endTime: string;
    professor: string;
    format: string;
    location: string;
    max_seats: number;
    available_seats: number;
}

export const dummyClassSectionData: ClassSectionData[] = [
    {
        crn: 86627,
        course_id: 1,
        course_title: "Data Structures",
        course_code: "COP 4530",
        section_number: 1,
        days: [1, 3],
        startTime: "08:00",
        endTime: "09:15",
        professor: "Valentina Korzhova",
        format: "In-Person",
        location: "CPR 103",
        max_seats: 95,
        available_seats: 22,
    },
    {
        crn: 86629,
        course_id: 1,
        course_title: "Data Structures",
        course_code: "COP 4530",
        section_number: 3,
        days: [2, 4],
        startTime: "14:00",
        endTime: "15:15",
        professor: "Valentina Korzhova",
        format: "In-Person",
        location: "CHE 101",
        max_seats: 95,
        available_seats: 58,
    },
]