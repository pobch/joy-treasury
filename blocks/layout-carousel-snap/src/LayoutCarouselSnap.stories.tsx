import React from "react";
import type { Meta, StoryObj } from "@storybook/react";
import storyDialog from "../../../.storybook/decorators/storyDialog";
import Usage from "../usage.mdx";
import LayoutCarouselSnap from "./LayoutCarouselSnap";

const meta = {
  title: "Layout/Carousel/Snap",
  component: LayoutCarouselSnap,
  parameters: {
    layout: "padded",
  },
  decorators: [storyDialog(Usage)],
} satisfies Meta<typeof LayoutCarouselSnap>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Snap: Story = {
  render: () => (
    <LayoutCarouselSnap>
      {[...new Array(10)].map((_, index) => (
        <div style={{ display: "grid", gap: "0.5rem", width: 300 }}>
          <div
            key={index}
            style={{ backgroundColor: "gainsboro", height: 100 }}
          />
          <div
            style={{ backgroundColor: "gainsboro", height: 16, width: "24%" }}
          />
          <div
            style={{ backgroundColor: "gainsboro", height: 16, width: "80%" }}
          />
        </div>
      ))}
    </LayoutCarouselSnap>
  ),
};
