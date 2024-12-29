import { AppSidebar } from "@/components/app-sidebar";
import { Button } from "@/components/ui/button";
import {
  SidebarInset,
  SidebarProvider,
  SidebarTrigger,
} from "@/components/ui/sidebar";
import { MoonIcon, SunIcon } from "lucide-react";
import { ReactNode, FC, useEffect, useState } from "react";

const AppLayout: FC<{ children: ReactNode }> = ({ children }) => {
  // add dark class to body
  const [darkMode, setDarkMode] = useState<boolean>(() => {
    const darkMode = localStorage.getItem("darkMode");
    return darkMode ? JSON.parse(darkMode) : false;
  });
  useEffect(() => {
    document.body.classList.toggle("dark", darkMode);
    localStorage.setItem("darkMode", JSON.stringify(darkMode));
  }, [darkMode]);
  return (
    <div>
      <SidebarProvider>
        <AppSidebar />
        <SidebarInset>
          <header className="flex px-2 h-16 justify-between shrink-0 items-center gap-2 transition-[width,height] ease-linear group-has-[[data-collapsible=icon]]/sidebar-wrapper:h-12">
            <div className="flex items-center justify-between gap-2 px-4">
              <SidebarTrigger className="-ml-1" />
            </div>
            <Button
              className="mr-1"
              onClick={() => setDarkMode(!darkMode)}
              variant={"ghost"}
              size={"icon"}
            >
              {darkMode ? <SunIcon /> : <MoonIcon />}
            </Button>
          </header>
          <main className="p-4">{children}</main>
        </SidebarInset>
      </SidebarProvider>
    </div>
  );
};

export default AppLayout;
