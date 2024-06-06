import { useFBX } from '@react-three/drei';
import React from 'react';

const Model = () => {
	const fbx = useFBX('/models/CRIXI.fbx');
	return (
		<primitive
			object={fbx}
			scale={[0.2, 0.2, 0.2]}
			style={{
				position: 'relative',
				width: '100%',
				height: '100%',
				overflow: 'hidden',
				pointerEvents: 'auto',
				touchAction: 'none',
			}}
		/>
	);
};

export default Model;
