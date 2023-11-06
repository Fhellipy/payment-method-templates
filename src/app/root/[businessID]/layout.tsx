import { Footer, Header, Loading } from '@/components';
import { Suspense } from 'react';

interface BusinessLayoutProps {
	params: {
		businessID: string;
	};
	children: React.ReactNode;
}

function BusinessLayout({
	children,
	params,
}: BusinessLayoutProps): JSX.Element {
	return (
		<>
			<link rel="stylesheet" href={`/api/custom-theme/${params.businessID}`} />

			<Suspense fallback={<Loading />}>
				<Header logo={`Logo ${params.businessID}`} />
				{children}
				<Footer social={{ instagram: '', whatsapp: '' }} />
			</Suspense>
		</>
	);
}

export default BusinessLayout;
