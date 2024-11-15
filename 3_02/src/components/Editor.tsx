import { BlockNoteEditor, PartialBlock, locales } from '@blocknote/core';
import { useCreateBlockNote } from '@blocknote/react';
import '@blocknote/mantine/style.css';
import { BlockNoteView } from '@blocknote/mantine';

interface EditorProps {
  onChange: (value: string) => void;
  initialContent?: string | null;
}

function Editor({ onChange, initialContent }: EditorProps) {
  const editor: BlockNoteEditor = useCreateBlockNote({
    dictionary: locales.ja,
    initialContent: initialContent
      ? (JSON.parse(initialContent) as PartialBlock[])
      : undefined,
  });

  return (
    <div>
      <BlockNoteView
        editor={editor}
        onChange={() => onChange(JSON.stringify(editor.document, null, 2))}
      />
    </div>
  );
}

export default Editor;
