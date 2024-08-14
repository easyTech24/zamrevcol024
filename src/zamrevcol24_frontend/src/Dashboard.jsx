import React from 'react';

function Dashboard() {
  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <div className="p-8 space-y-4 bg-white shadow-md rounded-lg">
        <h2 className="text-3xl font-bold text-center text-indigo-600">Welcome to the Dashboard!</h2>
        <p className="text-center text-gray-700">You are logged in.</p>
      </div>
    </div>
  );
}

export default Dashboard;
