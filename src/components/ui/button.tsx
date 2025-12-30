import * as React from "react"

// Simple utility: merge class names
function cn(...classes: Array<string | undefined | false | null>) {
  return classes.filter(Boolean).join(" ")
}

// Supported variants and sizes without external deps
type ButtonVariant = "default" | "secondary" | "outline" | "ghost" | "destructive" | "link"
type ButtonSize = "sm" | "md" | "lg" | "icon"

const baseClasses =
  "inline-flex items-center justify-center whitespace-nowrap rounded-sm text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50"

const variantClasses: Record<ButtonVariant, string> = {
  default: "bg-[#1abddd] text-white hover:bg-[#15aecb] focus-visible:ring-[#1abddd]",
  secondary: "bg-slate-100 text-slate-900 hover:bg-slate-200",
  outline: "border border-slate-300 bg-transparent text-slate-900 hover:bg-slate-100",
  ghost: "bg-transparent hover:bg-slate-100 text-slate-900",
  destructive: "bg-red-600 text-white hover:bg-red-700",
  link: "bg-transparent underline-offset-4 hover:underline text-[#1abddd]",
}

const sizeClasses: Record<ButtonSize, string> = {
  sm: "h-9 px-3",
  md: "h-10 px-4",
  lg: "h-11 px-6 text-base",
  icon: "h-10 w-10 p-0",
}

export interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: ButtonVariant
  size?: ButtonSize
}

export const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant = "default", size = "md", ...props }, ref) => {
    const classes = cn(baseClasses, variantClasses[variant], sizeClasses[size], className)
    return <button className={classes} ref={ref} {...props} />
  }
)

Button.displayName = "Button"

export default Button