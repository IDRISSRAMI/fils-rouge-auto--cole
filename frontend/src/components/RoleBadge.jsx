import React from 'react';

export default function RoleBadge({ role }) {
  const colors = {
    ADMIN: 'bg-red-500',
    INSTRUCTOR: 'bg-green-500',
    STUDENT: 'bg-blue-500',
  };

  return (
    <span
      className={`px-2 py-1 text-xs text-white rounded ${colors[role] || 'bg-gray-500'}`}
    >
      {role}
    </span>
  );
}
