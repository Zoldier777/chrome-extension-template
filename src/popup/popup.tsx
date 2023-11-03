import React, {useState } from 'react';
import '../assets/popup.css';
import '../assets/tailwind.css';

const Popup = () => {
  const [newKeyword, setNewKeyword] = useState('');
  const [blacklist, setBlacklist] = useState([]);


  function handleInput(e) {
    e.preventDefault();
    let name = newKeyword;
  
    chrome.storage.sync.get({ blacklist: [] }, function (result) {
      let updatedBlacklist;
      const indexToRemove = result.blacklist.indexOf(name);
      if (indexToRemove >= 0) {
        updatedBlacklist = result.blacklist.slice(); // Create a copy
        updatedBlacklist.splice(indexToRemove, 1);
      } else {
        updatedBlacklist = result.blacklist.concat(name);
      }
      chrome.storage.sync.set({ blacklist: updatedBlacklist }, function () {
        // Update the state with the new blacklist
      });
    });
    // Clear the input field
    setNewKeyword('');
  }
  function clearAllBlacklist() {
    chrome.storage.sync.set({ blacklist: [] }, function () {
      setBlacklist([]);
    });
  }

  return (
    <div className="h-screen">
      <form onSubmit={handleInput} className='flex justify-center items-center py-3'>
        <input
          type="text"
          name="name"
          className='bg-gray-300 ring-black px-4 py-4'
          placeholder='Add or Remove a website'
          value={newKeyword}
          onChange={(e) => setNewKeyword(e.target.value)}
        />
        <button className='py-4 px-3 bg-indigo-500 text-white m-2 rounded-lg'>Mod</button>
      </form>
      <div className="flex justify-end item-center">
      <button onClick={clearAllBlacklist} className='py-4 px-3 bg-red-500 text-white rounded-lg custom-clear-box'>Clear</button>
      </div>
      

    </div>
  );
};

export default Popup;
