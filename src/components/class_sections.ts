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
        crn: 16118,
        course_id: 1,
        course_title: "Data Structures",
        course_code: "COP 4530",
        section_number: 1,
        days: [2, 4],
        startTime: "17:00",
        endTime: "18:15",
        professor: "Taseef Rahman",
        format: "In-Person",
        location: "ISA 1051",
        max_seats: 140,
        available_seats: 25,
    },
    {
        crn: 16120,
        course_id: 1,
        course_title: "Data Structures",
        course_code: "COP 4530",
        section_number: 2,
        days: [2, 4],
        startTime: "14:00",
        endTime: "15:15",
        professor: "Valentina Korzhova",
        format: "In-Person",
        location: "CWY 107",
        max_seats: 140,
        available_seats: 74,
    },
    {
        crn: 16114,
        course_id: 2,
        course_title: "Computer Logic and Design",
        course_code: "CDA 3201",
        section_number: 1,
        days: [1, 3],
        startTime: "14:00",
        endTime: "15:15",
        professor: "Taseef Rahman",
        format: "In-Person",
        location: "CHE 101",
        max_seats: 90,
        available_seats: 10,
    },
    {
        crn: 16115,
        course_id: 2,
        course_title: "Computer Logic and Design",
        course_code: "CDA 3201",
        section_number: 2,
        days: [1, 3],
        startTime: "18:30",
        endTime: "19:45",
        professor: "Taseef Rahman",
        format: "In-Person",
        location: "ISA 1061",
        max_seats: 99,
        available_seats: 56,
    },
    {
        crn: 16116,
        course_id: 2,
        course_title: "Computer Logic and Design",
        course_code: "CDA 3201",
        section_number: 3,
        days: [1, 3],
        startTime: "09:30",
        endTime: "10:45",
        professor: "Yan Zhang",
        format: "In-Person",
        location: "FAH 101",
        max_seats: 99,
        available_seats: 13,
    },
]