import React from 'react';
import { FaGithub, FaYoutube, FaComment } from 'react-icons/fa'; 

const Links = () => {
  return (
    <div className="flex justify-center items-center space-x-10">
      
      <a href="https://github.com/Zoldier777" target="_blank" rel="noopener noreferrer">
        <FaGithub size={64} color="black" />
      </a>
      
      <a href="https://www.youtube.com" target="_blank" rel="noopener noreferrer">
        <FaYoutube size={64} color="red" />
      </a>

      <a href="https://chat.openai.com/" target="_blank" rel="noopener noreferrer">
        <FaComment size={64} color="blue" />
      </a>
    </div>
  );
};

export default Links;
