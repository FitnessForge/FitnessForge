import { Stack, Typography } from '@mui/material';
import { Counter } from './components/Counter/Counter';

export default async function Index() {
  return (
    <Stack sx={{ minHeight: '100vh' }} justifyContent={'center'} alignItems={'center'}>
      <Typography variant="h1" align="center">
        Welcome Fitness Forge
      </Typography>
      <Counter />
    </Stack>
  );
}
