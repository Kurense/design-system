import React, { useState } from 'react';
import { Drawer, List, ListItemButton, ListItemIcon, ListItemText, Typography, styled } from '@mui/material';
import DashboardIcon from '@mui/icons-material/Dashboard';
import PersonOutlinedIcon from '@mui/icons-material/PersonOutlined';
import GroupOutlinedIcon from '@mui/icons-material/GroupOutlined';
import SyncIcon from '@mui/icons-material/Sync';
import CreditCardOutlinedIcon from '@mui/icons-material/CreditCardOutlined';

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
    borderLeft: `4px solid #3E8CED`, // Add a left border with the color #3E8CED
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
        {[['Dashboard', DashboardIcon], ['User Management', PersonOutlinedIcon], ['Cardholder Management', GroupOutlinedIcon], ['Data Synchronization', SyncIcon], ['Card Inventory', CreditCardOutlinedIcon]].map((text, index) => (
          <CustomListItemButton
            key={text[0]}
            selected={selectedItem === index}
            onClick={() => handleListItemClick(index)}
          >
            <ListItemIcon>
              {React.createElement(text[1] as any)}
            </ListItemIcon>
            <ListItemText
              primary={text[0]}
              primaryTypographyProps={{ style: { fontWeight: 'bold' } }}
            />
          </CustomListItemButton>
        ))}
      </List>
    </Drawer>
  );
}

export default NavigationSidebar;
