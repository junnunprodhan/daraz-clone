function HighlightBar() {
  return (
    <div className="grid grid-cols-1 gap-2 md:grid-cols-4">
      <div className="p-2 rounded bg-gradient-to-r from-orange-300 to-teal-500">
        <h2 className="text-white text-xl">Total Earn</h2>
        <h2 className="text-white text-sm">2000</h2>
      </div>
      <div className="p-2 rounded bg-gradient-to-r from-orange-300 to-teal-500">
        <h2 className="text-white text-xl">Total Products</h2>
        <h2 className="text-white text-sm">2000</h2>
      </div>
      <div className="p-2 rounded bg-gradient-to-r from-orange-300 to-teal-500">
        <h2 className="text-white text-xl">Total Sells</h2>
        <h2 className="text-white text-sm">2000</h2>
      </div>
      <div className="p-2 rounded bg-gradient-to-r from-orange-300 to-teal-500">
        <h2 className="text-white text-xl">Total Order</h2>
        <h2 className="text-white text-sm">2000</h2>
      </div>
    </div>
  );
}

export default HighlightBar;
