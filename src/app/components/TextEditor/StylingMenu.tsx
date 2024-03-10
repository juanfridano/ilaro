import { Editor, BubbleMenu } from "@tiptap/react";

const StylingMenu = ({ editor }: { editor: Editor | null }) => {
  if (!editor) {
    return null;
  }
  
  return (
    <BubbleMenu
      className="bubble-menu"
      editor={editor}
      tippyOptions={{ duration: 100 }}
    >
      <button
        onClick={() => editor.chain().focus().toggleBold().run()}
        className={`font-bold ${editor.isActive('bold') ? 'menu-button-active' : 'menu-button'}`}
      >
        B
      </button>
      <button
        onClick={() => editor.chain().focus().toggleItalic().run()}
        className={`italic ${editor.isActive('italic') ? 'menu-button-active' : 'menu-button'}`}
      >
        I
      </button>
      <button
        onClick={() => editor.chain().focus().toggleUnderline().run()}
        className={`underline ${editor.isActive('underline') ? 'menu-button-active' : 'menu-button'}`}
      >
        U
      </button>
      <button
        onClick={() => editor.chain().focus().toggleStrike().run()}
        className={`line-through ${editor.isActive('strike') ? 'menu-button-active' : 'menu-button'}`}
      >
        S
      </button>
    </BubbleMenu>
  );
};

export default StylingMenu;
