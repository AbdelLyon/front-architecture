import {
  Calculator,
  Calendar,
  CreditCard,
  Folder,
  Settings,
  Smile,
  User,
} from "lucide-react";
import {
  Command,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList,
  CommandSeparator,
  CommandShortcut,
} from "../ui/command";

const Sidebar = () => {
  return (
    <div className="w-2/5 p-y-8">
      <Command>
        <CommandInput placeholder="search..." />
        <CommandList>
          <CommandEmpty>No results found.</CommandEmpty>
          <CommandGroup heading="Architecture">
            <CommandItem>
              <Folder className="mr-2 h-4 w-4" />
              <span className="cursor-pointer">Domain</span>
            </CommandItem>
            <CommandItem>
              <Folder className="mr-2 h-4 w-4" />
              <span className="cursor-pointer">Model</span>
            </CommandItem>
            <CommandItem>
              <Folder className="mr-2 h-4 w-4" />
              <span className="cursor-pointer">Ports</span>
            </CommandItem>
          </CommandGroup>
        </CommandList>
      </Command>
    </div>
  );
};

export default Sidebar;
