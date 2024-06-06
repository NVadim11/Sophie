import AOS from 'aos';
import { useEffect, useRef, useState } from 'react';
// import NotFound from './components/404';
// import TelegramLinking from './components/QRcode';
// import ComingSoon from './components/comingSoon';
import Header from './components/header';
// import Maintenance from './components/maintenance';
import Navigation from './components/navigation';

import './App.css';
import energy from './img/energy.png';
import sophia_preload from './img/sophia_preload.png';
import sophia_qr from './img/sophia_qr.png';

const App = () => {
	const [preloaderLoaded, setPreloaderLoaded] = useState(false);
	const imagesRef = useRef([]);

	useEffect(() => {
		const loadImage = (src) => {
			return new Promise((resolve, reject) => {
				const img = new Image();
				img.src = src;
				img.onload = () => resolve(img);
				img.onerror = () => reject(new Error(`Failed to load image from ${src}`));
			});
		};

		const imageSources = [sophia_qr, sophia_preload, energy];

		const loadImages = async () => {
			const promises = imageSources.map((src) => loadImage(src));

			try {
				const loadedImages = await Promise.all(promises);
				imagesRef.current = loadedImages;
				checkAllLoaded();
			} catch (e) {
				console.log('problem loading images');
			}
		};

		const checkAllLoaded = () => {
			if (imagesRef.current.length === imageSources.length) {
				setTimeout(() => {
					setPreloaderLoaded(true);
					AOS.init({
						easing: 'custom',
					});
				}, 2000);
			}
		};
		loadImages();
	}, []);

	// Detecting if the application is opened from a mobile device
	const isMobileDevice =
		/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(
			navigator.userAgent
		);

	return (
		<>
			<>
				{/* {!isMobileDevice ? (
					<TelegramLinking />
				) : ( */}
				<>
					{/* <Preloader loaded={preloaderLoaded} /> */}
					<>
						<Header />

						<Navigation />

						{/* <ComingSoon />
						<Maintenance />
						<NotFound /> */}
					</>
				</>
				{/* )} */}
			</>
		</>
	);
};

export default App;
