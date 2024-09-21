import React, { useRef } from 'react';
import { rightImg, watchImg } from '../utils/utils';
import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
import VideoCarousel from './VideoCarousel';
import { ScrollTrigger } from 'gsap/all';

gsap.registerPlugin(ScrollTrigger);

const Highlights = () => {
	const headingRef = useRef(null);

	useGSAP(() => {
		gsap.to('#title', {
			y: 0,
			opacity: 1,
			scrollTrigger: {
				trigger: headingRef.current,
				start: 'top 90%',
				toggleActions: 'restart reverse restart reverse',
			},
		});
		gsap.to('.link', {
			opacity: 1,
			y: 0,
			duration: 0.6,
			stagger: 0.25,
			delay: 0.3,
			scrollTrigger: {
				trigger: headingRef.current,
				start: 'top 90%',
				toggleActions: 'restart reverse restart reverse',
			},
		});
	}, []);

	return (
		<section id="highlights" className="s-screen h-full overflow-hidden common-padding bg-zinc">
			<div className="screen-max-width">
				<div className="mb-12 w-full md:flex items-end justify-between">
					<h1 id="title" ref={headingRef} className="section-heading">
						Get the highlights.
					</h1>

					<div className="flex flex-wrap items-end gap-5">
						<p className="link" ref={headingRef}>
							Watch the film
							<img src={watchImg} alt="watch" className="ml-2" />
						</p>
						<p className="link" ref={headingRef}>
							Watch the event
							<img src={rightImg} alt="right" className="ml-2" />
						</p>
					</div>
				</div>

				<VideoCarousel />
			</div>
		</section>
	);
};

export default Highlights;
