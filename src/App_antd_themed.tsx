import * as React from 'react';
import { ConfigProvider, theme as antdTheme, Alert } from 'antd';
import LoginAntD from './AntD_Login';
import TableDemoAntD from './AntD_TableDemo';

export default function App_antd_themed() {
  const myTheme = {
    token: {
      colorPrimary: '#0958d9',
      colorText: '#141414',
      colorBgBase: '#ffffff',
      fontSize: 14,
    },
    algorithm: antdTheme.defaultAlgorithm,
  };

  return (
    <ConfigProvider theme={myTheme}>
      <div style={{ maxWidth: 960, margin: '0 auto', padding: 16 }}>
        <Alert
          message="AntD Theme Tokens Applied"
          description="colorPrimary, colorText, and base background set to improve contrast for Lighthouse."
          type="info"
          showIcon
          style={{ marginBottom: 16 }}
        />
        <LoginAntD />
        <div style={{ height: 16 }} />
        <TableDemoAntD />
      </div>
    </ConfigProvider>
  );
}
