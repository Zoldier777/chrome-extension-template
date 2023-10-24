import React from 'react'
import '../../assets/tailwind.css';


function Heading(props) {
    return (
        <div className="flex justify-center items-center headin">
                <p className="text-white text-9xl font-mono">{props.text}</p>
      </div>
    )
}
export default Heading