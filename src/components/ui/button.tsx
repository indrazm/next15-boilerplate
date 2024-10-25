import React from "react"
import { twMerge } from "tailwind-merge"
import { tv, VariantProps } from "tailwind-variants"

const style = tv({
  base: "inline-flex items-center justify-center rounded-lg bg-transparent font-medium transition duration-200 ease-in-out hover:opacity-80 active:opacity-90",
  variants: {
    variant: {
      primary: "bg-primary text-primary-foreground",
      secondary: "bg-secondary text-secondary-foreground",
    },
    size: {
      sm: "px-3 py-2 text-sm",
      md: "px-4 py-3 text-base",
      lg: "px-6 py-4 text-lg",
    },
  },
  defaultVariants: {
    variant: "primary",
    size: "md",
  },
})

type ButtonVariants = VariantProps<typeof style>
interface ButtonProps extends ButtonVariants, React.ComponentPropsWithoutRef<"button"> {}

export const Button = (props: ButtonProps) => {
  return <button {...props} className={twMerge(style({ ...props }), props.className)} />
}
