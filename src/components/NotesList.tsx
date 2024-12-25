import { CircuitBoard, FileText, Plus } from "lucide-react";
import { Button } from "@/components/ui/button";
import { ScrollArea } from "@/components/ui/scroll-area";
import { useToast } from "@/hooks/use-toast";

const SAMPLE_NOTES = [
  { id: 1, title: "Project Ideas", date: "2024-03-10" },
  { id: 2, title: "Meeting Notes", date: "2024-03-09" },
  { id: 3, title: "Tasks", date: "2024-03-08" },
];

export const NotesList = () => {
  const { toast } = useToast();

  const handleNewNote = () => {
    toast({
      title: "Creating new note",
      description: "This is just a demo. The create feature will be implemented soon!",
    });
  };

  return (
    <div className="h-full flex flex-col gap-4 p-4">
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-2">
          <CircuitBoard className="w-5 h-5 text-neon-purple animate-glow" />
          <h2 className="text-lg font-semibold">My Notes</h2>
        </div>
        <Button onClick={handleNewNote} size="sm" className="gap-1">
          <Plus className="w-4 h-4" /> New
        </Button>
      </div>
      
      <ScrollArea className="flex-1">
        <div className="space-y-2">
          {SAMPLE_NOTES.map((note) => (
            <div
              key={note.id}
              className="glass p-3 rounded-lg cursor-pointer hover:bg-secondary/40 transition-colors group"
            >
              <div className="flex items-center gap-2">
                <FileText className="w-4 h-4 text-neon-blue group-hover:animate-glow" />
                <span className="font-medium">{note.title}</span>
              </div>
              <p className="text-sm text-muted-foreground mt-1">{note.date}</p>
            </div>
          ))}
        </div>
      </ScrollArea>
    </div>
  );
};