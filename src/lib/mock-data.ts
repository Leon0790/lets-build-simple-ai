import { Learner, AttendanceRecord } from '../types';

export const MOCK_LEARNERS: Learner[] = [
  { id: '1', studentId: 'S1001', name: 'Alice Johnson', grade: '10', section: 'A', status: 'active' },
  { id: '2', studentId: 'S1002', name: 'Bob Smith', grade: '10', section: 'A', status: 'active' },
  { id: '3', studentId: 'S1003', name: 'Charlie Brown', grade: '10', section: 'B', status: 'active' },
  { id: '4', studentId: 'S1004', name: 'Diana Prince', grade: '11', section: 'A', status: 'active' },
  { id: '5', studentId: 'S1005', name: 'Edward Norton', grade: '11', section: 'A', status: 'active' },
  { id: '6', studentId: 'S1006', name: 'Fiona Apple', grade: '12', section: 'C', status: 'active' },
];

export const MOCK_ATTENDANCE: AttendanceRecord[] = [
  { id: 'a1', learnerId: '1', date: '2024-05-20', status: 'present' },
  { id: 'a2', learnerId: '2', date: '2024-05-20', status: 'absent' },
  { id: 'a3', learnerId: '3', date: '2024-05-20', status: 'present' },
  { id: 'a4', learnerId: '1', date: '2024-05-21', status: 'present' },
  { id: 'a5', learnerId: '2', date: '2024-05-21', status: 'late' },
];