
import React, { useEffect } from 'react';
import '../assets/tailwind.css'

function handleInput(e) {
  e.preventDefault();
  const name = e.target[0].value;
  chrome.storage.sync.set({name},() => {
   console.log(`Name is set to ${name}`);
  });

chrome.storage.sync.get([name])
}
const Popup = () => {
    useEffect(() =>{ // will update each time the application is started with the latest value set
      chrome.storage.sync.get(["name"], (res)=> {
        console.log(res.name);
      })
    },[]);

    return (
      <div className="h-screen">
        <form onSubmit={handleInput} className='flex justify-center items-center py-44'>
          <input type="text" name="name" className='bg-gray-300 ring-black px-4 py-4' placeholder='Search for a keyword'/>
          <button className='py-4 px-3 bg-indigo-500 text-white m-2'>Search</button>
        </form>
      </div>
    )
}
export default Popup;