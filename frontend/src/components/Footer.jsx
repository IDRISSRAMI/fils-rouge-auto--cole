import React from 'react';

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white py-4 mt-8">
      <div className="container mx-auto text-center">
        <p>© {new Date().getFullYear()} My Platform. All rights reserved.</p>
      </div>
    </footer>
  );
}
