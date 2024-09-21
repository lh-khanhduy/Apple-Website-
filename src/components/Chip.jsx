import React, { useRef } from 'react';
import { chipImg, frameImg, frameVideo } from '../utils/utils';
import { useGSAP } from '@gsap/react';
import { ScrollTrigger } from 'gsap/all';
import gsap from 'gsap';

gsap.registerPlugin(ScrollTrigger);

const Chip = () => {
	const videoRef = useRef(null);

	useGSAP(() => {
		//make the chip shrink & fade in
		gsap.from('#chip', {
			scrollTrigger: {
				trigger: '#chip',
				start: '30% bottom',
				toggleActions: 'restart reverse restart reverse',
			},
			opacity: 0,
			scale: 2,
			duration: 1.5,
			ease: 'power1.inOut',
		});

		//make the chip text fade in
		gsap.to('.g_chip-text', {
			scrollTrigger: {
				trigger: '.g_chip-text',
				start: '20% bottom',
				toggleActions: 'restart reverse restart reverse',
			},
			x: 0,
			opacity: 1,
			duration: 1.5,
			ease: 'power1.inOut',
		});

		//make the honkai video repeat

		gsap.to('#honkai-video', {
			scrollTrigger: {
				trigger: '#honkai-video',
				toggleActions: 'play pause reverse restart',
				start: '-10% bottom',
			},
			onComplete: () => {
				videoRef.current.play();
			},
		});

		//make the game chip text fade in
		gsap.to('.g_fadeIn', {
			scrollTrigger: {
				trigger: '.g_fadeIn',
				start: '20% bottom',
				toggleActions: 'restart reverse restart reverse',
			},
			opacity: 1,
			y: 0,
			duration: 1,
			ease: 'power1.inOut',
		});
	}, []);

	return (
		<section className="h-full common-padding">
			<div className="max-screen-width">
				<div id="chip" className="flex-center w-full my-20">
					<img src={chipImg} alt="chip" width={180} height={180} />
				</div>

				<div className="flex flex-col items-center">
					<h2 className="hiw-title translate-x-80 opacity-0 g_chip-text">
						A17 Pro chip.
						<br /> A monster win for gaming.
					</h2>

					<p className="hiw-subtitle -translate-x-80 opacity-0 g_chip-text">
						It's here. The biggest redesign in the history of Apple GPUs.
					</p>
				</div>

				<div className="mt-10 md:mt-20 mb-14">
					<div className="relative h-full lg:w-[130vh] lg:ml-48 flex-center">
						<div className="overflow-hidden">
							<img
								src={frameImg}
								alt="frame"
								className="bg-transparent relative z-10"
							/>
						</div>

						<div className="hiw-video">
							<video
								id="honkai-video"
								className="pointer-event-none"
								playsInline
								muted
								loop
								preload="none"
								autoPlay
								ref={videoRef}
							>
								<source src={frameVideo} type="video/mp4" />
							</video>
						</div>
					</div>

					<p className="text-gray font-semibold mt-3 text-center lg:text-4xl lg:mb-6">
						Honkai: Star Rail
					</p>

					<div className="hiw-text-container">
						<div className="flex flex-1 justify-center flex-col">
							<p className="hiw-text g_fadeIn">
								A17 Pro is an entirely new class of iPhone chip that delivers our{' '}
								<span className="text-white">best graphic performance by far</span>.
							</p>

							<p className="hiw-text g_fadeIn">
								Mobile{' '}
								<span className="text-white">
									games will look and feel so immersive
								</span>
								, with incredibly detailed environments and characters.
							</p>
						</div>

						<div className="flex-1 flex justify-center flex-col g_fadeIn">
							<p className="hiw-text">New</p>
							<p className="hiw-bigtext">Pro-class GPU</p>
							<p className="hiw-text">with 6 cores</p>
						</div>
					</div>
				</div>
			</div>
		</section>
	);
};

export default Chip;
