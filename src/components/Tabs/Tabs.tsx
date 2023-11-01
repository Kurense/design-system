import { Tabs as MuiTabs, TabsProps as MuiTabsProps, Tab, Box, Typography} from '@mui/material'
import React from 'react';
/**
 * Tabs organize and allow navigation between groups of content that are related and at the same level of hierarchy.
 */

type TabsProps = {

} & MuiTabsProps

interface TabPanelProps {
  children?: React.ReactNode;
  index: number;
  value: number;
}

function CustomTabPanel(props: TabPanelProps) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      {...other}
    >
      {value === index && (
        <Box sx={{ p: 3 }}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

function a11yProps(index: number) {
  return {
    id: `simple-tab-${index}`,
  };
}

export const Tabs = ({
  
}: TabsProps) => {
  const [value, setValue] = React.useState(0);

  const handleChange = (event: React.SyntheticEvent, newValue: number) => {
    setValue(newValue);
  };

  return (
    <Box sx={{ width: '100%' }}>
      <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
        <MuiTabs value={value} onChange={handleChange} aria-label="basic tabs example">
          <Tab label="All User" {...a11yProps(0)}
          sx={{ textTransform: 'capitalize' }}/>
          <Tab label="Permission Group" {...a11yProps(1)}
          sx={{ textTransform: 'capitalize' }}/>
          <Tab label="User Activity" {...a11yProps(2)}
          sx={{ textTransform: 'capitalize' }}/>
        </MuiTabs>
      </Box>
    </Box>
  );
}

