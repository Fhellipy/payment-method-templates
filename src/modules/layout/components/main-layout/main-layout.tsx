'use client';

import { GlobalProviders } from '@/shared/components';
import {
	Footer,
	Header,
	type HeaderType,
	type SocialMediasType,
} from '@modules/layout';

type MainLayoutProps = {
	children: React.ReactNode;
	header: HeaderType;
	socialMedias: SocialMediasType;
};

export function MainLayout(props: MainLayoutProps) {
	const { children, header, socialMedias } = props;

	return (
		<GlobalProviders>
			<Header {...header} />
			{children}
			<Footer social={socialMedias} />
		</GlobalProviders>
	);
}
