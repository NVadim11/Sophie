import React from 'react';

const NotFound = () => {
	return (
		<div
			style={{
				display: 'flex',
				flexDirection: 'column',
				alignItems: 'center',
				height: '100%',
				width: '100%',
				position: 'absolute',
				backgroundRepeat: 'no-repeat',
				backgroundPosition: 'center',
				backgroundSize: 'cover',
				flexDirection: 'column',
				justifyContent: 'center',
				background: 'linear-gradient(180deg, #0b1f46 0%, #000 100%)',
			}}
		>
			<h1
				style={{
					width: 'fit-content',
					marginTop: '-75px',
					fontWeight: '900',
					fontSize: '24px',
					lineHeight: '100%',
					textAlign: 'center',
					zIndex: '1000',
				}}
			>
				Something went wrong
			</h1>
		</div>
	);
};

export default NotFound;
