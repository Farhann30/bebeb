"use client";

import { useState } from 'react';
import Navbar from "../components/Navbar";
import MenuTabs from "../components/MenuTabs";
import MenuItem from "../components/MenuItem";

export default function HomePage() {
  const [activeTab, setActiveTab] = useState('makanan');

  return (
    <div>
      <Navbar />
      <h1 className="text-2xl font-bold text-center my-8">LIST MENU</h1>
      <MenuTabs activeTab={activeTab} setActiveTab={setActiveTab} />
      <div className="grid grid-cols-4 gap-4 p-8">
        {activeTab === 'makanan' && (
          <>
            <MenuItem 
            name="Sate Ayam"
            price="20.000" 
            image="sate.svg"
            description={"Sate Ayam lezat yang dipanggang dengan bumbu kacang khas, disajikan dengan irisan bawang dan tomat."} />
            <MenuItem 
            name="Sate Ayam"
            price="20.000" 
            image="sate.svg"
            description={"Sate Ayam lezat yang dipanggang dengan bumbu kacang khas, disajikan dengan irisan bawang dan tomat."} />
            <MenuItem 
            name="Sate Ayam"
            price="20.000" 
            image="sate.svg"
            description={"Sate Ayam lezat yang dipanggang dengan bumbu kacang khas, disajikan dengan irisan bawang dan tomat."} />
            <MenuItem 
            name="Sate Ayam"
            price="20.000" 
            image="sate.svg"
            description={"Sate Ayam lezat yang dipanggang dengan bumbu kacang khas, disajikan dengan irisan bawang dan tomat."} />
            <MenuItem 
            name="Sate Ayam"
            price="20.000" 
            image="sate.svg"
            description={"Sate Ayam lezat yang dipanggang dengan bumbu kacang khas, disajikan dengan irisan bawang dan tomat."} />
                        <MenuItem 
            name="Sate Ayam"
            price="20.000" 
            image="sate.svg"
            description={"Sate Ayam lezat yang dipanggang dengan bumbu kacang khas, disajikan dengan irisan bawang dan tomat."} />
                        <MenuItem 
            name="Sate Ayam"
            price="20.000" 
            image="sate.svg"
            description={"Sate Ayam lezat yang dipanggang dengan bumbu kacang khas, disajikan dengan irisan bawang dan tomat."} />
                        <MenuItem 
            name="Sate Ayam"
            price="20.000" 
            image="sate.svg"
            description={"Sate Ayam lezat yang dipanggang dengan bumbu kacang khas, disajikan dengan irisan bawang dan tomat."} />
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