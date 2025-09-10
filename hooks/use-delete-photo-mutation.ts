import { useMutation } from '@tanstack/react-query';
import { createMutationFn } from '@yieldstudio/react-query-factory';
import { PHOTOS_QUERY_KEY } from './use-photos-query';
import { queryClient } from '../utils/query-client';

export type DeletePhotoInput = {
  params: {
    id: string;
  }
};

export function useDeletePhotoMutation() {
  const mutationFn = createMutationFn<DeletePhotoInput>('DELETE', (params) => `/photos/${params.id}`);

  return useMutation({
    mutationFn,
    onSuccess: () => queryClient.invalidateQueries({ queryKey: PHOTOS_QUERY_KEY }),
  });
}
