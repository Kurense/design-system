import React, { useState } from 'react';
import { Drawer, List, ListItem, ListItemIcon, ListItemText, Typography } from '@mui/material';
import DashboardIcon from '@mui/icons-material/Dashboard';
import PeopleIcon from '@mui/icons-material/People';
import PaymentIcon from '@mui/icons-material/Payment';
import SyncIcon from '@mui/icons-material/Sync';
import InventoryIcon from '@mui/icons-material/Inventory';

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
          <ListItem
            button
            key={text[0]}
            selected={selectedItem === index}
            onClick={() => handleListItemClick(index)}
          >
            <ListItemIcon>
              {React.createElement(text[1] as any)}
            </ListItemIcon>
            <ListItemText primary={text[0]} />
          </ListItem>
        ))}
      </List>
    </Drawer>
  );
}

export default NavigationSidebar;
