import { CircuitBoard, FileText, Plus } from "lucide-react";
import { Button } from "@/components/ui/button";
import { ScrollArea } from "@/components/ui/scroll-area";
import { useToast } from "@/hooks/use-toast";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogFooter } from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { useState } from "react";

const SAMPLE_NOTES = [
  { id: 1, title: "Project Ideas", date: "2024-03-10" },
  { id: 2, title: "Meeting Notes", date: "2024-03-09" },
  { id: 3, title: "Tasks", date: "2024-03-08" },
];

export const NotesList = () => {
  const { toast } = useToast();
  const [isDialogOpen, setIsDialogOpen] = useState(false);
  const [newNoteTitle, setNewNoteTitle] = useState("");
  const [notes, setNotes] = useState(SAMPLE_NOTES);

  const handleNewNote = () => {
    setIsDialogOpen(true);
  };

  const createNote = () => {
    if (!newNoteTitle.trim()) {
      toast({
        title: "Error",
        description: "Please enter a title for your note",
        variant: "destructive",
      });
      return;
    }

    const newNote = {
      id: notes.length + 1,
      title: newNoteTitle,
      date: new Date().toISOString().split('T')[0],
    };

    setNotes([newNote, ...notes]);
    setNewNoteTitle("");
    setIsDialogOpen(false);
    
    toast({
      title: "Success",
      description: "New note created successfully!",
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
          {notes.map((note) => (
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

      <Dialog open={isDialogOpen} onOpenChange={setIsDialogOpen}>
        <DialogContent>
          <DialogHeader>
            <DialogTitle>Create New Note</DialogTitle>
          </DialogHeader>
          <div className="py-4">
            <Input
              placeholder="Enter note title..."
              value={newNoteTitle}
              onChange={(e) => setNewNoteTitle(e.target.value)}
              onKeyDown={(e) => {
                if (e.key === 'Enter') {
                  createNote();
                }
              }}
            />
          </div>
          <DialogFooter>
            <Button variant="outline" onClick={() => setIsDialogOpen(false)}>
              Cancel
            </Button>
            <Button onClick={createNote}>
              Create Note
            </Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>
    </div>
  );
};