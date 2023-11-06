import { EmblaCarousel } from './embla-carousel';

const IMAGES = [
	{
		id: 1,
		src: 'https://rastreketec.com.br/wp-content/uploads/2021/09/f0e083d3d680bb95dbf8d68f4bcea8ed042960bcf1a1e78e7bf729772ea1c9c3.png',
		alt: 'Image 1',
	},
	{
		id: 2,
		src: 'https://rastreketec.com.br/wp-content/uploads/2021/09/f0e083d3d680bb95dbf8d68f4bcea8ed042960bcf1a1e78e7bf729772ea1c9c3.png',
		alt: 'Image 2',
	},
	{
		id: 3,
		src: 'https://rastreketec.com.br/wp-content/uploads/2021/09/f0e083d3d680bb95dbf8d68f4bcea8ed042960bcf1a1e78e7bf729772ea1c9c3.png',
		alt: 'Image 3',
	},
];

export function ImageCarousel(): JSX.Element {
	return (
		<div>
			<EmblaCarousel images={IMAGES} />
		</div>
	);
}
