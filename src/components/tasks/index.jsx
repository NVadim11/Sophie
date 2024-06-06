import React, { useState } from 'react';

function Tasks() {
	const [isVisible, setIsVisible] = useState(false);
	const [tasksOpen, setTasksOpen] = useState(false);
	const [walletVaL, setWalletVal] = useState('');
	const [walletInputDisabled, setWalletInputDisabled] = useState(false);
	const [resetBtnDisabled, setResetBtnDisabled] = useState(false); // false?
	const [activeTab, setActiveTab] = useState(0);
	const [errMsgVisible, setErrMsgVisible] = useState(false);
	const [errorText, setErrorText] = useState(
		'An error occurred. Please try again later.'
	);
	const [inputFirst, setInputFirst] = useState(true);
	const [inputSecond, setInputSecond] = useState(false);
	const popupTasksTgl = tasksOpen ? 'popupTasks_show' : null;
	const popupTasks = `popupTasks ${popupTasksTgl}`;

	const handleTabClick = (index) => {
		setActiveTab(index);
	};

	return (
		<div
			style={{ padding: '10px 20px', background: 'transparent', height: 'calc(100vh - 132px)', display:'flex', flexDirection: 'column', justifyContent: 'center', }}
		>
			<div style={{ alignItems: 'center', textAlign: 'center', width: '100%' }}>
				<h4>Complete tasks and get rewarded!</h4>
			</div>
			<div
				style={{
					display: 'flex',
					marginTop: '15px',
					justifyContent: 'space-between',
					flexDirection: 'row',
					alignItems: 'center',
					textAlign: 'center',
					width: '100%',
				}}
			>
				<div
					style={{
						position: 'relative',
						overflow: 'hidden',
					}}
					className={`popupTasks__tabs-btn ${activeTab === 0 ? 'active' : ''}`}
					onClick={() => handleTabClick(0)}
				>
					<button
						style={{
							border: '2px solid hsl(0, 0%, 29%)',
							borderRadius: '5px',
							padding: '5px 15px',
						}}
					>
						Social
					</button>
				</div>
				<div
					style={{
						position: 'relative',
						overflow: 'hidden',
					}}
					className={`popupTasks__tabs-btn ${activeTab === 1 ? 'active' : ''}`}
					onClick={() => handleTabClick(1)}
				>
					<button
						style={{
							border: '2px solid hsl(0, 0%, 29%)',
							borderRadius: '5px',
							padding: '5px 15px',
						}}
					>
						Daily
					</button>
				</div>
				<div
					style={{
						position: 'relative',
						overflow: 'hidden',
					}}
					className={`popupTasks__tabs-btn ${activeTab === 2 ? 'active' : ''}`}
					onClick={() => handleTabClick(2)}
				>
					<button
						style={{
							border: '2px solid hsl(0, 0%, 29%)',
							borderRadius: '5px',
							padding: '5px 15px',
						}}
					>
						Partnership
					</button>
				</div>
			</div>
			<div className={`popupTasks__tasks ${activeTab === 0 ? 'active' : ''}`}>
				<div
					style={{
						display: 'flex',
						marginTop: '15px',
						justifyContent: 'space-between',
						flexDirection: 'column',
						alignItems: 'center',
						textAlign: 'center',
						width: '100%',
					}}
				>
					<div
						style={{
							display: 'flex',
							justifyContent: 'center',
							alignItems: 'center',
							textAlign: 'center',
							width: '100%',
						}}
					>
						<span>Enter your wallet</span>
					</div>
					<div
						style={{
							marginTop: '5px',
							display: 'flex',
							justifyContent: 'center',
							alignItems: 'center',
							textAlign: 'center',
							width: '100%',
							position: 'relative',
							borderRadius: '10px',
							overflow: 'hidden',
						}}
					>
						<input
							style={{
								border: '2px solid hsl(0, 0%, 29%)',
								padding: '10px 0 10px 10px',
								height: '100%',
								width: '100%',
								background: 'transparent',
								color: '#fff',
								fontSize: '0.75rem!important',
								borderRadius: '10px',
							}}
							type='text'
							placeholder='Enter Solana Wallet Address'
							value={walletVaL}
							onChange={(e) => setWalletVal(e.target.value)}
						/>
						<button
							style={{
								display: 'flex',
								alignItems: 'center',
								justifyContent: 'center',
								borderRadius: '10px',
								border: '2px solid hsl(0, 0%, 29%)',
								position: 'absolute',
								right: '0',
								top: '0',
								width: '44px',
								height: '100%',
								backdropFilter: 'blur(4px)',
								background: 'rgba(255, 255, 255, 0.12)',
							}}
						>
							<svg
								width='24'
								height='24'
								viewBox='0 0 24 24'
								fill='none'
								xmlns='http://www.w3.org/2000/svg'
							>
								<path
									d='M10.7071 6.29289C10.3166 5.90237 9.6834 5.90237 9.29289 6.29289C8.90237 6.6834 8.90237 7.31659 9.29289 7.70711L13.5858 12L9.29289 16.2929C8.90237 16.6834 8.90237 17.3166 9.29289 17.7071C9.6834 18.0977 10.3166 18.0977 10.7071 17.7071L15.7071 12.7071C16.0976 12.3166 16.0976 11.6834 15.7071 11.2929L10.7071 6.29289Z'
									fill='white'
								/>
							</svg>
						</button>
					</div>
				</div>
				<div
					style={{
						display: 'flex',
						marginTop: '30px',
						flexDirection: 'column',
						gap: '15px',
					}}
				>
					<div
						style={{
							justifyContent: 'space-between',
							display: 'flex',
							flexDirection: 'row',
							alignItems: 'center',
							padding: '5px 10px',
							border: '2px solid hsl(0, 0%, 29%)',
						}}
					>
						<div>
							<h4>Follow Twitter</h4>
						</div>
						<div>
							<p>+10000 </p>
						</div>
					</div>
					<div
						style={{
							justifyContent: 'space-between',
							display: 'flex',
							flexDirection: 'row',
							alignItems: 'center',
							padding: '5px 10px',
							border: '2px solid hsl(0, 0%, 29%)',
						}}
					>
						<div>
							<h4>Join TG Channel</h4>
						</div>
						<div>
							<p>+10000 </p>
						</div>
					</div>
					<div
						style={{
							justifyContent: 'space-between',
							display: 'flex',
							flexDirection: 'row',
							alignItems: 'center',
							padding: '5px 10px',
							border: '2px solid hsl(0, 0%, 29%)',
						}}
					>
						<div>
							<h4>Join TG Chat</h4>
						</div>
						<div>
							<p>+10000 </p>
						</div>
					</div>
					<div
						style={{
							justifyContent: 'space-between',
							display: 'flex',
							flexDirection: 'row',
							alignItems: 'center',
							padding: '5px 10px',
							border: '2px solid hsl(0, 0%, 29%)',
						}}
					>
						<div>
							<h4>Visit Website</h4>
						</div>
						<div>
							<p>+10000 </p>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
}

export default Tasks;
