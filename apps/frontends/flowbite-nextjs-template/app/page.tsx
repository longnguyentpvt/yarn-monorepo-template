import { DarkThemeToggle } from "flowbite-react";

import { MyButton } from "@sy/react-components";
import "@sy/react-components/dist/assets/my-button.css";

export default function Home() {
  return (
    <main className="flex min-h-screen items-center justify-center gap-2 dark:bg-gray-800">
      <h1 className="text-2xl dark:text-white">Flowbite React + Next.js</h1>
      <DarkThemeToggle />

      <div>
        <MyButton>My Button</MyButton>
      </div>
    </main>
  );
}
