import React from 'react';
import { motion } from 'framer-motion';
import { Users, ClipboardCheck, AlertCircle, TrendingUp, Calendar } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { format } from 'date-fns';
import { cn } from '@/lib/utils';

const StatCard = ({ title, value, icon: Icon, color, trend }: any) => (
  <Card className="overflow-hidden border-none shadow-sm">
    <CardContent className="p-6">
      <div className="flex items-center justify-between">
        <div>
          <p className="text-sm font-medium text-slate-500">{title}</p>
          <h3 className="text-2xl font-bold mt-1 text-slate-900">{value}</h3>
          {trend && (
            <p className="text-xs font-medium text-emerald-600 mt-1 flex items-center gap-1">
              <TrendingUp className="w-3 h-3" /> {trend}
            </p>
          )}
        </div>
        <div className={cn("p-3 rounded-2xl", color)}>
          <Icon className="w-6 h-6 text-white" />
        </div>
      </div>
    </CardContent>
  </Card>
);

const Dashboard = () => {
  const stats = [
    { title: 'Total Learners', value: '1,284', icon: Users, color: 'bg-blue-600', trend: '+12 this month' },
    { title: "Today's Attendance", value: '94.2%', icon: ClipboardCheck, color: 'bg-indigo-600', trend: '+2.1% from yesterday' },
    { title: 'Late Comers', value: '24', icon: Calendar, color: 'bg-amber-500', trend: '-5 from yesterday' },
    { title: 'Absent Alert', value: '48', icon: AlertCircle, color: 'bg-rose-500', trend: 'High priority' },
  ];

  return (
    <motion.div 
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="space-y-8"
    >
      <header className="flex flex-col md:flex-row md:items-center justify-between gap-4">
        <div>
          <h1 className="text-3xl font-extrabold text-slate-900 tracking-tight">School Overview</h1>
          <p className="text-slate-500 mt-1">Welcome back, Registrar. Here's what's happening today.</p>
        </div>
        <div className="flex items-center gap-3 bg-white px-4 py-2 rounded-xl shadow-sm border border-slate-100">
          <Calendar className="w-5 h-5 text-blue-600" />
          <span className="text-sm font-semibold text-slate-700">{format(new Date(), 'MMMM d, yyyy')}</span>
        </div>
      </header>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {stats.map((stat, i) => (
          <StatCard key={i} {...stat} />
        ))}
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        <div className="lg:col-span-2">
          <Card className="h-full border-none shadow-sm overflow-hidden">
            <div className="relative h-64 w-full">
              <img 
                src="https://storage.googleapis.com/dala-prod-public-storage/generated-images/6c2a2525-90da-4038-a0c0-ac6b7fa7d0b8/classroom-hero-2018451a-1777057482742.webp" 
                alt="Modern Classroom"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-900/60 to-transparent flex flex-col justify-end p-8">
                <h2 className="text-white text-2xl font-bold">Registration Portal</h2>
                <p className="text-white/80 max-w-md">Manage your school's digital registry efficiently with our real-time attendance tracking system.</p>
              </div>
            </div>
            <CardContent className="p-8">
              <div className="flex flex-col md:flex-row gap-8">
                <div className="flex-1">
                  <h4 className="font-bold text-slate-900 mb-2">Quick Actions</h4>
                  <div className="grid grid-cols-2 gap-3">
                    <button className="flex flex-col items-center justify-center p-4 rounded-xl border border-slate-100 hover:border-blue-200 hover:bg-blue-50 transition-all gap-2 group">
                      <Users className="w-6 h-6 text-blue-600 group-hover:scale-110 transition-transform" />
                      <span className="text-sm font-medium text-slate-700">Add Learner</span>
                    </button>
                    <button className="flex flex-col items-center justify-center p-4 rounded-xl border border-slate-100 hover:border-blue-200 hover:bg-blue-50 transition-all gap-2 group">
                      <ClipboardCheck className="w-6 h-6 text-indigo-600 group-hover:scale-110 transition-transform" />
                      <span className="text-sm font-medium text-slate-700">Daily Log</span>
                    </button>
                  </div>
                </div>
                <div className="flex-1 bg-slate-50 p-6 rounded-2xl">
                  <h4 className="font-bold text-slate-900 mb-3">Today's Summary</h4>
                  <ul className="space-y-3">
                    <li className="flex justify-between items-center text-sm">
                      <span className="text-slate-500">Scheduled Classes</span>
                      <span className="font-semibold">42</span>
                    </li>
                    <li className="flex justify-between items-center text-sm">
                      <span className="text-slate-500">Marked Attendance</span>
                      <span className="font-semibold text-emerald-600">38/42</span>
                    </li>
                    <li className="flex justify-between items-center text-sm">
                      <span className="text-slate-500">Unresolved Absences</span>
                      <span className="font-semibold text-rose-500">12</span>
                    </li>
                  </ul>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        <div className="space-y-6">
          <Card className="border-none shadow-sm">
            <CardHeader>
              <CardTitle className="text-lg">Recent Activities</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              {[1, 2, 3, 4].map((_, i) => (
                <div key={i} className="flex gap-4 items-start">
                  <div className="w-2 h-2 rounded-full bg-blue-500 mt-2 shrink-0" />
                  <div>
                    <p className="text-sm font-medium text-slate-900">Attendance marked for Grade 10-A</p>
                    <p className="text-xs text-slate-500">10 minutes ago</p>
                  </div>
                </div>
              ))}
            </CardContent>
          </Card>
          
          <Card className="bg-blue-600 border-none shadow-lg text-white">
            <CardContent className="p-6">
              <h3 className="font-bold text-lg mb-2">Need help?</h3>
              <p className="text-blue-100 text-sm mb-4">Check out our guide on how to export monthly attendance reports.</p>
              <button className="w-full py-2 bg-white text-blue-600 rounded-lg text-sm font-bold hover:bg-blue-50 transition-colors">
                View Documentation
              </button>
            </CardContent>
          </Card>
        </div>
      </div>
    </motion.div>
  );
};

export default Dashboard;