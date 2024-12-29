import React, { useState } from 'react';
import { EditorContent, useEditor } from '@tiptap/react';
import StarterKit from '@tiptap/starter-kit';
import TextStyle from '@tiptap/extension-text-style';
import Underline from '@tiptap/extension-underline';
import FontColor from './FontColorExtension';
import './App.css';

const App = () => {
  const [color, setColor] = useState('#FF0000'); // Default font color

  const editor = useEditor({
    extensions: [
      StarterKit,
      Underline,
      TextStyle, // Required for styling
      FontColor, // Custom extension for font color
    ],
    content: '<p>Try applying italic and font color to this text!</p>',
  });

  const applyFontColor = () => {
    editor.chain().focus().setFontColor(color).run();
  };

  return (
    <div className="App">
      <h1>Custom Tiptap Editor</h1>
      <div className="toolbar">
        <button onClick={() => editor.chain().focus().toggleBold().run()}>
          Bold
        </button>
        <button onClick={() => editor.chain().focus().toggleItalic().run()}>
          Italic
        </button>
        <button onClick={() => editor.chain().focus().toggleUnderline().run()}>
          Underline
        </button>
        <button onClick={applyFontColor}>Apply Font Color</button>
        <input
          type="color"
          value={color}
          onChange={e => setColor(e.target.value)}
          className="color-picker"
        />
      </div>
      <EditorContent editor={editor} className="editor" />
    </div>
  );
};

export default App;
