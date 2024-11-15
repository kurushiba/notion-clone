import {
  DropdownMenu,
  DropdownMenuTrigger,
  DropdownMenuContent,
  DropdownMenuItem,
} from '@/components/ui/dropdown-menu';
import { FileIcon, MoreHorizontal, Plus, Trash } from 'lucide-react';
import { Item } from '../SideBar/Item';
import { cn } from '@/lib/utils';

interface Props {
  expanded?: boolean;
  layer?: number;
  isSelected?: boolean;
  onExpand?: (event: React.MouseEvent) => void;
  onCreate?: (event: React.MouseEvent) => void;
  onDelete?: (event: React.MouseEvent) => void;
  onClick?: () => void;
}

export function NoteItem({
  onClick,
  layer = 0,
  expanded = false,
  isSelected = false,
  onCreate,
  onDelete,
  onExpand,
}: Props) {
  const menu = (
    <div className={cn('ml-auto flex items-center gap-x-2')}>
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
      onClick={onClick}
      role="button"
      style={{ paddingLeft: layer != null ? `${layer * 12 + 12}px` : '12px' }}
    >
      <Item
        label={'test'}
        icon={FileIcon}
        onIconClick={onExpand}
        trailingItem={menu}
      />
    </div>
  );
}
