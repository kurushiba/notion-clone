import { Note } from '@/modules/notes/note.entity';
import { useState } from 'react';
import TextAreaAutoSize from 'react-textarea-autosize';

interface TitleInputProps {
  initialData: Note;
  onTitleChange: (val: string) => void;
}

export function TitleInput({ initialData, onTitleChange }: TitleInputProps) {
  const [value, setValue] = useState(initialData.title ?? '無題');

  const handleInputChange = (value: string) => {
    setValue(value);
    onTitleChange(value);
  };

  return (
    <div className="pl-[54px] group relative">
      <TextAreaAutoSize
        className="text-5xl bg-transparent font-bold break-words outline-none text-[#3F3F3F 
        resize-none"
        value={value}
        onChange={(e) => handleInputChange(e.target.value)}
      />
    </div>
  );
}
