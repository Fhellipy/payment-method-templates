import { Footer, Header } from '@/components';
import Home from './home';

export default function HomePage(): JSX.Element {
	return (
		<>
			<Header logo="Logo" />
			<Home />
			<Footer social={{ instagram: '', whatsapp: '' }} />
		</>
	);
}
