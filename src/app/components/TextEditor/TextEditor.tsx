"use client"
import { useEditor, EditorContent } from '@tiptap/react'
import StarterKit from '@tiptap/starter-kit'
import StylingMenu from './StylingMenu'
import Underline from '@tiptap/extension-underline'

interface TextEditorProps {contentForEditor?: string,  updateContent: (e:string) => void}

const TextEditor = (props: TextEditorProps) => {
  const editor = useEditor({
    extensions: [
      StarterKit.configure({
        heading: {
          levels: [1, 2, 3],
        }
      }),
      Underline
    ],
    content: props.contentForEditor ? props.contentForEditor :  "<p>Tell us about something...</p>",
    autofocus: "end",
    onUpdate: ({editor}) => props.updateContent(editor.getHTML())
  })

  return (
    <div>
      <StylingMenu editor={editor} />
      <EditorContent className="text-editor" editor={editor} onClick={(e)=> e.preventDefault()}/>
    </div>
  )
}

export default TextEditor