import { useMutation } from '@tanstack/react-query';
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-hot-toast';

import { login as loginAPI } from '../../services/apiAuth';

export function useLogin() {
  const navigate = useNavigate();

  const { mutate: login, isLoading } = useMutation({
    mutationFn: ({ email, password }) => loginAPI({ email, password }),
    onSuccess: () => {
      navigate('/dashboard');
    },
    onError: () => {
      err => console.log('ERROR', err);
      toast.error('Provided email or passsword is incorrect');
    },
  });

  return { login, isLoading };
}
