import { useMutation, useQueryClient } from '@tanstack/react-query';
import { toast } from 'react-hot-toast';

import { createUpdateCabin } from '../../services/apiCabins';

export function useCreateCabin() {
  const queryClient = useQueryClient();

  const { mutate: createCabin, isLoading: isCreating } = useMutation({
    mutationFn: createUpdateCabin,
    onSuccess: () => {
      toast.success('Cabin successfully added');
      queryClient.invalidateQueries(['cabins']);
    },
    onError: err => {
      toast.error(err.message);
    },
  });

  return { isCreating, createCabin };
}
