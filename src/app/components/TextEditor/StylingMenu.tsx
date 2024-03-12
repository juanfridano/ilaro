import { Editor } from "@tiptap/react";
import {Dropdown, DropdownTrigger, DropdownMenu, DropdownItem, Button} from "@nextui-org/react";

const StylingMenu = ({ editor }: { editor: Editor | null }) => {
  if (!editor) {
    return null;
  }

  return (
    <div
      className="bubble-menu"
    >
      <button type="button"/>
      <Dropdown>
      <DropdownTrigger>
        <Button 
          variant="bordered" 
        >
          Open Menu
        </Button>
      </DropdownTrigger>
      <DropdownMenu 
        aria-label="Action event example" 
        onAction={(key) => alert(key)}
      >
        <DropdownItem key="new">New file</DropdownItem>
        <DropdownItem key="copy">Copy link</DropdownItem>
        <DropdownItem key="edit">Edit file</DropdownItem>
        <DropdownItem key="delete" className="text-danger" color="danger">
          Delete file
        </DropdownItem>
      </DropdownMenu>
    </Dropdown>
      <button
        onClick={() => editor.chain().focus().toggleBold().run()}
        className={`font-bold ${
          editor.isActive("bold") ? "menu-button-active" : "menu-button"
        }`}
      >
        B
      </button>
      <button
        onClick={() => editor.chain().focus().toggleItalic().run()}
        className={`italic ${
          editor.isActive("italic") ? "menu-button-active" : "menu-button"
        }`}
      >
        I
      </button>
      <button
        onClick={() => editor.chain().focus().toggleUnderline().run()}
        className={`underline ${
          editor.isActive("underline") ? "menu-button-active" : "menu-button"
        }`}
      >
        U
      </button>
      <button
        onClick={() => editor.chain().focus().toggleStrike().run()}
        className={`line-through ${
          editor.isActive("strike") ? "menu-button-active" : "menu-button"
        }`}
      >
        S
      </button>
    </div>
  );
};

export default StylingMenu;
