import Link from 'next/link';
import { cva, type VariantProps } from 'class-variance-authority';
import { twMerge } from 'tailwind-merge';

const buttonVariants = cva(
  'inline-flex items-center justify-center rounded-md text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 disabled:opacity-50 disabled:pointer-events-none',
  {
    variants: {
      variant: {
        primary: 'bg-primary text-white hover:bg-primary/90',
        outline: 'border border-input bg-transparent hover:bg-accent hover:text-accent-foreground',
        secondary: 'bg-secondary text-secondary-foreground hover:bg-secondary/80',
        ghost: 'hover:bg-accent hover:text-accent-foreground',
        link: 'underline-offset-4 hover:underline text-primary',
      },
      size: {
        default: 'h-10 py-2 px-4',
        sm: 'h-9 px-3 rounded-md',
        lg: 'h-11 px-8 rounded-md',
      },
    },
    defaultVariants: {
      variant: 'primary',
      size: 'default',
    },
  }
);

// Propiedades comunes que ambos tipos de botón pueden tener
interface CommonProps extends VariantProps<typeof buttonVariants> {
  className?: string;
  children?: React.ReactNode;
}

// Propiedades para cuando el botón se renderiza como un <button>
interface ButtonAsButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement>, CommonProps {
  href?: undefined; // Asegura que href no esté presente
}

// Propiedades para cuando el botón se renderiza como un <Link>
interface ButtonAsLinkProps extends React.AnchorHTMLAttributes<HTMLAnchorElement>, CommonProps {
  href: string; // Asegura que href siempre esté presente y sea un string
}

// Unión discriminada: ButtonProps puede ser uno de los dos tipos anteriores
type ButtonProps = ButtonAsButtonProps | ButtonAsLinkProps;

export const Button = ({ className, variant, size, children, ...props }: ButtonProps) => {
  const classes = twMerge(buttonVariants({ variant, size, className }));

  // Type guard para distinguir entre ButtonAsButtonProps y ButtonAsLinkProps
  if ('href' in props && props.href !== undefined) {
    // Si href está presente, renderizamos como Link
    const { href, ...rest } = props as ButtonAsLinkProps; // Casteamos para TypeScript
    return (
      <Link href={href} className={classes} {...rest}>
        {children}
      </Link>
    );
  } else {
    // Si href no está presente, renderizamos como <button>
    return (
      <button className={classes} {...(props as ButtonAsButtonProps)}>
        {children}
      </button>
    );
  }
};