import { useQuery } from '@tanstack/react-query';
import { createQueryFn } from '@yieldstudio/react-query-factory';
import z from 'zod';

export const PhotosResultItemSchema = z.object({
  id: z.string(),
  title: z.string(),
  url: z.url(),
});
export const PhotosResultSchema = z.array(PhotosResultItemSchema);

export type PhotosResultItemModel = z.infer<typeof PhotosResultItemSchema>;
export type PhotosResultModel = z.infer<typeof PhotosResultSchema>;

export const PHOTOS_QUERY_KEY = ['photos'];
export const PHOTOS_QUERY_FN = createQueryFn(PhotosResultSchema);

export function usePhotosQuery() {
  return useQuery({
    queryKey: PHOTOS_QUERY_KEY,
    queryFn: PHOTOS_QUERY_FN,
  });
}
