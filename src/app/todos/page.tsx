"use client";

import { useTodos } from "./services/query";
import {
  useCreateTodo,
  useUpdateTodo,
  useDeleteTodo,
} from "./services/mutation";
import { TodoInput } from "./components/todo-input";
import { TodoItem } from "./components/todo-item";
import { CheckCircle2, ListTodo } from "lucide-react";
import { useState } from "react";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
  CardFooter,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import { Badge } from "@/components/ui/badge";

export default function TodoPage() {
  const { data: todos, isLoading, isError, refetch } = useTodos();
  const createMutation = useCreateTodo();
  const updateMutation = useUpdateTodo();
  const deleteMutation = useDeleteTodo();
  const [filter, setFilter] = useState<"all" | "active" | "completed">("all");

  const handleAdd = (title: string) => {
    createMutation.mutate({
      title,
      completed: false,
      id: 0,
    });
  };

  const handleToggle = (id: number, currentCompleted: boolean) => {
    const todoToUpdate = todos?.find((t: any) => t.id === id);
    if (todoToUpdate) {
      updateMutation.mutate({
        id,
        todo: { ...todoToUpdate, completed: !currentCompleted },
      });
    }
  };

  const handleDelete = (id: number) => {
    deleteMutation.mutate(id);
  };

  const filteredTodos = todos?.filter((todo: any) => {
    if (filter === "active") return !todo.completed;
    if (filter === "completed") return todo.completed;
    return true;
  });

  const displayTodos = filteredTodos?.slice(0, 10);
  const activeCount = todos?.filter((t: any) => !t.completed).length || 0;

  return (
    <div className="min-h-screen bg-secondary/10 flex justify-center py-12 px-4">
      <Card className="w-full max-w-2xl border-none shadow-2xl bg-background/80 backdrop-blur-xl">
        <CardHeader className="space-y-4 pb-8">
          <div className="flex items-center justify-between">
            <div className="space-y-1">
              <CardTitle className="text-3xl font-bold flex items-center gap-3">
                <div className="p-2 bg-primary/10 rounded-xl">
                  <ListTodo className="w-8 h-8 text-primary" />
                </div>
                My Tasks
              </CardTitle>
              <CardDescription className="text-base ml-1 mt-2">
                You have {activeCount} active tasks remaining.
              </CardDescription>
            </div>
            <Badge variant="secondary" className="px-3 py-1 text-sm h-fit">
              {new Date().toLocaleDateString("en-US", {
                weekday: "long",
                month: "short",
                day: "numeric",
              })}
            </Badge>
          </div>

          <div className="pt-4">
            <TodoInput onAdd={handleAdd} isLoading={createMutation.isPending} />
          </div>
        </CardHeader>

        <div className="px-6 pb-4">
          <div className="flex items-center gap-2 p-1 bg-secondary rounded-lg w-fit">
            {(["all", "active", "completed"] as const).map((f) => (
              <Button
                key={f}
                onClick={() => setFilter(f)}
                variant={filter === f ? "secondary" : "ghost"}
                size="sm"
                className={`rounded-md px-4 h-8 capitalize ${
                  filter === f
                    ? "bg-background shadow-sm hover:bg-background"
                    : "hover:bg-background/50"
                }`}
              >
                {f}
              </Button>
            ))}
          </div>
        </div>

        <CardContent className="space-y-4 min-h-[300px]">
          {isLoading ? (
            <div className="space-y-3 pt-4">
              {[1, 2, 3].map((i) => (
                <div
                  key={i}
                  className="h-14 w-full bg-secondary/50 animate-pulse rounded-xl"
                />
              ))}
            </div>
          ) : isError ? (
            <div className="flex flex-col items-center justify-center h-[200px] text-muted-foreground gap-4">
              <p>Failed to load tasks.</p>
              <Button variant="outline" onClick={() => refetch()}>
                Retry
              </Button>
            </div>
          ) : displayTodos?.length === 0 ? (
            <div className="flex flex-col items-center justify-center h-[200px] text-muted-foreground/50 gap-4">
              <div className="p-4 bg-secondary/30 rounded-full">
                <CheckCircle2 className="w-12 h-12 stroke-[1.5]" />
              </div>
              <p className="text-lg">No tasks found</p>
            </div>
          ) : (
            <div className="space-y-3">
              {displayTodos?.map((todo: any) => (
                <TodoItem
                  key={todo.id}
                  todo={todo}
                  onToggle={handleToggle}
                  onDelete={handleDelete}
                />
              ))}
            </div>
          )}
        </CardContent>
        <Separator />
        <CardFooter className="py-4 text-xs text-muted-foreground flex justify-between">
          <span>Powered by shadcn/ui & Next.js</span>
          {todos && todos.length > 10 && <span>Showing top 10</span>}
        </CardFooter>
      </Card>
    </div>
  );
}
