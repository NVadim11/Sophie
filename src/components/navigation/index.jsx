import AssignmentIcon from '@mui/icons-material/Assignment';
import BuildIcon from '@mui/icons-material/Build';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import SportsEsportsIcon from '@mui/icons-material/SportsEsports';
import { BottomNavigation, BottomNavigationAction } from '@mui/material';
import React, { Suspense, lazy, useState } from 'react';

const Customize = lazy(() => import('../customize'));
const Game = lazy(() => import('../game'));
const Shop = lazy(() => import('../shop'));
const Tasks = lazy(() => import('../tasks'));

const Navigation = () => {
	const [value, setValue] = useState(0);

	const handleNavigation = (event, newValue) => {
		setValue(newValue);
	};

	const renderComponent = () => {
		switch (value) {
			case 0:
				return <Game />;
			case 1:
				return <Tasks />;
			case 2:
				return <Shop />;
			case 3:
				return <Customize />;
			default:
				return null;
		}
	};

	return (
		<>
			<main
				style={{
					position: 'relative',
					flexGrow: '1',
					display: 'flex',
					alignItems: 'center',
					justifyContent: 'center',
					flexDirection: 'column',
					minHeight: '100%',
					width: '100%',
				}}
			>
				<Suspense fallback={<div>Loading...</div>}>{renderComponent()}</Suspense>
			</main>
			<footer style={{ background: 'transparent' }}>
				<div style={{ padding: '0 20px' }}>
					<BottomNavigation
						value={value}
						onChange={handleNavigation}
						showLabels
						sx={{
							height: '76px',
							padding: '10px',
							background: 'rgba(128, 128, 128, 0.5)',
							borderRadius: 2,
							backdropFilter: 'blur(10px)',
							'& .Mui-selected': {
								color: '#fff',
								backgroundColor: '#3f51b5',
								'&:first-child': {
									borderRadius: '8px 0 0 8px',
								},
								'&:last-child': {
									borderRadius: '0 8px 8px 0',
								},
							},
							'& .MuiBottomNavigationAction-root': {
								color: '#fff',
								minWidth: '70px',
								'&:hover': {
									color: '#fff',
								},
							},
						}}
					>
						<BottomNavigationAction label='Game' icon={<SportsEsportsIcon />} />
						<BottomNavigationAction label='Tasks' icon={<AssignmentIcon />} />
						<BottomNavigationAction label='Shop' icon={<ShoppingCartIcon />} />
						<BottomNavigationAction label='Customize' icon={<BuildIcon />} />
					</BottomNavigation>
				</div>
			</footer>
		</>
	);
};

export default Navigation;
