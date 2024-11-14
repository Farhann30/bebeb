export default function MenuItem({ name, price, description, image }) {
  return (
    <div className="border border-black rounded-lg p-4 shadow-md">
      <div className="w-full h-40 overflow-hidden rounded">
        <img 
          src={image} 
          alt={name} 
          className="w-full h-full object-cover" 
        />
      </div>
      <h2 className="text-lg font-bold mt-2 text-left">{name}</h2>
      <p className="text-blue-600 font-semibold text-left">Rp {price}</p>
      <p className="text-gray-600 text-sm mt-1 text-left">{description}</p>
      <div className="flex justify-end mt-3">
        <button className="bg-blue-500 text-white px-2 py-1 rounded-full text-sm">
          +
        </button>
      </div>
    </div>
  );
}