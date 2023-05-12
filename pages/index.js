import * as DropdownMenu from "@radix-ui/react-dropdown-menu";

export default function Home() {
  return (
    <DropdownMenu.Root>
      <DropdownMenu.Trigger>Menu</DropdownMenu.Trigger>
      <DropdownMenu.Portal>
        <DropdownMenu.Content>Content</DropdownMenu.Content>
      </DropdownMenu.Portal>
    </DropdownMenu.Root>
  );
}
