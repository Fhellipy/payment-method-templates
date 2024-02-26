import { MainLayout } from '@modules/layout';
import Home from './home';

export default function HomePage(): JSX.Element {
	return (
		<MainLayout
			header={{ logo: 'Logo', url: '/' }}
			socialMedias={{ instagram: '', whatsapp: '' }}
		>
			<Home />
		</MainLayout>
	);
}
