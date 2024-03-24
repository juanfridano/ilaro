import { Editor } from "@tiptap/react";
import {
  Dropdown,
  DropdownTrigger,
  DropdownMenu,
  DropdownItem,
  Button,
} from "@nextui-org/react";
import { Key } from "@react-types/shared";
import { useState, useCallback } from "react";

const StylingMenu = ({ editor }: { editor: Editor | null }) => {
  if (!editor) {
    return null;
  }
  // eslint-disable-next-line react-hooks/rules-of-hooks
  const [selectedKeys, setSelectedKeys] = useState(new Set([]));

  const setHeading = (key: Key): void => {
    const heading = Number(key);
    if (![1, 2, 3].includes(heading)) return;
    editor.chain().focus().toggleHeading({ level: heading }).run();
  };
  // eslint-disable-next-line react-hooks/rules-of-hooks
  const addImage = useCallback(() => {
    const url = window.prompt("URL");

    if (url) {
      editor.chain().focus().setImage({ src: url }).run();
    }
  }, [editor]);

  return (
    <div className="bubble-menu">
      <button type="button" />
      <Dropdown>
        <DropdownTrigger>
          <Button variant={editor.isActive("heading") ? "solid" : "bordered"}>
            Heading
          </Button>
        </DropdownTrigger>
        <DropdownMenu
          aria-label="Heading selection"
          selectionMode="single"
          selectedKeys={selectedKeys}
          onSelectionChange={() => setSelectedKeys}
          onAction={(key) => setHeading(key)}
        >
          <DropdownItem key="1">Heading 1</DropdownItem>
          <DropdownItem key="2">Heading 2</DropdownItem>
          <DropdownItem key="3">Heading 3</DropdownItem>
        </DropdownMenu>
      </Dropdown>
      <Button
        isIconOnly
        onClick={() => editor.chain().focus().toggleBold().run()}
        className="font-bold"
        variant={editor.isActive("bold") ? "solid" : "bordered"}
      >
        B
      </Button>
      <Button
        isIconOnly
        onClick={() => editor.chain().focus().toggleItalic().run()}
        className="italic"
        variant={editor.isActive("italic") ? "solid" : "bordered"}
      >
        I
      </Button>
      <Button
        isIconOnly
        onClick={() => editor.chain().focus().toggleUnderline().run()}
        className="underline"
        variant={editor.isActive("underline") ? "solid" : "bordered"}
      >
        U
      </Button>
      <Button
        isIconOnly
        onClick={() => editor.chain().focus().toggleStrike().run()}
        className="line-through"
        variant={editor.isActive("strike") ? "solid" : "bordered"}
      >
        S
      </Button>
      <Button
        isIconOnly
        onClick={() => editor.chain().focus().toggleOrderedList().run()}
        variant={editor.isActive("orderedList") ? "solid" : "bordered"}
      >
        OL
      </Button>
      <Button
        isIconOnly
        onClick={() => editor.chain().focus().toggleBulletList().run()}
        variant={editor.isActive("bulletList") ? "solid" : "bordered"}
      >
        UL
      </Button>
      {/* <Button isIconOnly onClick={addImage} variant="bordered">
        Im
      </Button> */}
    </div>
  );
};

export default StylingMenu;
