import type { Preview } from "@storybook/react";
import {  Recursive  } from "next/font/google";
import * as React from "react";
import "@/styles/globals.css";
import "@/styles/_style.module.scss";

const inter =  Recursive ({ subsets: ["latin"] });

const preview: Preview = {
  parameters: {
    actions: { argTypesRegex: "^on.*" },
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/,
      },
    },
  },
  decorators: [
    (Story) => (
      <div className={`${inter.className}`}>
        <Story />
      </div>
    ),
  ],
};

export default preview;
