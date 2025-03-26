import { Alert } from '@mui/material';

export default function ErrorMessage({ msg }) {
  return <Alert severity="error" sx={{ mt: 4 }}>{msg}</Alert>;
}
