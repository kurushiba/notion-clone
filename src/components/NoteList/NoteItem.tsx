import {
  DropdownMenu,
  DropdownMenuTrigger,
  DropdownMenuContent,
  DropdownMenuItem,
} from '@/components/ui/dropdown-menu';
import {
  ChevronDown,
  ChevronRight,
  FileIcon,
  MoreHorizontal,
  Plus,
  Trash,
} from 'lucide-react';
import { Item } from '../SideBar/Item';
import { cn } from '@/lib/utils';
import { Note } from '@/modules/notes/note.entity';
import { useState } from 'react';

interface Props {
  note: Note;
  expanded?: boolean;
  layer?: number;
  isSelected?: boolean;
  onExpand?: (event: React.MouseEvent) => void;
  onCreate?: (event: React.MouseEvent) => void;
  onDelete?: (event: React.MouseEvent) => void;
  onClick?: () => void;
}

export function NoteItem({
  note,
  onClick,
  layer = 0,
  expanded = false,
  isSelected = false,
  onCreate,
  onDelete,
  onExpand,
}: Props) {
  const [isHovered, setIsHovered] = useState(false);

  const getIcon = () => {
    return expanded ? ChevronDown : isHovered ? ChevronRight : FileIcon;
  };

  const menu = (
    <div
      className={cn(
        'ml-auto flex items-center gap-x-2',
        !isHovered && 'opacity-0'
      )}
    >
      <DropdownMenu>
        <DropdownMenuTrigger onClick={(e) => e.stopPropagation()}>
          <div
            className="h-full ml-auto rounded-sm hover:bg-neutral-300"
            role="button"
          >
            <MoreHorizontal className="w-4 h-4 text-muted-foreground" />
          </div>
        </DropdownMenuTrigger>
        <DropdownMenuContent
          className="w-60"
          align="start"
          side="right"
          forceMount
        >
          <DropdownMenuItem onClick={onDelete}>
            <Trash className="w-4 h-4 mr-2" />
            Delete
          </DropdownMenuItem>
        </DropdownMenuContent>
      </DropdownMenu>
      <div
        className="h-full ml-auto rounded-sm hover:bg-neutral-300"
        role="button"
        onClick={onCreate}
      >
        <Plus className="w-4 h-4 text-muted-foreground" />
      </div>
    </div>
  );

  return (
    <div
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      onClick={onClick}
      role="button"
      style={{ paddingLeft: layer != null ? `${layer * 12 + 12}px` : '12px' }}
    >
      <Item
        label={note.title ?? '無題'}
        icon={getIcon()}
        onIconClick={onExpand}
        trailingItem={menu}
        isActive={isHovered || isSelected}
      />
    </div>
  );
}
