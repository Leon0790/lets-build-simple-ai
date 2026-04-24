import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Plus, Search, Filter, MoreHorizontal, Edit, Trash2 } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { cn } from '@/lib/utils';
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from '@/components/ui/table';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';
import { MOCK_LEARNERS } from '@/lib/mock-data';
import { Badge } from '@/components/ui/badge';
import { toast } from 'sonner';

const Learners = () => {
  const [searchTerm, setSearchTerm] = useState('');
  
  const filteredLearners = MOCK_LEARNERS.filter(learner => 
    learner.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
    learner.studentId.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const handleDelete = (id: string) => {
    toast.error('Deletion is disabled in this demo version.');
  };

  return (
    <motion.div 
      initial={{ opacity: 0, x: 20 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.5 }}
      className="space-y-6"
    >
      <header className="flex flex-col md:flex-row md:items-center justify-between gap-4">
        <div>
          <h1 className="text-3xl font-extrabold text-slate-900 tracking-tight">Learners Registry</h1>
          <p className="text-slate-500 mt-1">Manage student information and enrollment details.</p>
        </div>
        <Button className="bg-blue-600 hover:bg-blue-700 text-white rounded-xl h-11 px-6 shadow-md shadow-blue-100">
          <Plus className="w-4 h-4 mr-2" />
          Add New Learner
        </Button>
      </header>

      <Card className="border-none shadow-sm">
        <CardHeader className="p-6 border-b border-slate-50">
          <div className="flex flex-col md:flex-row gap-4 items-center justify-between">
            <div className="relative w-full md:w-96">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400 w-4 h-4" />
              <Input 
                placeholder="Search by name or ID..." 
                className="pl-10 h-11 bg-slate-50 border-none focus-visible:ring-1 focus-visible:ring-blue-200"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
              />
            </div>
            <div className="flex gap-2 w-full md:w-auto">
              <Button variant="outline" className="flex-1 md:flex-none h-11 border-slate-200 text-slate-600">
                <Filter className="w-4 h-4 mr-2" />
                Filter
              </Button>
            </div>
          </div>
        </CardHeader>
        <CardContent className="p-0">
          <Table>
            <TableHeader className="bg-slate-50/50">
              <TableRow>
                <TableHead className="w-[100px]">ID</TableHead>
                <TableHead>Full Name</TableHead>
                <TableHead>Grade</TableHead>
                <TableHead>Section</TableHead>
                <TableHead>Status</TableHead>
                <TableHead className="text-right">Actions</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {filteredLearners.map((learner) => (
                <TableRow key={learner.id} className="hover:bg-slate-50/30 transition-colors">
                  <TableCell className="font-medium text-slate-500">{learner.studentId}</TableCell>
                  <TableCell>
                    <div className="flex items-center gap-3">
                      <div className="w-8 h-8 rounded-full bg-slate-100 flex items-center justify-center text-slate-700 font-bold text-[10px]">
                        {learner.name.split(' ').map(n => n[0]).join('')}
                      </div>
                      <span className="font-semibold text-slate-900">{learner.name}</span>
                    </div>
                  </TableCell>
                  <TableCell>{learner.grade}</TableCell>
                  <TableCell>{learner.section}</TableCell>
                  <TableCell>
                    <Badge variant={learner.status === 'active' ? 'default' : 'secondary'} className={cn(
                      "rounded-lg px-2 py-0.5",
                      learner.status === 'active' ? "bg-emerald-50 text-emerald-700 hover:bg-emerald-100 border-none" : ""
                    )}>
                      {learner.status}
                    </Badge>
                  </TableCell>
                  <TableCell className="text-right">
                    <DropdownMenu>
                      <DropdownMenuTrigger asChild>
                        <Button variant="ghost" className="h-8 w-8 p-0 hover:bg-slate-100">
                          <MoreHorizontal className="h-4 w-4" />
                        </Button>
                      </DropdownMenuTrigger>
                      <DropdownMenuContent align="end" className="w-40 rounded-xl">
                        <DropdownMenuItem className="cursor-pointer gap-2">
                          <Edit className="w-4 h-4 text-slate-400" /> Edit
                        </DropdownMenuItem>
                        <DropdownMenuItem className="cursor-pointer gap-2 text-rose-600 focus:text-rose-600" onClick={() => handleDelete(learner.id)}>
                          <Trash2 className="w-4 h-4" /> Delete
                        </DropdownMenuItem>
                      </DropdownMenuContent>
                    </DropdownMenu>
                  </TableCell>
                </TableRow>
              ))}
              {filteredLearners.length === 0 && (
                <TableRow>
                  <TableCell colSpan={6} className="h-32 text-center text-slate-400">
                    No learners found matching your search.
                  </TableCell>
                </TableRow>
              )}
            </TableBody>
          </Table>
        </CardContent>
      </Card>
    </motion.div>
  );
};

export default Learners;