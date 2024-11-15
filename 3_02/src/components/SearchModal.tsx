import {
  Command,
  CommandDialog,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList,
} from '@/components/ui/command';

interface SearchModalProps {
  isOpen: boolean;
  notes: Note[];
  onItemSelect: (noteId: number) => void;
  onKeywordChanged: (keyword: string) => void;
  onClose: () => void;
}

export function SearchModal({
  isOpen,
  notes,
  onItemSelect,
  onKeywordChanged,
  onClose,
}: SearchModalProps) {
  return (
    <CommandDialog open={isOpen} onOpenChange={onClose}>
      <Command shouldFilter={false}>
        <CommandInput placeholder={'キーワードで検索'} />
        <CommandList>
          <CommandEmpty>条件に一致するノートがありません</CommandEmpty>
          <CommandGroup>
            {notes?.map((note) => (
              <CommandItem
                key={note.id}
                title={note.displayTitle}
                onSelect={() => onItemSelect(note.id)}
              >
                <span>{note.displayTitle}</span>
              </CommandItem>
            ))}
          </CommandGroup>
        </CommandList>
      </Command>
    </CommandDialog>
  );
}
