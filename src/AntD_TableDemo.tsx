import * as React from 'react';
import { Table, Typography } from 'antd';

type Row = { key: string; name: string; role: string; score: number };

const data: Row[] = [
  { key: '1', name: 'Alice', role: 'Engineer', score: 92 },
  { key: '2', name: 'Bob', role: 'PM', score: 81 },
  { key: '3', name: 'Carlos', role: 'Designer', score: 88 },
];

const columns = [
  { title: 'Name', dataIndex: 'name', key: 'name', sorter: (a: Row, b: Row) => a.name.localeCompare(b.name) },
  { title: 'Role', dataIndex: 'role', key: 'role', filters: [{ text: 'Engineer', value: 'Engineer' }, { text: 'PM', value: 'PM' }, { text: 'Designer', value: 'Designer' }], onFilter: (value: any, record: Row) => record.role === value },
  { title: 'Score', dataIndex: 'score', key: 'score', sorter: (a: Row, b: Row) => a.score - b.score, align: 'right' as const },
];

export default function TableDemoAntD() {
  return (
    <div style={{ maxWidth: 800, margin: '24px auto' }}>
      <Typography.Title level={4} style={{ margin: '16px 0' }}>
        Team Scores (AntD)
      </Typography.Title>
      <Table<Row> columns={columns} dataSource={data} pagination={{ pageSize: 5 }} />
    </div>
  );
}
