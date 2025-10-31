import * as React from 'react';
import { Form, Input, Button, Typography, Card } from 'antd';

export default function LoginAntD() {
  const [form] = Form.useForm();

  const onFinish = (values: any) => {
    alert(`AntD Login → email: ${values.email}`);
  };

  return (
    <div style={{ minHeight: '100vh', display: 'grid', placeItems: 'center', background: 'var(--ant-bg-color, #f5f5f5)', padding: 16 }}>
      <Card style={{ width: 360 }}>
        <Typography.Title level={3} style={{ marginBottom: 16 }}>
          Sign in (AntD)
        </Typography.Title>
        <Form form={form} layout="vertical" onFinish={onFinish}>
          <Form.Item name="email" label="Email" rules={[{ required: true, message: 'Please enter your email' }, { type: 'email' }]}>
            <Input type="email" autoComplete="email" />
          </Form.Item>
          <Form.Item name="password" label="Password" rules={[{ required: true, message: 'Please enter your password' }]}>
            <Input.Password autoComplete="current-password" />
          </Form.Item>
          <Form.Item>
            <Button type="primary" htmlType="submit" block>
              Sign In
            </Button>
          </Form.Item>
        </Form>
      </Card>
    </div>
  );
}
