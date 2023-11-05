export interface CourseData {
    id: number;
    title: string;
    course_code: string;
}

export const dummyCourseData: CourseData[] = [
    {
        id: 1,
        title: "Data Structures",
        course_code: "COP 4530",
    },
    {
        id: 2,
        title: "Computer Logic and Design",
        course_code: "CDA 3201",
    },
]