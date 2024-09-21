import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
import React from 'react';
import ModelView from './ModelView';
import { useRef } from 'react';

import { ScrollTrigger } from 'gsap/all';

gsap.registerPlugin(ScrollTrigger);

const Model = () => {
	const headingRef = useRef(null);

	useGSAP(() => {
		gsap.to('#heading', {
			y: 0,
			opacity: 1,
			delay: 0.2,
			duration: 0.6,
			scrollTrigger: {
				trigger: headingRef.current,
				start: 'top 85%',
				toggleActions: 'restart reverse restart reverse',
			},
		});
	}, []);

	return (
		<section className="common-padding">
			<div className="screen-max-width">
				<h1 id="heading" className="section-heading" ref={headingRef}>
					Take a closer look.
				</h1>

				<div className="flex flex-col items-center mt-5">
					<div className="w-full h-[75vh] md:w-[90vh] overflow-hidden relative">
						<ModelView />
					</div>
				</div>
			</div>
		</section>
	);
};

export default Model;
