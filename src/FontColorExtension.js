import { Extension } from '@tiptap/core';

const FontColor = Extension.create({
  name: 'fontColor',

  addOptions() {
    return {
      colors: ['#000000'], // Default colors
    };
  },

  addAttributes() {
    return {
      color: {
        default: null,
        parseHTML: element => element.style.color || null,
        renderHTML: attributes => {
          if (!attributes.color) {
            return {};
          }
          return { style: `color: ${attributes.color}` };
        },
      },
    };
  },

  addCommands() {
    return {
      setFontColor: color => ({ commands }) =>
        commands.setMark('textStyle', { color }),
    };
  },
});

export default FontColor;
