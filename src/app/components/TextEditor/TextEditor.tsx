"use client"
import { useEditor, EditorContent } from '@tiptap/react'
import StarterKit from '@tiptap/starter-kit'
import StylingMenu from './StylingMenu'
import Underline from '@tiptap/extension-underline'
import Image from '@tiptap/extension-image'

interface TextEditorProps {contentForEditor?: string,  updateContent: (e:string) => void}

const TextEditor = (props: TextEditorProps) => {
  const editor = useEditor({
    extensions: [
      StarterKit.configure({
        heading: {
          levels: [1, 2, 3],
        },
        orderedList: {
          keepMarks: true,
          HTMLAttributes: {
            class: "ps-5 mt-2 space-y-1 list-decimal list-inside"
          }
        },
        bulletList: {
          keepMarks: true,
          HTMLAttributes: {
            class: "ps-5 mt-2 space-y-1 list-disc list-inside"
          }
        }
      }),
      Underline,
      Image.configure({
        allowBase64: true,
      })
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