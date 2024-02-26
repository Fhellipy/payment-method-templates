'use client';

import Autoplay from 'embla-carousel-autoplay';
import useEmblaCarousel from 'embla-carousel-react';
import { ChevronLeftIcon, ChevronRightIcon } from 'lucide-react';
import { useCallback } from 'react';

type Image = {
	id: number;
	src: string;
	alt: string;
};

type BannersProps = {
	banners: Image[];
};

const OPTIONS = { loop: true };

export function BannersCarousel({ banners }: BannersProps): JSX.Element {
	const [emblaRef, emblaApi] = useEmblaCarousel(OPTIONS, [Autoplay()]);

	const scrollPrev = useCallback(
		() => emblaApi && emblaApi.scrollPrev(),
		[emblaApi],
	);

	const scrollNext = useCallback(
		() => emblaApi && emblaApi.scrollNext(),
		[emblaApi],
	);

	return (
		<div className="flex w-full min-w-[250px] max-w-[85rem] items-center rounded border p-2">
			<button
				className="inline-flex h-fit cursor-pointer touch-manipulation items-center"
				onClick={scrollPrev}
			>
				<ChevronLeftIcon size={30} className="text-gray-500" />
			</button>

			<div className="w-full overflow-hidden" ref={emblaRef}>
				<div className="flex touch-pan-y">
					{banners.map((banner) => (
						<div
							key={banner.id}
							className="relative min-w-0 flex-[100%] flex-shrink-0 flex-grow-0 pl-4"
						>
							<img
								className="block max-h-96 min-h-[15rem] w-full object-scale-down"
								src={banner.src}
								alt={banner.alt}
							/>
						</div>
					))}
				</div>
			</div>

			<button
				className="inline-flex h-fit cursor-pointer touch-manipulation items-center"
				onClick={scrollNext}
			>
				<ChevronRightIcon size={30} className="text-gray-500" />
			</button>
		</div>
	);
}
