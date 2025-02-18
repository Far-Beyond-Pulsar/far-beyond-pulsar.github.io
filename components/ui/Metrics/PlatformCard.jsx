import React from 'react';
import { ChevronRightIcon } from 'lucide-react';

const PlatformCard = ({ icon: Icon, platform, features }) => (
  <div className="bg-neutral-900 rounded-xl border border-neutral-800 p-6 hover:border-blue-500/50 transition-all">
    <Icon className="w-8 h-8 text-blue-500 mb-4" />
    <h3 className="text-lg font-semibold text-white mb-2">{platform}</h3>
    <ul className="space-y-2">
      {features.map((feature, index) => (
        <li key={index} className="text-neutral-400 text-sm flex items-center gap-2">
          <ChevronRightIcon className="w-4 h-4 text-blue-500" />
          {feature}
        </li>
      ))}
    </ul>
  </div>
);

export default PlatformCard;