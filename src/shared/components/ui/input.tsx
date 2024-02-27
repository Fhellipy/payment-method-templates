import { cn } from '@shared/lib';
import * as React from 'react';

export interface InputProps
	extends React.InputHTMLAttributes<HTMLInputElement> {
	label?: string;
	icon?: React.ReactNode;
	onClick?: () => void;
}

const Input = React.forwardRef<HTMLInputElement, InputProps>(
	({ className, type, label, icon, onClick, ...props }, ref) => {
		return (
			<div className="relative w-full">
				{label && (
					<label
						htmlFor={props.id ?? props.name}
						className="mb-1 font-semibold"
					>
						{label}
					</label>
				)}

				<input
					ref={ref}
					{...props}
					id={props.id ?? props.name}
					type={type ?? 'text'}
					value={props.value ?? ''}
					className={cn(
						'flex h-10 w-full rounded border bg-background p-2 text-sm placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-80',
						{ 'pr-10': icon },
						className,
					)}
				/>

				{icon && (
					<button
						type="button"
						title="Limpar campo"
						name={props.name}
						className="absolute right-2 top-2 cursor-pointer rounded text-muted-foreground focus-visible:ring-1"
						onClick={onClick}
					>
						{icon}
					</button>
				)}
			</div>
		);
	},
);
Input.displayName = 'Input';

export { Input };
