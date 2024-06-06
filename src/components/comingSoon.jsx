import React from 'react';

const ComingSoon = () => {
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
					position: 'absolute',
					width: 'fit-content',
					marginTop: '0',
					fontWeight: '900',
					fontSize: '64px',
					lineHeight: '100%',
					textAlign: 'center',
					zIndex: '1000',
				}}
			>
				Coming Soon
			</h1>
		</div>
	);
};

export default ComingSoon;
