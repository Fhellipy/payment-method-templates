import { cn } from '@shared/lib';
import { cva } from 'class-variance-authority';
import { type ClassValue } from 'clsx';

type LoadingProps = {
	className?: ClassValue;
	size?: 'sm' | 'md' | 'lg';
};

export function Loading({ size = 'lg', className }: LoadingProps): JSX.Element {
	const loadingVarinats = cva(
		'animate-rotate h-16 w-16 rounded-full border-8 border-primary border-l-transparent',
		{
			variants: {
				size: {
					sm: 'h-8 w-8 border-4',
					md: 'h-12 w-12 border-[6px]',
					lg: 'h-16 w-16',
				},
			},
		},
	);

	return (
		<div
			className={cn(
				'flex min-h-[55rem] w-full items-center justify-center',
				className,
			)}
		>
			<span className={cn(loadingVarinats({ size }))}></span>
		</div>
	);
}
