
import React from 'react';
import { Database, ArrowRight, Server, BarChart3 } from 'lucide-react';

const DataFlowAnimation = () => {
  return (
    <div className="relative bg-slate-50 rounded-lg p-8 border border-slate-200">
      <div className="flex items-center justify-between">
        {/* Data Sources */}
        <div className="flex flex-col items-center space-y-2">
          <div className="w-16 h-16 bg-blue-100 rounded-lg flex items-center justify-center animate-pulse">
            <Database className="h-8 w-8 text-blue-600" />
          </div>
          <span className="text-xs text-slate-600 font-medium">Data Sources</span>
        </div>

        {/* Arrow 1 */}
        <div className="flex items-center">
          <ArrowRight className="h-6 w-6 text-slate-400 animate-bounce" style={{ animationDelay: '0s' }} />
        </div>

        {/* ETL Pipeline */}
        <div className="flex flex-col items-center space-y-2">
          <div className="w-16 h-16 bg-green-100 rounded-lg flex items-center justify-center animate-pulse" style={{ animationDelay: '0.5s' }}>
            <Server className="h-8 w-8 text-green-600" />
          </div>
          <span className="text-xs text-slate-600 font-medium">ETL Pipeline</span>
        </div>

        {/* Arrow 2 */}
        <div className="flex items-center">
          <ArrowRight className="h-6 w-6 text-slate-400 animate-bounce" style={{ animationDelay: '1s' }} />
        </div>

        {/* Analytics */}
        <div className="flex flex-col items-center space-y-2">
          <div className="w-16 h-16 bg-purple-100 rounded-lg flex items-center justify-center animate-pulse" style={{ animationDelay: '1.5s' }}>
            <BarChart3 className="h-8 w-8 text-purple-600" />
          </div>
          <span className="text-xs text-slate-600 font-medium">Analytics</span>
        </div>
      </div>

      {/* Data Flow Lines */}
      <div className="absolute top-1/2 left-0 right-0 h-0.5 bg-gradient-to-r from-blue-400 via-green-400 to-purple-400 opacity-50 -z-10">
        <div className="absolute inset-0 bg-gradient-to-r from-blue-400 via-green-400 to-purple-400 animate-pulse"></div>
      </div>
    </div>
  );
};

export default DataFlowAnimation;
