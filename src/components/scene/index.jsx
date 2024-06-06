import { OrbitControls } from '@react-three/drei';
import { Canvas } from '@react-three/fiber';
import React, { Suspense } from 'react';
import Model from '../model';

const Scene = () => {
	return (
		<Canvas
			camera={{ position: [2.5, 5, 5], fov: 75 }}
			style={{
				position: 'relative',
				width: '100%',
				overflow: 'hidden',
				pointerEvents: 'auto',
				touchAction: 'none',
			}}
		>
			<ambientLight intensity={0.5} />
			<directionalLight position={[1, 5, 5]} intensity={2} />
			<Suspense fallback={null}>
				<Model />
			</Suspense>
			<OrbitControls />
		</Canvas>
	);
};

export default Scene;
