"use client";

import React from 'react';

const MenuTabs = ({ activeTab, setActiveTab }) => {
  return (
    <div className="flex justify-center space-x-4 p-4">
      <button
        className={`px-4 py-2 ${activeTab === 'makanan' ? 'bg-blue-500 text-black rounded-lg shadow' : 'bg-white-300 rounded-lg'}`}
        onClick={() => setActiveTab('makanan')}
      >
        Makanan
      </button>
      <button
        className={`px-4 py-2 ${activeTab === 'drinks' ? 'bg-blue-500 text-black rounded-lg shadow' : 'bg-white-300 rounded-lg'}`}
        onClick={() => setActiveTab('drinks')}
      >
        Drinks
      </button>
      <button
        className={`px-4 py-2 ${activeTab === 'desserts' ? 'bg-blue-500 text-black rounded-lg shadow' : 'bg-white-300 rounded-lg'}`}
        onClick={() => setActiveTab('desserts')}
      >
        Desserts
      </button>
    </div>
  );
};

export default MenuTabs;