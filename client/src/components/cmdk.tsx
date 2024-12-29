import { Command } from "cmdk";

const Cmdk = () => {
  return (
    <Command.Dialog
      className="p-4 shadow-lg border dark:bg-neutral-900 bg-neutral-100 rounded-lg fixed inset-0 m-auto max-w-2xl w-full min-h-fit"
      open={false}
    >
      <Command.Input
        className="w-full p-2 text-sm rounded-md border dark:border-neutral-800 border-neutral-300 dark:bg-neutral-700 bg-white focus:outline-none focus:ring-2 focus:ring-blue-500"
        placeholder="Type a command..."
      />

      <Command.List className="mt-4">
        <Command.Empty className="text-neutral-500 dark:text-neutral-400">
          No results found
        </Command.Empty>
        <Command.Group title="Actions" className="text-sm">
          <Command.Item className="px-2 py-1 hover:bg-blue-500 hover:text-white rounded-md cursor-pointer">
            Create Project
          </Command.Item>
          <Command.Item className="px-2 py-1 hover:bg-blue-500 hover:text-white rounded-md cursor-pointer">
            Add new task
          </Command.Item>
          <Command.Item className="px-2 py-1 hover:bg-blue-500 hover:text-white rounded-md cursor-pointer">
            Add new scene
          </Command.Item>
        </Command.Group>
      </Command.List>
    </Command.Dialog>
  );
};

export default Cmdk;
