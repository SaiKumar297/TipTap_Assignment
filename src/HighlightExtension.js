import { Mark } from '@tiptap/core';

const Highlight = Mark.create({
    name: 'highlight',
    addOptions() {
        return {
            color: 'yellow', // Default highlight color
        };
    },
    addAttributes() {
        return {
            color: {
                default: this.options.color,
            },
        };
    },
    parseHTML() {
        return [
            {
                tag: 'mark',
                getAttrs: node => ({
                    color: node.style.backgroundColor || 'yellow',
                }),
            },
        ];
    },
    renderHTML({ HTMLAttributes }) {
        return ['mark', { style: `background-color: ${HTMLAttributes.color}` }, 0];
    },
    addCommands() {
        return {
            toggleHighlight: attributes => ({ commands }) =>
                commands.toggleMark(this.name, attributes),
        };
    },
});

export default Highlight;
