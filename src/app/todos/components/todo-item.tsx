import { Todo } from "../lib/types";
import { Trash2 } from "lucide-react";
import { useState } from "react";
import { Checkbox } from "@/components/ui/checkbox";
import { Button } from "@/components/ui/button";

interface TodoItemProps {
  todo: Todo;
  onToggle: (id: number, currentCompleted: boolean) => void;
  onDelete: (id: number) => void;
}

export function TodoItem({ todo, onToggle, onDelete }: TodoItemProps) {
  const [isDeleting, setIsDeleting] = useState(false);

  const handleDelete = (e: React.MouseEvent) => {
    e.stopPropagation();
    setIsDeleting(true);
    onDelete(todo.id);
  };

  return (
    <div
      className={`group flex items-center gap-4 p-4 rounded-xl border transition-all duration-300 mb-3 last:mb-0
        ${
          todo.completed
            ? "bg-secondary/20 border-transparent opacity-60"
            : "bg-card border-border/40 hover:border-primary/20 hover:shadow-sm"
        }`}
    >
      <Checkbox
        checked={todo.completed}
        onCheckedChange={() => onToggle(todo.id, todo.completed)}
        className="data-[state=checked]:bg-green-500 data-[state=checked]:border-green-500 w-6 h-6 rounded-full"
      />

      <span
        onClick={() => onToggle(todo.id, todo.completed)}
        className={`flex-1 text-base font-medium transition-all duration-300 cursor-pointer ${
          todo.completed
            ? "line-through text-muted-foreground"
            : "text-foreground"
        }`}
      >
        {todo.title}
      </span>

      <Button
        variant="ghost"
        size="icon"
        onClick={handleDelete}
        disabled={isDeleting}
        className="opacity-0 group-hover:opacity-100 h-9 w-9 text-muted-foreground hover:text-destructive hover:bg-destructive/10 rounded-lg transition-all duration-300"
      >
        <Trash2 className="w-4 h-4" />
      </Button>
    </div>
  );
}
