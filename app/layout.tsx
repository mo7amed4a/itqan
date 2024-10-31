import { CustomFlowbiteTheme, Flowbite } from "flowbite-react";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const customTheme: CustomFlowbiteTheme = {
    button: {
      color: {
        primary: "bg-primary text-white hover:bg-white hover:text-primary",
      },
    },
    carousel: {
      "indicators": {
        "active": {
          "off": "bg-primary/50 hover:bg-primary dark:bg-gray-800/50 dark:hover:bg-gray-800",
          "on": "bg-primary dark:bg-gray-800"
        },
        "base": "h-3 w-3 rounded-full",
        "wrapper": "absolute bottom-5 start-1/2 flex -translate-x-1/2 gap-x-3"
      },
      "control": {
        "base": "inline-flex h-8 w-8 items-center justify-center rounded-full bg-primary/30 group-hover:bg-white/50 group-focus:outline-none group-focus:ring-4 group-focus:ring-white dark:bg-gray-800/30 dark:group-hover:bg-gray-800/60 dark:group-focus:ring-gray-800/70 sm:h-10 sm:w-10",
        "icon": "h-5 w-5 text-primary dark:text-gray-800 sm:h-6 sm:w-6"
      },
    },
  };
  return <Flowbite theme={{ theme: customTheme }}>{children}</Flowbite>;
}
