import { cn } from '@/lib/utils';
import { useState } from 'react';
import { NoteItem } from './NoteItem';
import { useNavigate, useParams } from 'react-router-dom';
import { useNoteAction } from '@/modules/notes/note.action';
import { useNoteStore } from '@/modules/notes/note.state';
import { Note } from '@/modules/notes/note';

interface NoteListProps {
  layer?: number;
  parentId?: number;
}

export function NoteList({ layer = 0, parentId }: NoteListProps) {
  const notes = [{}];
  return (
    <>
      <p
        className={cn(
          `hidden text-sm font-medium text-muted-foreground/80`,
          layer === 0 && 'hidden'
        )}
        style={{ paddingLeft: layer ? `${layer * 12 + 25}px` : undefined }}
      >
        ページがありません
      </p>
      {notes.map((note) => {
        return (
          <div key={note.id}>
            <NoteItem layer={layer} />
          </div>
        );
      })}
    </>
  );
}
