"use client";
import { useState } from 'react';

const codeSnippet = `// Your code goes here
function greet() {
  console.log("Hello, world!");
}
`;

const Page = () => {
  const [isCopied, setCopied] = useState(false);

  const handleCopy = () => {
    navigator.clipboard.writeText(codeSnippet).then(() => {
      setCopied(true);
      setTimeout(() => {
        setCopied(false);
      }, 1500);
    });
  };

  return (
    <div>
      <pre style={{ backgroundColor: '#f4f4f4', padding: '10px', borderRadius: '5px' }}>
        <code style={{ whiteSpace: 'pre-wrap' }}>{codeSnippet}</code>
      </pre>

      <button onClick={handleCopy}>{isCopied ? 'Copied!' : 'Copy to Clipboard'}</button>
    </div>
  );
};

export default Page;
