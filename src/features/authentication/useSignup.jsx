import { useMutation } from '@tanstack/react-query';
import { toast } from 'react-hot-toast';
import { signup as signupAPI } from '../../services/apiAuth';

export function useSignup() {
  const { mutate: signup, isLoading } = useMutation({
    mutationFn: ({ fullName, email, password }) =>
      signupAPI({ fullName, email, password }),
    onSuccess: () => {
      toast.success(
        'Account successfully created. Please check your email and verify email.',
      );
    },
    onError: () => {},
  });

  return { signup, isLoading };
}
