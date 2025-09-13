import { Slot } from 'expo-router';
import { useDeviceContext } from 'twrnc';
import tw from '../components/tailwind';
import { queryClient } from '../utils/query-client';
import { QueryClientProvider } from '@tanstack/react-query';

export default function RootLayout() {
  useDeviceContext(tw);

  return (
    <QueryClientProvider client={queryClient}>
      <Slot />
    </QueryClientProvider>
  );
}
