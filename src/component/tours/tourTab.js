import * as React from 'react';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import SafariBlue from './safari-blue.js'

interface TabPanelProps {
  children?: React.ReactNode;
  index: number;
  value: number;
}

function TabPanel(props: TabPanelProps) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`vertical-tabpanel-${index}`}
      aria-labelledby={`vertical-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box sx={{ p: 1 }}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

function a11yProps(index: number) {
  return {
    id: `vertical-tab-${index}`,
    'aria-controls': `vertical-tabpanel-${index}`,
  };
}

export default function VerticalTabs() {
  const [value, setValue] = React.useState(0);

  const handleChange = (event: React.SyntheticEvent, newValue: number) => {
    setValue(newValue);
  };

  return (
    <Box
      sx={{ flexGrow: 4, bgcolor: 'background.paper', display: 'flex', height: 520, width: 1800 }}
    >
      <Tabs
        orientation="vertical"
        variant="scrollable"
        value={value}
        onChange={handleChange}
        aria-label="Vertical tabs example"
        sx={{borderRight: 1, width:150, borderColor: 'divider' }}
      >
        <Tab label="Safari Blue" {...a11yProps(0)} />
        <Tab label="Stone Town" {...a11yProps(1)} />
        <Tab label="Jozani Forest" {...a11yProps(2)} />
        <Tab label="Spice Tour" {...a11yProps(3)} />
        <Tab label="Kizimkazi" {...a11yProps(4)} />
        <Tab label="Nakupenda sandbank" {...a11yProps(5)} />
        <Tab label="Prison Island" {...a11yProps(6)} />
      </Tabs>
      <TabPanel value={value} index={0}>
        <SafariBlue/>
      </TabPanel>
      <TabPanel value={value} index={1}>
        <SafariBlue/>
      </TabPanel>
      <TabPanel value={value} index={2}>
        <SafariBlue/>
      </TabPanel>
      <TabPanel value={value} index={3}>
        <SafariBlue/>
      </TabPanel>
      <TabPanel value={value} index={4}>
        <SafariBlue/>
      </TabPanel>
      <TabPanel value={value} index={5}>
        <SafariBlue/>
      </TabPanel>
      <TabPanel value={value} index={6}>
        <SafariBlue/>
      </TabPanel>
    </Box>
  );
}
