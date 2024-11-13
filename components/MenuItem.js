export default function MenuItem({ name, price, description, image }) {
  return (
    <div className="border rounded-lg p-4 text-center shadow-md">
      <img 
        src={image} 
        alt={name} 
        className="w-full h-32 object-contain rounded" 
      />
      <h3 className="text-lg font-bold mt-2">{name}</h3>
      <p className="text-blue-600 font-semibold">Rp {price}</p>
      <p className="text-gray-600 text-sm mt-1">{description}</p>
      <button className="bg-blue-500 text-white px-2 py-1 mt-3 rounded-full text-sm">
        +
      </button>
    </div>
  );
}