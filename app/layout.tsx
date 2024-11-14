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
    pagination: {
      "base": "text-base",
      "layout": {
        "table": {
          "base": "text-sm text-gray-700 dark:text-gray-400",
          "span": "font-semibold text-gray-900 dark:text-white"
        }
      },
      "pages": {
        "base": "xs:mt-0 mt-2 inline-flex items-center -space-x-px",
        "showIcon": "inline-flex",
        "previous": {
          "base": "ms-0 rounded-s-lg border border-gray-300 bg-white px-3 py-2 leading-tight text-gray-500 enabled:hover:bg-gray-100 enabled:hover:text-gray-700 dark:border-gray-700 dark:bg-gray-800 dark:text-gray-400 enabled:dark:hover:bg-gray-700 enabled:dark:hover:text-white",
          "icon": "h-5 w-5"
        },
        "next": {
          "base": "rounded-e-lg border border-gray-300 bg-white px-3 py-2 leading-tight text-gray-500 enabled:hover:bg-gray-100 enabled:hover:text-gray-700 dark:border-gray-700 dark:bg-gray-800 dark:text-gray-400 enabled:dark:hover:bg-gray-700 enabled:dark:hover:text-white",
          "icon": "h-5 w-5"
        },
        "selector": {
          "base": "w-12 border border-gray-300 bg-white py-2 leading-tight text-gray-500 enabled:hover:bg-gray-100 enabled:hover:text-gray-700 dark:border-gray-700 dark:bg-gray-800 dark:text-gray-400 enabled:dark:hover:bg-gray-700 enabled:dark:hover:text-white",
          "active": "bg-cyan-50 text-cyan-600 hover:bg-cyan-100 hover:text-cyan-700 dark:border-gray-700 dark:bg-gray-700 dark:text-white",
          "disabled": "cursor-not-allowed opacity-50"
        }
      }
    }
  };
  
  return <Flowbite theme={{ theme: customTheme }}>{children}</Flowbite>;
}
