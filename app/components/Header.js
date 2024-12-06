
const Header = () => {
  return (
    <div>
     {/* Header */}
     <header className="flex justify-evenly items-center p-4 bg-blue-600 text-white">
        <div className="text-2xl font-bold">Weather Lens</div>
        <input type="text" className="p-2 rounded w-1/2" placeholder="Enter city name" />
    </header>
   </div>
   
  );
};

export default Header;