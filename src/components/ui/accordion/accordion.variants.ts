import { cva } from "class-variance-authority";

export const accordionVariants = cva("bg-[#e6e7e7] rounded-xl", {
  variants: {
    size: {
      sm: "p-4 text-base",
      md: "p-8 text-lg",
      lg: "p-7 text-lg",
    },
  },
  defaultVariants: {
    size: "md",
  },
});
