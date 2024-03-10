"use client"
import { useEditor, EditorContent } from '@tiptap/react'
import StarterKit from '@tiptap/starter-kit'
import StylingMenu from './StylingMenu'
import Underline from '@tiptap/extension-underline'

const TextEditor = () => {
  const editor = useEditor({
    extensions: [
      StarterKit,
      Underline
    ],
    content: '<p>Hello World! 🌎️</p>',
  })

  return (
    <div>
      <StylingMenu editor={editor} />
      <EditorContent className="text-editor" editor={editor} />
    </div>
  )
}

export default TextEditor