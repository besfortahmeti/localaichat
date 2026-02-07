import { useState } from "react";
import { Plus } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

interface TodoInputProps {
  onAdd: (title: string) => void;
  isLoading?: boolean;
}

export function TodoInput({ onAdd, isLoading }: TodoInputProps) {
  const [value, setValue] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (value.trim()) {
      onAdd(value.trim());
      setValue("");
    }
  };

  return (
    <form onSubmit={handleSubmit} className="flex w-full items-center gap-2">
      <div className="relative flex-1">
        <Input
          type="text"
          value={value}
          onChange={(e) => setValue(e.target.value)}
          placeholder="What needs to be done?"
          className="h-14 rounded-2xl bg-secondary/30 border-transparent shadow-sm 
                     focus-visible:bg-background focus-visible:ring-primary/20 text-lg px-4"
          disabled={isLoading}
        />
      </div>
      <Button
        type="submit"
        disabled={!value.trim() || isLoading}
        size="icon"
        className="h-14 w-14 rounded-2xl shadow-lg shadow-primary/20 hover:shadow-primary/40 hover:scale-105 active:scale-95 transition-all duration-300"
      >
        <Plus className="w-6 h-6 stroke-[3]" />
      </Button>
    </form>
  );
}
