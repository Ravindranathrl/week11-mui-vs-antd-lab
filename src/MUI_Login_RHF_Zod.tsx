import * as React from 'react';
import { Box, Button, TextField, Typography, Paper } from '@mui/material';
import { useForm } from 'react-hook-form';
import { z } from 'zod';
import { zodResolver } from '@hookform/resolvers/zod';

const schema = z.object({
  email: z.string().email('Enter a valid email'),
  password: z.string().min(8, 'At least 8 characters'),
});

type FormData = z.infer<typeof schema>;

export default function LoginMUI_RHF_Zod() {
  const { register, handleSubmit, formState: { errors, isSubmitting } } = useForm<FormData>({
    resolver: zodResolver(schema),
    defaultValues: { email: '', password: '' },
  });

  const onSubmit = (data: FormData) => {
    alert(`MUI + RHF + Zod → email: ${data.email}`);
  };

  return (
    <Box sx={{ minHeight: '100vh', display: 'grid', placeItems: 'center', bgcolor: 'background.default', p: 2 }}>
      <Paper elevation={3} sx={{ p: 4, width: 380 }}>
        <Typography variant="h5" component="h1" gutterBottom>
          Sign in (MUI + RHF + Zod)
        </Typography>
        <Box component="form" noValidate onSubmit={handleSubmit(onSubmit)}>
          <TextField
            label="Email"
            type="email"
            fullWidth
            margin="normal"
            required
            autoComplete="email"
            error={!!errors.email}
            helperText={errors.email?.message}
            {...register('email')}
          />
          <TextField
            label="Password"
            type="password"
            fullWidth
            margin="normal"
            required
            autoComplete="current-password"
            error={!!errors.password}
            helperText={errors.password?.message}
            {...register('password')}
          />
          <Button type="submit" variant="contained" fullWidth sx={{ mt: 2 }} disabled={isSubmitting}>
            {isSubmitting ? 'Signing In…' : 'Sign In'}
          </Button>
        </Box>
      </Paper>
    </Box>
  );
}
