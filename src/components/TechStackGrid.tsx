
import React from 'react';
import { Badge } from '@/components/ui/badge';

const TechStackGrid = () => {
  const techStacks = [
    { name: 'Python', category: 'Programming', color: 'bg-blue-100 text-blue-800' },
    { name: 'Apache Spark', category: 'Big Data', color: 'bg-orange-100 text-orange-800' },
    { name: 'Kafka', category: 'Streaming', color: 'bg-green-100 text-green-800' },
    { name: 'Azure', category: 'Cloud', color: 'bg-cyan-100 text-cyan-800' },
    { name: 'Snowflake', category: 'Data Warehouse', color: 'bg-indigo-100 text-indigo-800' },
    { name: 'Airflow', category: 'Orchestration', color: 'bg-purple-100 text-purple-800' },
    { name: 'SQL', category: 'Database', color: 'bg-gray-100 text-gray-800' },
    { name: 'Tableau', category: 'Visualization', color: 'bg-yellow-100 text-yellow-800' },
  ];

  return (
    <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
      {techStacks.map((tech, index) => (
        <div 
          key={tech.name} 
          className="bg-white p-4 rounded-lg border border-slate-200 hover:border-slate-300 transition-all duration-300 group hover:shadow-md"
          style={{ animationDelay: `${index * 0.1}s` }}
        >
          <div className="text-center">
            <Badge className={`${tech.color} mb-2 font-medium`}>
              {tech.category}
            </Badge>
            <h3 className="font-semibold text-slate-800 group-hover:text-slate-900 transition-colors">
              {tech.name}
            </h3>
          </div>
        </div>
      ))}
    </div>
  );
};

export default TechStackGrid;
