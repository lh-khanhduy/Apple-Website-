import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
import React, { useEffect, useState } from 'react';

import { smallHeroVideo, heroVideo } from '../utils/utils';

const Hero = () => {
	const [videoSrc, setVideoSrc] = useState(window.innerWidth < 760 ? smallHeroVideo : heroVideo);

	const handleVideoResponsively = () => {
		if (window.innerWidth < 760) {
			setVideoSrc(smallHeroVideo);
		} else setVideoSrc(heroVideo);
	};

	useEffect(() => {
		window.addEventListener('resize', handleVideoResponsively);

		return () => {
			window.removeEventListener('resize', handleVideoResponsively);
		};
	}, []);

	useGSAP(() => {
		gsap.to('#hero', {
			opacity: 1,
			delay: 1.75,
		});

		gsap.to('#cta', {
			opacity: 1,
			y: -75,
			delay: 1.75,
		});
	}, []);

	return (
		<section className="w-full nav-height bg-black relative">
			<div className="h-5/6 w-full flex-center flex-col">
				<p id="hero" className="hero-title">
					iPhone 15 Pro hehe xd
				</p>

				<div className="md:w-5/6 w-3/4">
					<video
						className="pointer-event-none"
						autoPlay
						muted
						loop
						playsInline={true}
						key={videoSrc}
					>
						<source src={videoSrc} type="video/mp4" />
					</video>
				</div>
			</div>

			<div id="cta" className="flex flex-col items-center opacity-0 translate-y-20">
				<a href="#highlights" className="btn">
					Buy
				</a>
				<p className="font-normal text-xl">From $199 or A$899</p>
			</div>
		</section>
	);
};

export default Hero;
