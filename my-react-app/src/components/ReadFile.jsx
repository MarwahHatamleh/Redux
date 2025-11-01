import React, { useState } from "react";

export default function ReadFile() {
  const [text, setText] = useState([]);
  const handleFile = (e) => {
    const file = e.target.files[0];
    const reader = new FileReader();
    reader.onload = () => {
      setText(reader.result);
    };
      reader.readAsText(file);
    
  };

  return (
    <div>
      <input type="file" onChange={handleFile} />
      <p>{text}</p>
      <iframe
        src={text}
        width="100%"
        height="600px"
        title="PDF Preview"
      ></iframe>
    </div>
  );
}
