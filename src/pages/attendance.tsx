import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Check, X, Clock, Save, Calendar as CalendarIcon, ChevronLeft, ChevronRight } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from '@/components/ui/table';
import { MOCK_LEARNERS } from '@/lib/mock-data';
import { AttendanceStatus } from '@/types';
import { cn } from '@/lib/utils';
import { format, addDays, subDays } from 'date-fns';
import { toast } from 'sonner';

const Attendance = () => {
  const [selectedDate, setSelectedDate] = useState(new Date());
  const [attendance, setAttendance] = useState<Record<string, AttendanceStatus>>({});

  const handleStatusChange = (learnerId: string, status: AttendanceStatus) => {
    setAttendance(prev => ({
      ...prev,
      [learnerId]: status
    }));
  };

  const handleSave = () => {
    toast.success('Attendance records saved successfully for ' + format(selectedDate, 'MMM d, yyyy'));
  };

  const learnersInClass = MOCK_LEARNERS; // For demo, show all

  return (
    <motion.div 
      initial={{ opacity: 0, x: 20 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.5 }}
      className="space-y-6"
    >
      <header className="flex flex-col md:flex-row md:items-center justify-between gap-4">
        <div>
          <h1 className="text-3xl font-extrabold text-slate-900 tracking-tight">Register Attendance</h1>
          <p className="text-slate-500 mt-1">Mark daily attendance for all registered learners.</p>
        </div>
        <Button 
          onClick={handleSave}
          className="bg-emerald-600 hover:bg-emerald-700 text-white rounded-xl h-11 px-6 shadow-md shadow-emerald-100"
        >
          <Save className="w-4 h-4 mr-2" />
          Save Records
        </Button>
      </header>

      <Card className="border-none shadow-sm mb-6">
        <CardContent className="p-4">
          <div className="flex items-center justify-between max-w-xs mx-auto">
            <Button 
              variant="ghost" 
              size="icon" 
              onClick={() => setSelectedDate(subDays(selectedDate, 1))}
              className="hover:bg-slate-100 rounded-full"
            >
              <ChevronLeft className="w-5 h-5" />
            </Button>
            <div className="flex items-center gap-3 px-4 py-2 bg-slate-50 rounded-2xl border border-slate-100">
              <CalendarIcon className="w-4 h-4 text-blue-600" />
              <span className="font-bold text-slate-700">{format(selectedDate, 'EEEE, MMM d')}</span>
            </div>
            <Button 
              variant="ghost" 
              size="icon" 
              onClick={() => setSelectedDate(addDays(selectedDate, 1))}
              className="hover:bg-slate-100 rounded-full"
            >
              <ChevronRight className="w-5 h-5" />
            </Button>
          </div>
        </CardContent>
      </Card>

      <Card className="border-none shadow-sm">
        <CardContent className="p-0">
          <Table>
            <TableHeader className="bg-slate-50/50">
              <TableRow>
                <TableHead className="w-[100px]">ID</TableHead>
                <TableHead>Learner Name</TableHead>
                <TableHead>Class</TableHead>
                <TableHead className="text-center">Status</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {learnersInClass.map((learner) => (
                <TableRow key={learner.id} className="hover:bg-slate-50/30">
                  <TableCell className="text-slate-500 font-medium">{learner.studentId}</TableCell>
                  <TableCell>
                    <span className="font-semibold text-slate-900">{learner.name}</span>
                  </TableCell>
                  <TableCell>{learner.grade}-{learner.section}</TableCell>
                  <TableCell>
                    <div className="flex items-center justify-center gap-2">
                      <button
                        onClick={() => handleStatusChange(learner.id, 'present')}
                        className={cn(
                          "w-10 h-10 rounded-xl flex items-center justify-center transition-all",
                          attendance[learner.id] === 'present' 
                            ? "bg-emerald-500 text-white shadow-md shadow-emerald-100" 
                            : "bg-slate-100 text-slate-400 hover:bg-slate-200"
                        )}
                        title="Present"
                      >
                        <Check className="w-5 h-5" />
                      </button>
                      <button
                        onClick={() => handleStatusChange(learner.id, 'absent')}
                        className={cn(
                          "w-10 h-10 rounded-xl flex items-center justify-center transition-all",
                          attendance[learner.id] === 'absent' 
                            ? "bg-rose-500 text-white shadow-md shadow-rose-100" 
                            : "bg-slate-100 text-slate-400 hover:bg-slate-200"
                        )}
                        title="Absent"
                      >
                        <X className="w-5 h-5" />
                      </button>
                      <button
                        onClick={() => handleStatusChange(learner.id, 'late')}
                        className={cn(
                          "w-10 h-10 rounded-xl flex items-center justify-center transition-all",
                          attendance[learner.id] === 'late' 
                            ? "bg-amber-500 text-white shadow-md shadow-amber-100" 
                            : "bg-slate-100 text-slate-400 hover:bg-slate-200"
                        )}
                        title="Late"
                      >
                        <Clock className="w-5 h-5" />
                      </button>
                    </div>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </CardContent>
      </Card>
    </motion.div>
  );
};

export default Attendance;