import { MainLayout } from '@modules/layout';
import { Loading } from '@shared/components';
import { Suspense } from 'react';

type BusinessLayoutProps = {
	params: {
		businessID: string;
	};
	children: React.ReactNode;
};

function BusinessLayout(props: BusinessLayoutProps): JSX.Element {
	const { children, params } = props;

	const businessID = params.businessID;

	return (
		<>
			<link rel="stylesheet" href={`/api/custom-theme/${businessID}`} />

			<Suspense fallback={<Loading />}>
				<MainLayout
					header={{ logo: `Logo ${businessID}`, url: `/root/${businessID}` }}
					socialMedias={{ instagram: '', whatsapp: '' }}
				>
					{children}
				</MainLayout>
			</Suspense>
		</>
	);
}

export default BusinessLayout;
