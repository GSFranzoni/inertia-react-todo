import { useForm } from '@inertiajs/inertia-react';

const useLogout = () => {
  const { post, processing } = useForm();

  const logout = () => {
    post('/auth/logout');
  };

  return {
    logout,
    processing,
  };
};

export default useLogout;
