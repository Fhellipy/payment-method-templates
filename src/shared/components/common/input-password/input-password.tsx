'use client';

import { cn } from '@shared/lib';
import { EyeIcon, EyeOffIcon } from 'lucide-react';
import { forwardRef, useState } from 'react';

type InputPasswordProps = React.InputHTMLAttributes<HTMLInputElement>;

export const InputPassword = forwardRef<HTMLInputElement, InputPasswordProps>(
	({ className, ...props }, ref) => {
		const [show, setShow] = useState(false);

		function toggleShowPassword() {
			if (props.disabled) return;

			setShow(!show);
		}

		return (
			<div data-testid="input-password" className="relative">
				<input
					ref={ref}
					{...props}
					type={show ? 'text' : 'password'}
					value={props.value ?? ''}
					className={cn(
						'flex h-10 w-full rounded border bg-background p-2 pr-10 text-sm placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50',
						className,
					)}
				/>

				{show ? (
					<EyeOffIcon
						size={20}
						className="absolute right-2 top-2.5 cursor-pointer text-muted-foreground"
						onClick={toggleShowPassword}
					/>
				) : (
					<EyeIcon
						size={20}
						className="absolute right-2 top-2.5 cursor-pointer text-muted-foreground"
						onClick={toggleShowPassword}
					/>
				)}
			</div>
		);
	},
);

InputPassword.displayName = 'InputPassword';
