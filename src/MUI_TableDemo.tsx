import * as React from 'react';
import {
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
  Typography,
  TableSortLabel,
  Select,
  MenuItem,
  FormControl,
  InputLabel,
  Box,
} from '@mui/material';

type Row = { name: string; role: string; score: number };

const rows: Row[] = [
  { name: 'Alice', role: 'Engineer', score: 92 },
  { name: 'Bob', role: 'PM', score: 81 },
  { name: 'Carlos', role: 'Designer', score: 88 },
];

type Order = 'asc' | 'desc';
type OrderBy = keyof Row;

export default function TableDemoMUI() {
  const [order, setOrder] = React.useState<Order>('asc');
  const [orderBy, setOrderBy] = React.useState<OrderBy>('name');
  const [roleFilter, setRoleFilter] = React.useState<string>('all');

  const handleRequestSort = (property: OrderBy) => {
    const isAsc = orderBy === property && order === 'asc';
    setOrder(isAsc ? 'desc' : 'asc');
    setOrderBy(property);
  };

  const sortedRows = React.useMemo(() => {
    const filteredRows = roleFilter === 'all' 
      ? rows 
      : rows.filter((r) => r.role === roleFilter);

    return filteredRows.slice().sort((a, b) => {
      const aVal = a[orderBy];
      const bVal = b[orderBy];
      
      if (typeof aVal === 'string' && typeof bVal === 'string') {
        return order === 'asc' 
          ? aVal.localeCompare(bVal) 
          : bVal.localeCompare(aVal);
      }
      
      return order === 'asc' 
        ? (aVal as number) - (bVal as number) 
        : (bVal as number) - (aVal as number);
    });
  }, [order, orderBy, roleFilter]);

  return (
    <TableContainer component={Paper} sx={{ maxWidth: 720, m: '24px auto' }}>
      <Box sx={{ p: 2, display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
        <Typography variant="h6">
          Team Scores (MUI Enhanced)
        </Typography>
        <FormControl size="small" sx={{ minWidth: 150 }}>
          <InputLabel id="role-filter-label">Filter by Role</InputLabel>
          <Select
            labelId="role-filter-label"
            value={roleFilter}
            label="Filter by Role"
            onChange={(e) => setRoleFilter(e.target.value)}
          >
            <MenuItem value="all">All Roles</MenuItem>
            <MenuItem value="Engineer">Engineer</MenuItem>
            <MenuItem value="PM">PM</MenuItem>
            <MenuItem value="Designer">Designer</MenuItem>
          </Select>
        </FormControl>
      </Box>
      <Table aria-label="team scores with sorting and filtering">
        <TableHead>
          <TableRow>
            <TableCell>
              <TableSortLabel
                active={orderBy === 'name'}
                direction={orderBy === 'name' ? order : 'asc'}
                onClick={() => handleRequestSort('name')}
              >
                Name
              </TableSortLabel>
            </TableCell>
            <TableCell>
              <TableSortLabel
                active={orderBy === 'role'}
                direction={orderBy === 'role' ? order : 'asc'}
                onClick={() => handleRequestSort('role')}
              >
                Role
              </TableSortLabel>
            </TableCell>
            <TableCell align="right">
              <TableSortLabel
                active={orderBy === 'score'}
                direction={orderBy === 'score' ? order : 'asc'}
                onClick={() => handleRequestSort('score')}
              >
                Score
              </TableSortLabel>
            </TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {sortedRows.map((r) => (
            <TableRow key={r.name} hover>
              <TableCell>{r.name}</TableCell>
              <TableCell>{r.role}</TableCell>
              <TableCell align="right">{r.score}</TableCell>
            </TableRow>
          ))}
          {sortedRows.length === 0 && (
            <TableRow>
              <TableCell colSpan={3} align="center">
                No data available
              </TableCell>
            </TableRow>
          )}
        </TableBody>
      </Table>
    </TableContainer>
  );
}
