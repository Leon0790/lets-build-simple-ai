export type AttendanceStatus = 'present' | 'absent' | 'late' | 'excused';

export interface Learner {
  id: string;
  studentId: string;
  name: string;
  grade: string;
  section: string;
  status: 'active' | 'inactive';
}

export interface AttendanceRecord {
  id: string;
  learnerId: string;
  date: string;
  status: AttendanceStatus;
}

export interface AttendanceSummary {
  date: string;
  present: number;
  absent: number;
  late: number;
  total: number;
}