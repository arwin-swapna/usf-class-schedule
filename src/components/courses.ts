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
    {
        id: 3,
        title: "Computer Logic and Design Lab",
        course_code: "CDA 3201L",
    },
    {
        id: 4,
        title: "Analysis of Algorithms",
        course_code: "COT 4400"
    },
    {
        id: 5,
        title: "Secure Coding",
        course_code: "CNT 4419"
    }
]