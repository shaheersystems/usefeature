import Cmdk from "@/components/cmdk";
import AppLayout from "@/layouts/app-layout";

function App() {
  return (
    <div>
      <AppLayout>
        <div className="p-4 dark:bg-neutral-800 bg-neutral-100 rounded-md"></div>
      </AppLayout>
      <Cmdk />
    </div>
  );
}

export default App;
