import { Loading } from '@/components';
import { Suspense } from 'react';

interface QuotaLayoutProps {
	params: {
		businessID: string;
	};
	children: React.ReactNode;
}

function MyPurchaseLayout({ children, params }: QuotaLayoutProps): JSX.Element {
	return (
		<>
			<link rel="stylesheet" href={`/api/custom-theme/${params.businessID}`} />

			<Suspense fallback={<Loading />}>{children}</Suspense>
		</>
	);
}

export default MyPurchaseLayout;
