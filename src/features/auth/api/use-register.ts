import { useMutation, useQueryClient } from '@tanstack/react-query';
import { InferRequestType, InferResponseType } from 'hono';
import { client } from '@/lib/rpc';
import { useRouter } from 'next/navigation';
import { toast } from 'sonner';

type ResponseType = InferResponseType<
  (typeof client.api.auth.register)['$post']
>;

type ResquestType = InferRequestType<
  (typeof client.api.auth.register)['$post']
>;

export const useRegister = () => {
  const queryClient = useQueryClient();
  const router = useRouter();
  const mutation = useMutation<ResponseType, Error, ResquestType>({
    mutationFn: async ({ json }) => {
      const response = await client.api.auth.register['$post']({ json });

      if (!response.ok) {
        throw new Error('Failed to register');
      }

      return await response.json();
    },
    onSuccess: () => {
      toast.success('Registration successful');
      router.refresh();
      queryClient.invalidateQueries({
        queryKey: ['current'],
      });
    },
    onError: () => {
      toast.error('Registration failed');
    },
  });
  return mutation;
};