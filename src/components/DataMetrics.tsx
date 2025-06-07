
import React from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Database, Zap, TrendingUp, Clock } from 'lucide-react';

const DataMetrics = () => {
  const metrics = [
    {
      icon: Database,
      value: '300K+',
      label: 'Daily Transactions',
      description: 'Processed in real-time',
      color: 'text-blue-600'
    },
    {
      icon: TrendingUp,
      value: '30%',
      label: 'Performance Boost',
      description: 'Processing efficiency',
      color: 'text-green-600'
    },
    {
      icon: Zap,
      value: '25%',
      label: 'Faster Response',
      description: 'Fraud detection time',
      color: 'text-yellow-600'
    },
    {
      icon: Clock,
      value: '15%',
      label: 'Latency Reduction',
      description: 'Data pipeline optimization',
      color: 'text-purple-600'
    }
  ];

  return (
    <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
      {metrics.map((metric, index) => (
        <Card key={metric.label} className="bg-white border-slate-200 hover:border-slate-300 transition-all duration-300 group hover:shadow-md">
          <CardContent className="p-6 text-center">
            <div className="flex justify-center mb-3">
              <div className={`p-3 rounded-full bg-slate-50 group-hover:bg-slate-100 transition-colors`}>
                <metric.icon className={`h-6 w-6 ${metric.color}`} />
              </div>
            </div>
            <div className="text-2xl font-bold text-slate-800 mb-1">
              {metric.value}
            </div>
            <div className="text-sm font-medium text-slate-700 mb-1">
              {metric.label}
            </div>
            <div className="text-xs text-slate-500">
              {metric.description}
            </div>
          </CardContent>
        </Card>
      ))}
    </div>
  );
};

export default DataMetrics;
