import * as React from 'react';
import LoginMUI from './MUI_Login';
import TableDemoMUI from './MUI_TableDemo';
import { CssBaseline, Container, Tabs, Tab, Box } from '@mui/material';

export default function App_mui() {
  const [tab, setTab] = React.useState(0);
  return (
    <>
      <CssBaseline />
      <Container maxWidth="md">
        <Box sx={{ borderBottom: 1, borderColor: 'divider', mt: 2 }}>
          <Tabs value={tab} onChange={(_, v) => setTab(v)}>
            <Tab label="Login (MUI)" />
            <Tab label="Table (MUI)" />
          </Tabs>
        </Box>
      </Container>
      {tab === 0 ? <LoginMUI /> : <TableDemoMUI />}
    </>
  );
}
