import * as React from 'react';
import LoginAntD from './AntD_Login';
import TableDemoAntD from './AntD_TableDemo';
import { Tabs } from 'antd';

export default function App_antd() {
  return (
    <div style={{ maxWidth: 960, margin: '0 auto', padding: 16 }}>
      <Tabs
        defaultActiveKey="login"
        items={[
          { key: 'login', label: 'Login (AntD)', children: <LoginAntD /> },
          { key: 'table', label: 'Table (AntD)', children: <TableDemoAntD /> },
        ]}
      />
    </div>
  );
}
