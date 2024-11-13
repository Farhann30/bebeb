// app/page.js

"use client"; // This line makes the component a client component

import { useState } from 'react';
import Navbar from "../components/Navbar";
import MenuTabs from "../components/MenuTabs";
import MenuItem from "../components/MenuItem";

export default function HomePage() {
  const [activeTab, setActiveTab] = useState('makanan'); // Change initial state to 'makanan'

  return (
    <div>
      <Navbar />
      <h1 className="text-2xl font-bold text-center my-8">List Menu</h1>
      <MenuTabs activeTab={activeTab} setActiveTab={setActiveTab} />
      <div className="grid grid-cols-4 gap-4 p-8">
        {activeTab === 'makanan' && ( // Update condition to 'makanan'
          <>
            <MenuItem 
            name="Sate Ayam"
            price="20.000" 
            image="/images/sate.jpg"
            description={"Sate Ayam lezat yang dipanggang dengan bumbu kacang khas, disajikan dengan irisan bawang dan tomat."} />
            <MenuItem name="Nasi Goreng" price="25.000" />
            <MenuItem name="Mie Goreng" price="22.000" />
            <MenuItem name="Ayam Penyet" price="30.000" />
          </>
        )}
        {activeTab === 'drinks' && (
          <>
            <MenuItem name="Es Teh" price="10.000" />
            <MenuItem name="Kopi" price="15.000" />
            <MenuItem name="Jus Jeruk" price="12.000" />
          </>
        )}
        {activeTab === 'desserts' && (
          <>
            <MenuItem name="Es Krim" price="20.000" />
            <MenuItem name="Kue Coklat" price="25.000" />
            <MenuItem name="Pudding" price="18.000" />
          </>
        )}
      </div>
    </div>
  );
}