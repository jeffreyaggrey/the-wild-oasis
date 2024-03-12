import { useMutation, useQueryClient } from '@tanstack/react-query';
import { toast } from 'react-hot-toast';

import { createEditCabin } from '../../services/apiCabins';

export function useEditCabin() {
  const queryClient = useQueryClient();

  const { mutate: editCabin, isLoading: isEditting } = useMutation({
    mutationFn: ({ edittedCabinData, id }) =>
      createEditCabin(edittedCabinData, id),
    onSuccess: () => {
      toast.success('Cabin successfully updated');
      queryClient.invalidateQueries(['cabins']);
    },
    onError: err => {
      toast.error(err.message);
    },
  });

  return { isEditting, editCabin };
}
