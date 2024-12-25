import { MicrochipIcon } from "lucide-react";

export const Editor = () => {
  return (
    <div className="h-full flex flex-col gap-4 p-4">
      <div className="flex items-center gap-2 mb-4">
        <MicrochipIcon className="w-5 h-5 text-neon-purple animate-glow" />
        <h1 className="text-xl font-semibold">Welcome to FutureNotes</h1>
      </div>
      
      <div className="glass rounded-lg p-6 flex-1">
        <p className="text-muted-foreground">
          Select a note from the list or create a new one to get started.
        </p>
      </div>
    </div>
  );
};