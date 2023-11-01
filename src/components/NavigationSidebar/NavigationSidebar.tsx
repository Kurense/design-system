import React, { useState } from 'react';
import { Drawer, List, ListItemButton, ListItemIcon, ListItemText, Typography, styled } from '@mui/material';
import DashboardIcon from '@mui/icons-material/Dashboard';
import PeopleIcon from '@mui/icons-material/People';
import PaymentIcon from '@mui/icons-material/Payment';
import SyncIcon from '@mui/icons-material/Sync';
import InventoryIcon from '@mui/icons-material/Inventory';

const CustomListItemButton = styled(ListItemButton)(({ theme, selected }) => ({
  '&:hover': {
    backgroundColor: selected ? theme.palette.background.paper : '#EBF2F9',
    '& .MuiListItemIcon-root, & .MuiListItemText-root': {
      color: '#3E8CED',
    },
  },
  '&.Mui-selected': {
    backgroundColor: '#F5F5F5',
    '& .MuiListItemIcon-root, & .MuiListItemText-root': {
      color: '#3E8CED',
    },
  },
}));

const NavigationSidebar: React.FC = () => {
  const [selectedItem, setSelectedItem] = useState<number | null>(null);

  const handleListItemClick = (index: number) => {
    setSelectedItem(index);
  };

  return (
    <Drawer variant="permanent" open={true}>
      <Typography variant="h6" style={{ padding: '16px' }}>
        iPay™
      </Typography>
      <List>
        {[['Dashboard', DashboardIcon], ['User Management', PeopleIcon], ['Cardholder Management', PaymentIcon], ['Data Synchronization', SyncIcon], ['Card Inventory', InventoryIcon]].map((text, index) => (
          <CustomListItemButton
            key={text[0]}
            selected={selectedItem === index}
            onClick={() => handleListItemClick(index)}
          >
            <ListItemIcon>
              {React.createElement(text[1] as any)}
            </ListItemIcon>
            <ListItemText primary={text[0]} />
          </CustomListItemButton>
        ))}
      </List>
    </Drawer>
  );
}

export default NavigationSidebar;
