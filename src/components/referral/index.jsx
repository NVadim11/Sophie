import React from 'react';
import { Typography, Grid, Button, Paper } from '@mui/material';
import PeopleIcon from '@mui/icons-material/People';
import PersonAddIcon from '@mui/icons-material/PersonAdd';
import LocalOfferIcon from '@mui/icons-material/LocalOffer'; // Import the icon for prize box

const Referral = () => {
    const containerStyle = {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        height: '100vh', // Full height of the viewport
    };

    const paperStyle = {
        backgroundColor: 'transparent',
        padding: '20px',
        color: '#fff',
    };

    const headerItem = {
        background: '#2b2f524d',
        border: '1px solid #3f3773',
        borderRadius: '10px',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        padding: '16px 5px',
        width: '100%',
        marginTop: '16px',
    };

    const iconStyle = {
        height: '22px',
        width: '22px',
        marginLeft: '8px',
    };

    const titleStyle = {
        color: '#fff',
        display: 'flex',
        fontSize: '32px',
        fontWeight: 700,
        lineHeight: '100%',
        marginTop: '32px',
		textAlign: 'center',
		justifyContent: 'center',
    };

    const listItem = {
        display: 'flex',
        alignItems: 'center',
    };

	const firstTitle = {
		color: '#fff',
		fontSize: '32px',
		fontWeight: 700,
		lineHeight: '100%',
		marginTop: '27px',
		textAlign: 'center',
	};

    return (
        <div style={containerStyle}>
            <Paper className='root' style={paperStyle}>
				<Typography variant='h6' style={firstTitle}> Invite Your Friends</Typography>
                <Grid container spacing={2}>
                    <Grid item xs={12} md={6}>
                        <div
                            style={{
                                alignItems: 'center',
                                display: 'flex',
                                flexDirection: 'row',
                                gap: '10px',
                                justifyContent: 'center',
                                width: '100%',
                            }}
                        >
                            <div style={headerItem}>
                                <Typography variant='body1'>Bonus:</Typography>
                                <div className='headerItemInner'>
                                    <Typography variant='body1'>% 10</Typography>
                                </div>
                            </div>
                            <div style={headerItem}>
                                <Typography variant='body1'>Referrals:</Typography>
                                <div
                                    className='headerItemInner'
                                    style={{ display: 'flex', alignItems: 'center', gap: '5px' }}
                                >
                                    <PeopleIcon style={iconStyle} />
                                    <Typography variant='body1'>10</Typography>{' '}
                                    {/* Replace with your referral count */}
                                </div>
                            </div>
                        </div>
                    </Grid>
                    <Grid item xs={12} md={6}>
                        <Typography variant='h6' style={titleStyle}>
                            How it Works
                        </Typography>
                        <Grid container spacing={2}>
                            <Grid item xs={12}>
                                <div
                                    className='listItem'
                                    style={{
                                        alignItems: 'center',
                                        background: '#2b2f524d',
                                        border: '1px solid #3f3773',
                                        borderRadius: '10px',
                                        display: 'flex',
                                        marginTop: '10px',
                                        padding: '10px',
                                        position: 'relative',
                                        width: '100%',
                                    }}
                                >
                                    <div>
                                        <Typography style={listItem} variant='h5'>
                                            Invite <PersonAddIcon className='icon' style={iconStyle} />{' '}
                                        </Typography>
                                        <Typography variant='body1'>
                                            Friends via the referral link
                                        </Typography>
                                    </div>
                                </div>
                            </Grid>

                            <Grid item xs={12}>
                                <div
                                    className='listItem'
                                    style={{
                                        alignItems: 'center',
                                        background: '#2b2f524d',
                                        border: '1px solid #3f3773',
                                        borderRadius: '10px',
                                        display: 'flex',
                                        marginTop: '10px',
                                        padding: '10px', // Adjust padding as needed
                                        position: 'relative',
                                        width: '100%',
                                    }}
                                >
                                    <div>
                                        <Typography style={listItem} variant='h5'>
                                            Get rewards <LocalOfferIcon className='icon' style={iconStyle} />{' '}
                                        </Typography>
                                        <Typography variant='body1'>
                                            Receive 10% of your friends’ staking
                                        </Typography>
                                    </div>
                                </div>
                            </Grid>
                        </Grid>
                    </Grid>
                </Grid>
                <div style={{ display: 'flex', justifyContent: 'end', marginTop: '32px' }}>
                    <Button
                        variant='contained'
                        className='inviteButton'
                        style={{
                            display: 'flex',
                            width: '100%',
                            alignItems: 'center',
                            border: '1px solid #ccc',
                            padding: '12px 24px', // Adjust padding as needed
                            borderRadius: '4px',
                            textDecoration: 'none',
                            cursor: 'pointer',
                            transition: 'background-color 0.3s ease',
                            background: 'linear-gradient(to right, #667db6, #0082c8, #0082c8, #667db6)',
                            color: '#fff',
                            boxShadow: '0 4px 6px rgba(50, 50, 93, 0.11), 0 1px 3px rgba(0, 0, 0, 0.08)',
                        }}
                    >
                        Invite
                    </Button>
                </div>
            </Paper>
        </div>
    );
};

export default Referral;
