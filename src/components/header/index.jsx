import React, { useEffect, useRef, useState } from 'react';
import { Dialog, DialogContent, Typography,  Backdrop, IconButton } from '@mui/material';
import EmojiEventsIcon from '@mui/icons-material/EmojiEvents';
import PeopleOutlineIcon from '@mui/icons-material/PeopleOutline';
import CloseIcon from '@mui/icons-material/Close';
import Leaderboard from '../leaderboard';
import Referral from '../referral';

const Header = () => {
	const [isToggled, setIsToggled] = useState(false);
	const [isShown, setIsShown] = useState(false);
	const [totalReferrals, setTotalReferrals] = useState(0);
	const [isElementPresent, setIsElementPresent] = useState(false);

	const containerRef = useRef(null);

	const [isLeaderboardOpen, setIsLeaderboardOpen] = useState(false);
	const [isReferralOpen, setIsReferralOpen] = useState(false);

	const openLeaderboard = () => {
		setIsLeaderboardOpen(true);
	};

	const closeLeaderboard = () => {
		setIsLeaderboardOpen(false);
	};

	const openReferral = () => {
		setIsReferralOpen(true);
	};

	const closeReferral = () => {
		setIsReferralOpen(false);
	};

	useEffect(() => {
		const observer = new MutationObserver((mutationsList) => {
			mutationsList.forEach((mutation) => {
				if (mutation.type === 'childList' && mutation.addedNodes.length > 0) {
					const targetElement = document.getElementById('header__totalScore');
					if (targetElement) {
						setIsElementPresent(true);
					}
				} else if (mutation.type === 'childList' && mutation.removedNodes.length > 0) {
					const targetElement = document.getElementById('header__totalScore');
					if (!targetElement) {
						setIsElementPresent(false);
					}
				}
			});
		});

		observer.observe(document.body, { childList: true, subtree: true });

		return () => observer.disconnect();
	}, []);

	useEffect(() => {
		setTotalReferrals(8);
	}, []);

	useEffect(() => {
		const handleOutsideClick = (event) => {
			if (event.target.closest('.header__mobileBurger')) return;
			setIsShown(false);
			setIsToggled(false);
		};

		document.addEventListener('mousedown', handleOutsideClick);
		return () => document.removeEventListener('mousedown', handleOutsideClick);
	}, []);

	const buttonStyle = {
		display: 'flex',
		alignItems: 'center',
		border: '1px solid #ccc',
		padding: '8px 12px',
		borderRadius: '4px',
		textDecoration: 'none',
		cursor: 'pointer',
		color: '#fff',
		transition: 'background-color 0.3s ease',
		background: 'linear-gradient(to right, #667db6, #0082c8, #0082c8, #667db6)',
		boxShadow: '0 4px 6px rgba(50, 50, 93, 0.11), 0 1px 3px rgba(0, 0, 0, 0.08)',
    };

	const titleStyle = {
		color: '#fff',
		fontSize: '32px',
		fontWeight: 700,
		lineHeight: '100%',
		marginTop: '27px',
		textAlign: 'center',
	};

	return (
		<>
			<header
				style={{
					padding: '0 20px',
					display: 'flex',
					justifyContent: 'space-between',
					height: '56px',
					alignItems: 'center',
				}}
			>
				<div>
					<a style={buttonStyle} onClick={openLeaderboard}>
						Leadboard   <EmojiEventsIcon style={{ marginLeft: '8px' }} /> 
					</a>
				</div>
				<div>
					<a
						style={buttonStyle}
						onClick={openReferral}
					>
						Referral  <PeopleOutlineIcon style={{ marginLeft: '8px' }}/> 
					</a>
				</div>
			</header>

			<Dialog
				open={isLeaderboardOpen}
				onClose={closeLeaderboard}
				fullWidth
				maxWidth='xl' // Установка maxWidth="xl" для растяжения на всю ширину экрана
				PaperProps={{
					style: {
						height: '100%',
						maxHeight: '100%',
						width: '100%',
						maxWidth: '100%',
						margin: 0,
						backgroundColor: 'rgba(11, 31, 70, 0.4)', // полупрозрачный фон
						backgroundImage: 'linear-gradient(180deg, #0b1f4666, #0006)', // градиентный фон
					},
				}}
				BackdropComponent={Backdrop}
				BackdropProps={{
                    sx: {
                        backgroundColor: 'rgba(0, 0, 0, 0.5)', // прозрачный черный цвет для заднего фона
                        backdropFilter: 'blur(5px)', // размытие заднего фона
                    },
                }}
			>
				<IconButton
					aria-label='close'
					onClick={closeLeaderboard}
					sx={{
						position: 'absolute',
						top: 10,
						right: 10,
						color: 'inherit',
						color: '#fff',
					}}
				>
					<CloseIcon />
				</IconButton>
				<DialogContent sx={{ color: '#fff' }}>
					<Typography variant='h6' style={titleStyle}>Leaderboard</Typography>
					<Leaderboard />
				</DialogContent>
			</Dialog>

			<Dialog
				open={isReferralOpen}
				onClose={closeReferral}
				fullWidth
				maxWidth='xl' // Установка maxWidth="xl" для растяжения на всю ширину экрана
				PaperProps={{
					style: {
						height: '100%',
						maxHeight: '100%',
						width: '100%',
						maxWidth: '100%',
						margin: 0,
						backgroundColor: 'rgba(11, 31, 70, 0.4)', // полупрозрачный фон
						backgroundImage: 'linear-gradient(180deg, #0b1f4666, #0006)', // градиентный фон
					},
				}}
				BackdropComponent={Backdrop}
				BackdropProps={{
                    sx: {
                        backgroundColor: 'rgba(0, 0, 0, 0.5)', // прозрачный черный цвет для заднего фона
                        backdropFilter: 'blur(5px)', // размытие заднего фона
                    },
                }}
			>
				<IconButton
					aria-label='close'
					onClick={closeReferral}
					sx={{
						position: 'absolute',
						top: 10,
						right: 10,
						color: 'inherit',
						color: '#fff',
					}}
				>
					<CloseIcon />
				</IconButton>
				<DialogContent sx={{ color: '#fff' }}>
					<Referral />
				</DialogContent>
			</Dialog>
		</>
	);
};

export default Header;
