'use client';

import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { useState } from 'react';
import { GenericErrorBoundary } from '../generic-error-boundary';

type GlobalProvidersProps = {
	children: React.ReactNode;
};

export function GlobalProviders({ children }: GlobalProvidersProps) {
	const [queryClient] = useState(() => new QueryClient());

	return (
		<QueryClientProvider client={queryClient}>
			<GenericErrorBoundary>{children}</GenericErrorBoundary>
		</QueryClientProvider>
	);
}
