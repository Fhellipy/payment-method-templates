'use client';

import Autoplay from 'embla-carousel-autoplay';
import useEmblaCarousel, { type EmblaOptionsType } from 'embla-carousel-react';
import { ChevronLeftIcon, ChevronRightIcon } from 'lucide-react';
import { useCallback } from 'react';

type Image = {
	id: number;
	src: string;
	alt: string;
};

type EmblaCarouselProps = {
	images: Image[];
};

const OPTIONS: EmblaOptionsType = { loop: true };

export function EmblaCarousel({ images }: EmblaCarouselProps): JSX.Element {
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
		<div className="flex min-w-[250px] max-w-[85rem] items-center rounded border p-2">
			<button
				className="inline-flex h-fit cursor-pointer touch-manipulation items-center"
				onClick={scrollPrev}
			>
				<ChevronLeftIcon size={30} className="text-gray-500" />
			</button>

			<div className="overflow-hidden" ref={emblaRef}>
				<div className="flex touch-pan-y">
					{images.map((image) => (
						<div
							key={image.id}
							className="relative min-w-0 flex-[100%] flex-shrink-0 flex-grow-0 pl-4"
						>
							<img
								className="block max-h-96 min-h-[15rem] w-full object-scale-down"
								src={image.src}
								alt={image.alt}
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
