import { SidebarProvider } from "@/components/ui/sidebar";
import { NotesList } from "@/components/NotesList";
import { Editor } from "@/components/Editor";

const Index = () => {
  return (
    <SidebarProvider>
      <div className="min-h-screen flex w-full">
        <div className="w-80 border-r border-white/10">
          <NotesList />
        </div>
        <div className="flex-1">
          <Editor />
        </div>
      </div>
    </SidebarProvider>
  );
};

export default Index;