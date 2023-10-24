import React, { useEffect, useState } from 'react';

function Blacklisted() {
  const [blacklist, setBlacklist] = useState([]);

  function handleStorageChange(changes, areaName) {
    if (areaName === "sync" && "blacklist" in changes) {
      setBlacklist(changes.blacklist.newValue);
    }
  }
  useEffect(() => {
    chrome.storage.sync.get({ blacklist: [] }, (res) => {
      setBlacklist(res.blacklist);
    });

    chrome.storage.onChanged.addListener(handleStorageChange);

    return () => { 
      chrome.storage.onChanged.removeListener(handleStorageChange);
    };
  }, []);

  return (
    <div>
      <p>Current Blacklist:</p>
      <ul>
        {blacklist.map((item, index) => (
          <li key={index}>{item}</li>
        ))}
      </ul>
    </div>
  );
}

export default Blacklisted;
