// dummyData.ts
export interface ClassData {
    className: string;
    classTime: string;
    professor: string;
  }
  
  export const dummyClassData: ClassData[] = [
    {
      className: 'Math 101',
      classTime: 'Mon, Wed, Fri 9:00 AM',
      professor: 'Dr. Smith',
    },
    {
      className: 'History 202',
      classTime: 'Tue, Thu 1:00 PM',
      professor: 'Prof. Johnson',
    },
    {
      className: 'English 110',
      classTime: 'Mon, Wed 11:00 AM',
      professor: 'Dr. Brown',
    },
    {
      className: 'Physics 201',
      classTime: 'Tue, Thu 10:30 AM',
      professor: 'Dr. Davis',
    },
    {
      className: 'Computer Science 301',
      classTime: 'Mon, Wed, Fri 3:30 PM',
      professor: 'Prof. Wilson',
    },
    {
      className: 'Biology 110',
      classTime: 'Tue, Thu 9:00 AM',
      professor: 'Dr. Johnson',
    },
  ];
  