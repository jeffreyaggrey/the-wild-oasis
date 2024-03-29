import { useMutation, useQueryClient } from '@tanstack/react-query';
import { toast } from 'react-hot-toast';

import { updateCurrentUser } from '../../services/apiAuth';

export function useUpdateUser() {
  const queryClient = useQueryClient();

  const { mutate: updateUser, isLoading: isUpdating } = useMutation({
    mutationFn: ({ fullName, password, avatar }) =>
      updateCurrentUser({ fullName, password, avatar }),
    onSuccess: user => {
      toast.success('User account successfully updated');
      // Update cache with updated User or
      queryClient.setQueryData(['user'], user);

      // Invalidate the cache - which fetches latest changes
      // queryClient.invalidateQueries({ queryKey: ['user'] });
    },
    onError: error => {
      toast.error(error.message);
    },
  });

  return { updateUser, isUpdating };
}
