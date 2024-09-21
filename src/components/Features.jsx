import { useGSAP } from '@gsap/react';
import React, { useRef } from 'react';
import { ScrollTrigger } from 'gsap/all';
import gsap from 'gsap';
import { explore1Img, explore2Img, exploreVideo } from '../utils/utils';

gsap.registerPlugin(ScrollTrigger);

const Features = () => {
	const videoRef = useRef(null);

	useGSAP(() => {
		//make features title appear
		gsap.to('#features-title', {
			y: 0,
			opacity: 1,
			duration: 0.6,
			scrollTrigger: {
				trigger: '#features-title',
				start: 'top 85%',
				toggleActions: 'restart reverse restart reverse',
			},
		});

		//make the explore video repeat
		gsap.to('#exploreVideo', {
			scrollTrigger: {
				trigger: '#exploreVideo',
				toggleActions: 'play pause reverse restart',
				start: '-10% bottom',
			},
			onComplete: () => {
				videoRef.current.play();
			},
		});

		//make feature images appear along side with text (below)
		gsap.to('.g_grow', {
			scale: 1,
			opacity: 1,
			ease: 'power1',
			scrollTrigger: {
				trigger: '.g_grow',
				start: 'top 85%',
				toggleActions: 'restart reverse restart reverse',
				scrub: 5.5,
			},
		});

		//make the text appear shortly after the feature images appear (above)
		gsap.to('.g_text', {
			y: 0,
			opacity: 1,
			duration: 1,
			scrollTrigger: {
				trigger: '.g_text',
				start: 'top 85%',
				toggleActions: 'restart reverse restart reverse',
			},
		});
	}, []);

	return (
		<section className="h-full common-padding bg-zinc relative overflow-hidden">
			<div className="screen-max-width">
				<div className="mb-12 w-full">
					<h1 id="features-title" className="section-heading">
						{' '}
						Explore the full story.
					</h1>
				</div>

				<div className="flex flex-col justify-center items-center overflow-hidden">
					<div className="mt-32 mb-24 flex flex-col justify-between items-center">
						<h2 className="text-4xl lg:text-7xl font-semibold">iPhone</h2>
						<h2 className="text-4xl lg:text-7xl font-semibold">Forged in Titanium.</h2>
					</div>

					<div className="flex-center flex-col sm:px-10">
						<div className="relative h-[50vh] w-full flex items-center">
							<video
								id="exploreVideo"
								playsInline={true}
								muted
								loop
								preload="none"
								autoPlay
								className="w-full h-full object-cover object-center"
								ref={videoRef}
							>
								<source src={exploreVideo} type="video/mp4" />
							</video>
						</div>
						<div className="flex flex-col w-full relative">
							<div className="feature-video-container">
								<div className="overflow-hidden flex-1 h-[50vh]">
									<img
										src={explore1Img}
										alt="titanium"
										className="feature-video g_grow"
									/>
								</div>
								<div className="overflow-hidden flex-1 h-[50vh]">
									<img
										src={explore2Img}
										alt="titanium2"
										className="feature-video g_grow"
									/>
								</div>
							</div>

							<div className="feature-text-container">
								<div className="flex-1 flex-center">
									<p className="feature-text g_text">
										iPhone 15 Pro is{' '}
										<span className="text-white">
											the first iPhone to feature an aerospace-grade titanium
											design
										</span>
										, using the same alloy that spacecrafts use for missions to
										Mars.
									</p>
								</div>

								<div className="flex-1 flex-center">
									<p className="feature-text g_text">
										Titanium has one of the best strength-to-weight ratios of
										any metal, making these our{' '}
										<span className="text-white">
											lightest Pro models ever.
										</span>
										You'll notice the difference the moment you pick one up.
									</p>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</section>
	);
};

export default Features;
