import React from "react"
import { twMerge } from "tailwind-merge"
import { tv, VariantProps } from "tailwind-variants"

const style = tv({
  base: "shadow-primary/5 border-primary/20 block w-full rounded-lg border shadow-sm",
  variants: {
    size: {
      sm: "px-3 py-2 text-sm",
      md: "px-4 py-3 text-base",
      lg: "px-6 py-4 text-lg",
    },
  },
  defaultVariants: {
    size: "md",
  },
})

type InputProps = VariantProps<typeof style>
interface InputVariants extends InputProps, Omit<React.InputHTMLAttributes<HTMLInputElement>, "size"> {}

export const Input = (props: InputVariants) => {
  return <input {...props} className={twMerge(style({ ...props }), props.className)} size={undefined} />
}
