
const Header = ( {city, setCity} ) => {

  return (
    <div>
     {/* Header */}
     <header className="flex justify-evenly items-center p-4">
        <div className="text-2xl font-bold">Weather Lens</div>
        <input type="text" className="p-2 rounded w-1/2" placeholder="Enter city name"
        value={city} onChange={(e) => setCity(e.target.value)} />
    </header>
   </div>
   
  );
};

export default Header;