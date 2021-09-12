import * as React from 'react';

export const RepoListItemLoading: React.FC = () => {
  const titleWidth = [36, 44, 56, 72][Math.floor(Math.random() * 4)];
  const animate = 'animate-pulse bg-gray-300 rounded-lg';
  return (
    <li className="p-6 mx-auto bg-white rounded-xl shadow-xl mb-3">
      <h5 className={`h-8 w-${titleWidth} mb-2 ${animate}`}></h5>
      <p className={`h-6 mb-6 ${animate}`}></p>
      <ul className="flex items-center gap-x-8">
        <li className={`flex-initial h-5 w-12 ${animate}`}></li>
        <li className={`flex-initial h-5 w-12 ${animate}`}></li>
        <li className={`flex-initial h-5 w-12 ${animate}`}></li>
        <li className={`flex-initial h-5 w-12 ${animate}`}></li>
      </ul>
    </li>
  );
};
