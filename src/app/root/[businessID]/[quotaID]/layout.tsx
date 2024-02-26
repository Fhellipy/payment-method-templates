import { Loading } from '@shared/components';
import { Suspense } from 'react';

type QuotaLayoutProps = {
	params: {
		businessID: string;
	};
	children: React.ReactNode;
};

function QuotaLayout({ children, params }: QuotaLayoutProps): JSX.Element {
	return (
		<>
			<link rel="stylesheet" href={`/api/custom-theme/${params.businessID}`} />

			<Suspense fallback={<Loading />}>{children}</Suspense>
		</>
	);
}

export default QuotaLayout;
