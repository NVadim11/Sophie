import React from 'react';
import Paper from '@mui/material/Paper';
import List from '@mui/material/List';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemText from '@mui/material/ListItemText';
import { styled } from '@mui/system';

const StyledListItem = styled(ListItemButton)(({ theme }) => ({
  display: 'flex',
  justifyContent: 'space-between', // Align text and coins to opposite ends
  alignItems: 'center',
  borderRadius: 10, // Border radius for all items
  border: '1px solid #3f3773', // Default border style for regular items
  boxShadow: '0px 4px 8px rgba(0, 0, 0, 0.1)',
  transition: 'border-color 0.3s ease',
  color: 'white', // Set text color to white
  margin: '4px 0', // Margin top and bottom 4px (equivalent to 8px between items)

  '&:hover, &:focus': {
    borderColor: 'transparent', // Remove border color on hover and focus
  },
}));

const GoldListItem = styled(StyledListItem)(({ theme }) => ({
  borderColor: '#FFD700',
  color: '#FFD700', // Set text color to gold
  '&:hover, &:focus': {
    borderColor: '#FFD700', // Keep border color on hover and focus
  },
}));

const SilverListItem = styled(StyledListItem)(({ theme }) => ({
  borderColor: '#C0C0C0',
  color: '#C0C0C0', // Set text color to silver
  '&:hover, &:focus': {
    borderColor: '#C0C0C0', // Keep border color on hover and focus
  },
}));

const BronzeListItem = styled(StyledListItem)(({ theme }) => ({
  borderColor: '#CD7F32',
  color: '#CD7F32', // Set text color to bronze
  '&:hover, &:focus': {
    borderColor: '#CD7F32', // Keep border color on hover and focus
  },
}));

const PurpleListItem = styled(StyledListItem)({
  borderColor: '#800080',
  color: '#800080', // Set text color to purple
});

// Ваш код Leaderboard
const Leaderboard = () => {
	// Example player data (replace with real data)
	const playerList = [
	  { id: 1, name: 'player1', coins: 343422 },
	  { id: 2, name: 'player2', coins: 250000 },
	  { id: 3, name: 'player3', coins: 180000 },
	  { id: 4, name: 'player4', coins: 150000 },
	  { id: 5, name: 'player5', coins: 120000 },
	  { id: 6, name: 'player6', coins: 100000 },
	  { id: 7, name: 'player7', coins: 80000 },
	  { id: 8, name: 'player8', coins: 60000 },
	  { id: 9, name: 'player9', coins: 40000 },
	  { id: 10, name: 'Your Position', coins: 20000 },
	];
  
	return (
	  <Paper sx={{ padding: 2, backgroundColor: 'transparent', boxShadow: 'none' }}>
		<List sx={{ backgroundColor: 'transparent' }}>
		  {playerList.map((player, index) => {
			let ListItemComponent;
			let coinsColor;
  
			if (index === 0) {
			  ListItemComponent = GoldListItem;
			  coinsColor = '#FFD700'; // Gold
			} else if (index === 1) {
			  ListItemComponent = SilverListItem;
			  coinsColor = '#C0C0C0'; // Silver
			} else if (index === 2) {
			  ListItemComponent = BronzeListItem;
			  coinsColor = '#CD7F32'; // Bronze
			} else if (index === playerList.length - 1) {
			  ListItemComponent = PurpleListItem;
			  coinsColor = '#800080'; // Purple
			} else {
			  ListItemComponent = StyledListItem;
			  coinsColor = 'white'; // Default white
			}
  
			return (
			  <ListItemComponent key={player.id} disableRipple>
				<ListItemText
				  primary={`${index + 1}. ${player.name}`}
				  primaryTypographyProps={{
					style: {
					  color:
						index === 0
						  ? '#FFD700' // Gold
						  : index === 1
						  ? '#C0C0C0' // Silver
						  : index === 2
						  ? '#CD7F32' // Bronze
						  : index === playerList.length - 1
						  ? '#800080' // Purple
						  : 'white', // Default white
					},
				  }}
				/>
				<ListItemText
				  secondary={`Coins: ${player.coins}`}
				  secondaryTypographyProps={{
					style: { color: coinsColor, textAlign: 'right' } // Выравнивание текста монет вправо
				  }}
				/>
			  </ListItemComponent>
			);
		  })}
		</List>
	  </Paper>
	);
  };
  
  export default Leaderboard;
  
