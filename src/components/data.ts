export interface ClassData {
    id: number;
    title: string;
    times: string;
    professor: string;
  }
  
  export const dummyClassData: ClassData[] = [
    {
      id: 1,
      title: 'Math 101',
      times: 'Mon, Wed, Fri 9:00 AM',
      professor: 'Dr. Smith',
    },
    {
      id: 2,
      title: 'Math 101',
      times: 'Tues, Thurs, Fri 9:00 AM',
      professor: 'Dr. Smith',
    },
    {
      id: 3,
      title: 'History 202',
      times: 'Tue, Thu 1:00 PM',
      professor: 'Prof. Johnson',
    },
    {
      id: 4,
      title: 'English 110',
      times: 'Mon, Wed 11:00 AM',
      professor: 'Dr. Brown',
    },
    {
      id: 5,
      title: 'Physics 201',
      times: 'Tue, Thu 10:30 AM',
      professor: 'Dr. Davis',
    },
    {
      id: 6,
      title: 'Computer Science 301',
      times: 'Mon, Wed, Fri 3:30 PM',
      professor: 'Prof. Wilson',
    },
    {
      id: 7,
      title: 'Biology 110',
      times: 'Tue, Thu 9:00 AM',
      professor: 'Dr. Johnson',
    },
  ];
  