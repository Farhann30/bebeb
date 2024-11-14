"use client";

export default function Navbar() {
  return (
    <nav className="bg-black text-white p-4 flex justify-between items-center">
      <h1 className="text-xl font-bold cafea-font">CafeA</h1>
      <div className="text-2xl">
        <i className="fas fa-user-circle"></i>
      </div>
    </nav>
  );
}