import { cva } from "class-variance-authority";

export const buttonVariants = cva(
  "inline-flex items-center justify-center gap-2 font-bold text-center whitespace-nowrap transition-all duration-200 border-none cursor-pointer outline-none focus-visible:outline-[3px] focus-visible:outline-offset-2 active:scale-[0.98]",
  {
    variants: {
      variant: {
        fill: "bg-weg-purple text-white rounded-full shadow-[0px_4px_6px_-1px_rgba(0,0,0,0.1),0px_2px_4px_-1px_rgba(0,0,0,0.06)] hover:bg-weg-purple-hover hover:shadow-[0px_6px_8px_-1px_rgba(0,0,0,0.15),0px_3px_5px_-1px_rgba(0,0,0,0.08)] focus-visible:outline-weg-purple disabled:bg-gray-300 disabled:text-gray-400 disabled:shadow-none disabled:cursor-not-allowed",
        outline:
          "bg-neutral-100 text-weg-purple border-2 border-weg-purple rounded-full hover:bg-neutral-200 hover:border-weg-purple-hover hover:text-weg-purple-hover focus-visible:outline-weg-purple disabled:bg-neutral-100 disabled:border-gray-300 disabled:text-gray-400 disabled:cursor-not-allowed",
        text: "bg-transparent text-weg-blue font-light underline decoration-skip-ink-none underline-offset-auto p-0 hover:text-weg-blue-hover hover:decoration-2 focus-visible:outline-2 focus-visible:outline-weg-blue focus-visible:rounded disabled:text-gray-400 disabled:cursor-not-allowed",
      },
      size: {
        sm: "px-4 h-11 text-base [&_.button__text]:leading-[26px] [&_.button__icon]:w-5 [&_.button__icon]:h-5",
        md: "px-5 h-12 text-lg [&_.button__text]:leading-7 [&_.button__icon]:w-6 [&_.button__icon]:h-6",
        lg: "px-6 h-14 text-xl [&_.button__text]:leading-[30px] [&_.button__icon]:w-7 [&_.button__icon]:h-7",
        xl: "px-7 h-16 text-[22px] [&_.button__text]:leading-8 [&_.button__icon]:w-8 [&_.button__icon]:h-8",
      },
      fullWidth: {
        true: "w-full justify-between [&_.button__icon--left]:mr-auto [&_.button__icon--right]:ml-auto",
        false: "",
      },
    },
    compoundVariants: [
      {
        variant: "text",
        size: "sm",
        className: "text-sm h-auto min-h-7",
      },
      {
        variant: "text",
        size: "md",
        className: "text-base h-auto min-h-7",
      },
      {
        variant: "text",
        size: "lg",
        className: "text-lg h-auto min-h-8",
      },
      {
        variant: "text",
        size: "xl",
        className: "text-xl h-auto min-h-8",
      },
      {
        variant: "text",
        fullWidth: true,
        className: "justify-center",
      },
    ],
    defaultVariants: {
      variant: "fill",
      size: "md",
      fullWidth: false,
    },
  }
);
