import { useState, useEffect } from "react";
import useDebounce from "../hook/useDebounce";

export function DebounceSearchDemo() {
    const [input, setInput] = useState("");
  const [delay, setDelay] = useState("");
   const [searchResult, setSearchResult] = useState("");

  //  // Debounced value after 500ms
  const debouncedValue =useDebounce(input,500);

   // Simulated API call after 1 second

   useEffect(() => {
    if(!debouncedValue){
        setSearchResult
    }
   })

//   useEffect(() =>{
//     if(debouncedValue){
//         console.log("Searching for", debouncedValue);
//     }
//   },[debouncedValue])

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
      type="number"
      value={delay}
      onChange={(e) => setDelay(Number(e.target.value))}
      className="px-2 py-1 w-20 border border-gray-300 rounded"
    />
  </div>

  <input
    placeholder="Type to search..."
    type="text"
    value={input}
    onChange={(e) => setInput(e.target.value)}
    className="w-full p-2.5 mb-2.5 border border-gray-300 rounded-md"
  />

  <div className="mb-1">
    <strong>Current Input: {input}</strong>
  </div>

  <div className="mb-4 italic">
    <strong>Debounced Value (after {delay}ms): {debouncedValue}</strong>
  </div>

  <div>
    <h4 className="font-semibold mb-1">Simulated Search Results:</h4>
    <p className="text-gray-600">{debouncedValue? `searching for "${debouncedValue}"` :"Type to see result"}</p>
  </div>
</div>
   
  );
}
