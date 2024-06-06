import { AnimatePresence, motion } from 'framer-motion';
import React, { useEffect, useRef, useState } from 'react';
import energy from '../../img/energy.png';
import Scene from '../scene';

const Game = () => {
	const [currentImage, setCurrentImage] = useState(true);
	const [coinState, setCoinState] = useState(false);
	const [currCoins, setCurrCoins] = useState(0);
	const [position, setPosition] = useState({ x: '0', y: '0' });
	const [visible, setVisible] = useState(false);
	const [timeRemaining, setTimeRemaining] = useState('');
	const [animations, setAnimations] = useState([]);
	const [isAnimationActive, setIsAnimationActive] = useState(false);

	const [totalPoints, setTotalPoints] = useState(() => {
		const savedPoints = localStorage.getItem('totalPoints');
		return savedPoints ? parseInt(savedPoints, 10) : 0;
	});

	const [currEnergy, setCurrEnergy] = useState(() => {
		const savedEnergy = localStorage.getItem('currEnergy');
		return savedEnergy ? parseInt(savedEnergy, 10) : 1000;
	});

	const accumulatedCoinsRef = useRef(0);
	const [isCoinsChanged, setIsCoinsChanged] = useState(false);
	const isCoinsChangedRef = useRef(isCoinsChanged);
	const timeoutRef = useRef(null);
	const coinRef = useRef(null);
	const maxEnergy = 1000;
	let [energyVal, setEnergyVal] = useState(1);
	let [clickNewCoins, setClickNewCoins] = useState(1);

	const isDesktop = () => {
		const userAgent = window.navigator.userAgent;
		const isMobile =
			/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(userAgent);
		return !isMobile;
	};

	useEffect(() => {
		localStorage.setItem('currEnergy', currEnergy);
	}, [currEnergy]);

	useEffect(() => {
		localStorage.setItem('totalPoints', totalPoints);
	}, [totalPoints]);

	useEffect(() => {
		if (!isDesktop()) {
			const element = document.getElementById('clickableElement');
			if (element) {
				element.style.pointerEvents = 'none';
			}
		}
	}, []);

	const formatTime = (seconds) => {
		const minutes = Math.floor(seconds / 60);
		return `${minutes}`;
	};

	useEffect(() => {
		if (currEnergy >= 1000) {
			setCurrEnergy(1000);
		} else if (currEnergy <= 0) {
			setCurrEnergy(1000);
		}
	}, [currEnergy]);

	const updateCurrCoins = () => {
		setIsCoinsChanged(true);
		resetTimeout();
		return clickNewCoins;
	};

	const resetTimeout = () => {
		if (timeoutRef.current) {
			clearTimeout(timeoutRef.current);
		}
		timeoutRef.current = setTimeout(() => {
			setIsCoinsChanged(false);
			accumulatedCoinsRef.current = 0;
		}, 500);
	};

	useEffect(() => {
		isCoinsChangedRef.current = isCoinsChanged;
		return () => {
			if (timeoutRef.current) {
				clearTimeout(timeoutRef.current);
			}
		};
	}, [isCoinsChanged]);

	const coinClicker = (event) => {
		if (!event.isTrusted) return;
		setCurrentImage(false);
		setCoinState(true);
		handleShowAnimation(event);
		setCurrEnergy((prevEnergy) => Math.min(prevEnergy - energyVal, 1000));
		const clickNewCoins = updateCurrCoins();
		setCurrCoins((prevCoins) => prevCoins + clickNewCoins);
		accumulatedCoinsRef.current += clickNewCoins;
	};

	const handleTouchStart = (event) => {
		if (event.touches && event.touches.length > 1) {
			event.preventDefault();
			return;
		}
		if (!event.isTrusted) return;
		setCurrentImage(false);
		setCoinState(true);
		handleShowAnimation(event);
	};

	const handleTouchEnd = (event) => {
		if (event && event.changedTouches && event.changedTouches.length > 0) {
			Array.from(event.changedTouches).forEach((touch) => {
				handleShowAnimation({
					touches: [touch],
					target: event.target,
					currentTarget: event.currentTarget,
				});
			});
		} else {
			handleShowAnimation(event);
		}

		const clickNewCoins = updateCurrCoins();
		setCurrCoins((prevCoins) => prevCoins + clickNewCoins);
		setTotalPoints((prevCoins) => prevCoins + clickNewCoins);
		accumulatedCoinsRef.current += clickNewCoins;
		setCurrEnergy((prevEnergy) => Math.min(prevEnergy - energyVal, 1000));
	};

	const handleShowAnimation = (event) => {
		if (!event) return;

		if (event.stopPropagation) {
			event.stopPropagation();
		}

		const touch = event.touches ? event.touches[0] : event;
		const clicker = event.currentTarget || touch.target;
		if (!clicker) return;

		const rect = clicker.getBoundingClientRect();
		const x = touch.clientX - rect.left;
		const y = touch.clientY - rect.top;

		console.log('Touch event:', touch);
		console.log('Clicker element:', clicker);
		console.log('Bounding rect:', rect);
		console.log('Calculated coordinates:', { x, y });

		setAnimations((prev) => [...prev, { x, y }]);
		setIsAnimationActive(true);
	};

	const clearAnimations = () => {
		setAnimations([]);
	};

	return (
		<>
			<div
				style={{
					display: 'flex',
					flexDirection: 'row',
					gap: '20px',
					position: 'absolute',
					top: '20px',
					width: '100%',
				}}
			>
				<div
					style={{
						display: 'flex',
						marginLeft: '20px',
						flexDirection: 'column',
						width: '100%',
					}}
				>
					<div
						style={{
							display: 'flex',
							alignItems: 'center',
							flexDirection: 'row',
							width: '100%',
						}}
					>
						<img
							src={energy}
							alt=''
							style={{
								paddingRight: '10px',
							}}
						/>
						<div
							style={{
								display: 'flex',
								flexDirection: 'row',
								width: '100%',
							}}
						>
							<p className='energyCount' id='energyCount'>
								{currEnergy}
							</p>
							<span>/</span>
							<p className='maximumEnergy' id='maximumEnergy'>
								1000
							</p>
						</div>
					</div>
					<div
						className='energyBar'
						style={{
							marginTop: '10px',
							width: '100%',
						}}
					>
						<progress
							className='filledBar'
							id='filledBar'
							max='1000'
							value={currEnergy}
						></progress>
					</div>
				</div>
				{totalPoints !== null && (
					<div
						style={{
							display: 'flex',
							marginRight: '20px',
							justifyContent: 'center',
							alignItems: 'start',
							width: '100%',
							paddingTop: '4px',
						}}
					>
						<span>Total Points: {totalPoints}</span>
					</div>
				)}
			</div>
			<div
				onClick={isDesktop() ? coinClicker : null}
				onTouchStart={handleTouchStart}
				onTouchEnd={(e) => handleTouchEnd(e.touches[0], e)}
				style={{
					display: 'flex',
					width: '100%',
					height: 'calc(100vh - 132px)',
					flexGrow: '1',
				}}
			>
				{animations.map((anim, index) => (
					<AnimatePresence key={index}>
						{isAnimationActive && (
							<motion.div
								className='clickerAnimation'
								initial={{ opacity: 1, y: 0 }}
								animate={{ opacity: [1, 0], y: [-30, -120] }}
								exit={{ opacity: 0 }}
								transition={{ duration: 2 }}
								style={{
									fontSize: '35px',
									left: `${anim.x}px`,
									top: `${anim.y}px`,
									position: 'absolute',
									color: '#fff',
									zIndex: 150,
									textShadow: '0px 4px 6px rgba(0, 0, 0, 0.5)',
								}}
								onAnimationComplete={() => {
									clearAnimations(index);
								}}
							>
								+{clickNewCoins}
							</motion.div>
						)}
					</AnimatePresence>
				))}
				<Scene
					style={{
						position: 'relative',
						width: '100%',
						height: '100%',
						overflow: 'hidden',
						pointerEvents: 'auto',
						touchAction: 'none',
					}}
				/>
			</div>
			<div
				style={{
					display: 'flex',
					bottom: '20px',
					position: 'absolute',
					width: '100%',
					justifyContent: 'center',
					alignItems: 'center',
				}}
			>
				<div
					style={{
						display: 'flex',
						justifyContent: 'center',
						alignItems: 'center',
					}}
				>
					<span>For Session: {currCoins}</span>
				</div>
			</div>
		</>
	);
};

export default Game;
