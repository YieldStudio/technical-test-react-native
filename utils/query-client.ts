import { QueryClient } from '@tanstack/react-query';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { createAsyncStoragePersister } from '@tanstack/query-async-storage-persister';
import { HTTP_STATUS, isServerError } from '../constants/http-status';
import { AxiosError } from 'axios';

export const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      staleTime: 60 * 1000,
      retry: (failureCount, error) => {
        if (error instanceof AxiosError && error.response?.status) {
          return (
            failureCount < 3 &&
            !(
              [
                HTTP_STATUS.unauthorized,
                HTTP_STATUS.forbidden,
                HTTP_STATUS.notFound,
                HTTP_STATUS.tooManyRequests,
              ] as number[]
            ).includes(error.response?.status)
          );
        }

        // Don't retry if there isn't HTTP status
        return false;
      },
      throwOnError: (error) => {
        if (error instanceof AxiosError && error.response?.status) {
          return isServerError(error.response.status);
        }

        if (error instanceof AxiosError && error.code === AxiosError.ERR_NETWORK) {
          return false;
        }

        // When isn't an api error, throw error to boundary
        return true;
      },
    },
  },
});

export const queryClientPersister = createAsyncStoragePersister({
  storage: AsyncStorage,
  throttleTime: 3000,
});
