'use client';

import { ErrorBoundary, type FallbackProps } from 'react-error-boundary';
import { ErrorBoundaryFallback } from './error-boundary-fallback';

type GenericErrorBoundaryProps = {
	fallback?: (props: FallbackProps) => React.ReactNode;
	children: React.ReactNode;
};

export function GenericErrorBoundary(props: GenericErrorBoundaryProps) {
	const { fallback, children } = props;

	return (
		<ErrorBoundary FallbackComponent={fallback ?? ErrorBoundaryFallback}>
			{children}
		</ErrorBoundary>
	);
}
