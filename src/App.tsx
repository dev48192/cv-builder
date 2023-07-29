import React, { useState } from 'react';
// Require Editor CSS files.
import 'froala-editor/css/froala_style.min.css';
import 'froala-editor/css/froala_editor.pkgd.min.css';

import FroalaEditorComponent from 'react-froala-wysiwyg';
import FroalaEditorView from 'react-froala-wysiwyg/FroalaEditorView';

function App() {
  const [model, setModel] = useState("Example Set");

  const handleModelChange = (event: any) => {
    setModel(event)
  }
  return (
    <>
      <FroalaEditorComponent
        tag='div'
        onModelChange={handleModelChange}
      />
      <FroalaEditorView
        model={model}
      />
    </>
  );
}

export default App;
