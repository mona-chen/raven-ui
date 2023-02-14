import React from "react";
import { LiveEditor, LivePreview, LiveError } from "react-live";

function CodeBlock({children}) {
  return (
    <div>
      <LiveEditor code={children}
      scope={{ React }} />
      <LivePreview />
      <LiveError />
    </div>
  );
}

export default CodeBlock;
