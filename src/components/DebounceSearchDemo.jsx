export function DebounceSearchDemo() {
  return (
   <div className="bg-blue-100 font-sans max-w-xl mx-auto my-5 p-5 border border-gray-300 rounded-lg">
  <h3 className="text-center mb-5 text-lg font-semibold">
    Debounce Search Demo
  </h3>

  <div className="mb-4">
    <label htmlFor="delayInput" className="mr-2">
      Debounce Delay (ms):
    </label>
    <input
      id="delayInput"
      min="0"
      step="100"
      type="number"
      value="500"
      className="px-2 py-1 w-20 border border-gray-300 rounded"
    />
  </div>

  <input
    placeholder="Type to search..."
    type="text"
    value=""
    className="w-full p-2.5 mb-2.5 border border-gray-300 rounded-md"
  />

  <div className="mb-1">
    <strong>Current Input:</strong>
  </div>

  <div className="mb-4 italic">
    <strong>Debounced Value (after 500ms):</strong>
  </div>

  <div>
    <h4 className="font-semibold mb-1">Simulated Search Results:</h4>
    <p className="text-gray-600">Type to see results.</p>
  </div>
</div>
   
  );
}
