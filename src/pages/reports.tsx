import React from 'react';
import { motion } from 'framer-motion';
import { Download, FileText, Search } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from '@/components/ui/table';
import { Badge } from '@/components/ui/badge';

const Reports = () => {
  const reports = [
    { id: '1', date: '2024-05-20', class: '10-A', present: 28, absent: 2, late: 0, status: 'Completed' },
    { id: '2', date: '2024-05-19', class: '10-A', present: 25, absent: 3, late: 2, status: 'Completed' },
    { id: '3', date: '2024-05-18', class: '11-B', present: 30, absent: 0, late: 1, status: 'Completed' },
    { id: '4', date: '2024-05-17', class: '12-C', present: 22, absent: 5, late: 3, status: 'Completed' },
  ];

  return (
    <motion.div 
      initial={{ opacity: 0, x: 20 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.5 }}
      className="space-y-6"
    >
      <header className="flex flex-col md:flex-row md:items-center justify-between gap-4">
        <div>
          <h1 className="text-3xl font-extrabold text-slate-900 tracking-tight">Attendance Reports</h1>
          <p className="text-slate-500 mt-1">Review historical attendance data and export summaries.</p>
        </div>
        <Button variant="outline" className="border-slate-200 h-11 px-6 rounded-xl">
          <Download className="w-4 h-4 mr-2" />
          Export All (CSV)
        </Button>
      </header>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <Card className="border-none shadow-sm bg-gradient-to-br from-blue-600 to-blue-700 text-white">
          <CardContent className="p-6">
            <p className="text-blue-100 text-sm font-medium">Avg. Attendance</p>
            <h3 className="text-3xl font-bold mt-1">92.4%</h3>
            <div className="mt-4 h-2 w-full bg-white/20 rounded-full overflow-hidden">
              <div className="h-full bg-white w-[92.4%]" />
            </div>
          </CardContent>
        </Card>
        <Card className="border-none shadow-sm">
          <CardContent className="p-6">
            <p className="text-slate-500 text-sm font-medium">Total Absences (May)</p>
            <h3 className="text-3xl font-bold mt-1 text-rose-600">142</h3>
            <p className="text-xs text-slate-400 mt-2">Across all grades and sections</p>
          </CardContent>
        </Card>
        <Card className="border-none shadow-sm">
          <CardContent className="p-6">
            <p className="text-slate-500 text-sm font-medium">Late Comers (May)</p>
            <h3 className="text-3xl font-bold mt-1 text-amber-500">68</h3>
            <p className="text-xs text-slate-400 mt-2">5.2% of total learners</p>
          </CardContent>
        </Card>
      </div>

      <Card className="border-none shadow-sm">
        <CardHeader className="p-6 border-b border-slate-50">
          <div className="flex flex-col md:flex-row gap-4 items-center justify-between">
            <div className="relative w-full md:w-96">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400 w-4 h-4" />
              <Input 
                placeholder="Search reports..." 
                className="pl-10 h-11 bg-slate-50 border-none focus-visible:ring-1 focus-visible:ring-blue-200"
              />
            </div>
          </div>
        </CardHeader>
        <CardContent className="p-0">
          <Table>
            <TableHeader className="bg-slate-50/50">
              <TableRow>
                <TableHead>Date</TableHead>
                <TableHead>Class Section</TableHead>
                <TableHead>Present</TableHead>
                <TableHead>Absent</TableHead>
                <TableHead>Late</TableHead>
                <TableHead>Status</TableHead>
                <TableHead className="text-right">Action</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {reports.map((report) => (
                <TableRow key={report.id} className="hover:bg-slate-50/30">
                  <TableCell className="font-medium text-slate-700">{report.date}</TableCell>
                  <TableCell className="font-bold text-slate-900">{report.class}</TableCell>
                  <TableCell className="text-emerald-600 font-semibold">{report.present}</TableCell>
                  <TableCell className="text-rose-600 font-semibold">{report.absent}</TableCell>
                  <TableCell className="text-amber-600 font-semibold">{report.late}</TableCell>
                  <TableCell>
                    <Badge className="bg-blue-50 text-blue-700 hover:bg-blue-100 border-none rounded-lg">
                      {report.status}
                    </Badge>
                  </TableCell>
                  <TableCell className="text-right">
                    <Button variant="ghost" size="sm" className="h-8 w-8 p-0 text-slate-400 hover:text-blue-600">
                      <FileText className="h-4 w-4" />
                    </Button>
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

export default Reports;