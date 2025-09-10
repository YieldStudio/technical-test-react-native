import { useMutation } from '@tanstack/react-query';
import { createMutationFn } from '@yieldstudio/react-query-factory';
import { PHOTOS_QUERY_KEY } from './use-photos-query';
import { queryClient } from '../utils/query-client';

export type AddPhotoInput = {
  id: string;
  title: string;
  url: string;
};

export function useAddPhotoMutation() {
  const mutationFn = createMutationFn<AddPhotoInput>('POST', '/photos');

  return useMutation({
    mutationFn,
    onSuccess: () => queryClient.invalidateQueries({ queryKey: PHOTOS_QUERY_KEY }),
  });
}
