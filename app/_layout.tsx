import { Slot } from 'expo-router';
import { useDeviceContext } from 'twrnc';
import tw from '../components/tailwind';
import { setAxiosInstance } from '@yieldstudio/react-query-factory';
import axios from 'axios';
import { queryClient, queryClientPersister } from '../utils/query-client';
import { PersistQueryClientProvider } from '@tanstack/react-query-persist-client';
import '../server';

setAxiosInstance(axios);

export default function RootLayout() {
  useDeviceContext(tw);

  return (
    <PersistQueryClientProvider client={queryClient} persistOptions={{ persister: queryClientPersister }}>
      <Slot />
    </PersistQueryClientProvider>
  );
}
