import { Stack, Typography } from "@mui/material";

export default async function Index() {
  return (
    <Stack sx={{ minHeight: '100vh' }} justifyContent={'center'} alignItems={'center'}>
      <Typography variant="h1" align="center">
        Fitness Fusion
      </Typography>
    </Stack>
  );
}
