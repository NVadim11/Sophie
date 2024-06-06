import React, { useEffect, useState } from 'react';
import sophia_preload from '../../img/sophia_preload.png';

const ProgressBar = ({ progress, rotate }) => {
	const radius = 140; // Radius of the circle
	const strokeWidth = 8; // Width of the stroke
	const normalizedRadius = radius - strokeWidth * 2;
	const circumference = normalizedRadius * 2 * Math.PI;

	// Calculate the strokeDashoffset based on the progress and offset
	const strokeDashoffset = circumference - (progress / 60) * circumference;

	return (
		<svg
			height={radius * 2}
			width={radius * 2}
			className={`progress-bar ${rotate ? 'rotate' : ''}`}
		>
			<circle
				className='progress-bar-background'
				stroke='#5c556c'
				opacity={0.5}
				fill='transparent'
				strokeWidth={strokeWidth}
				r={normalizedRadius}
				cx={radius}
				cy={radius}
			/>
			<circle
				className='progress-bar-progress'
				stroke='#717f90'
				fill='transparent'
				strokeWidth={strokeWidth}
				strokeDasharray={circumference + ' ' + circumference}
				style={{ strokeDashoffset }}
				r={normalizedRadius}
				cx={radius}
				cy={radius}
			/>
		</svg>
	);
};

const Preloader = ({ loaded }) => {
	const [progress, setProgress] = useState(0);

	useEffect(() => {
		const interval = setInterval(() => {
			setProgress((prevProgress) => (prevProgress === 0 ? 100 : prevProgress + 1));
		}, 35);

		return () => {
			clearInterval(interval);
		};
	}, []);

	return (
		<>
			<div className={`preloader${loaded ? ' loaded' : ''}`}>
				<div
					className='progress-container'
					style={{
						zIndex: '1005',
						position: 'relative',
						display: 'flex',
						alignItems: 'center',
						justifyContent: 'center', // Center horizontally
						height: '100vh', // Full viewport height
					}}
				>
					<div
						style={{
							zIndex: '1005',
							width: '250px',
							height: '250px',
							position: 'absolute',
							borderRadius: '100%',
						}}
					>
						<img
							className='cat-image'
							src={sophia_preload}
							alt='Tim The Cat'
							style={{
								zIndex: '1000',
								display: 'flex',
								alignItems: 'center',
								justifyContent: 'center',
								width: '100%',
							}}
						/>
					</div>
					<ProgressBar
						progress={progress}
						rotate={progress === 100}
						style={{
							zIndex: '1005',
						}}
					/>
				</div>
			</div>
		</>
	);
};

export default Preloader;
