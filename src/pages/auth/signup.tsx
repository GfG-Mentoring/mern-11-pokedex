import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';
import { useDispatch, useSelector } from 'react-redux';
import { signup } from '../../store/slices/authSlice';
import { useNavigate } from 'react-router-dom';

const signupSchema = z.object({
  email: z
    .email({ message: 'Invalid email address' })
    .min(1, { message: 'Email is required' }),
  name: z.string().min(2, { message: 'Name is required' }),
  password: z
    .string()
    .min(8, { message: 'Password should be at least 8 characters long' }),
});

const Signup = () => {
  const navigate = useNavigate();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: zodResolver(signupSchema),
  });

  const dispatch = useDispatch();

  const { signupLoading, signupError } = useSelector(
    (state: any) => state.auth
  );

  const onFormSubmit = (data: z.infer<typeof signupSchema>) => {
    dispatch(
      signup({
        ...data,
        onSuccess: () => {
          navigate('/signin');
        },
      })
    );
  };

  return (
    <div className="flex justify-center items-center h-screen">
      <div className="w-md border border-gray-300 space-y-4 rounded-lg shadow-md p-4">
        <h2 className="text-2xl font-bold">Signup</h2>
        <form
          className="flex flex-col gap-2"
          onSubmit={handleSubmit(onFormSubmit)}
        >
          <label
            htmlFor="name"
            className={`text-sm font-medium ${
              errors.name ? 'text-red-500' : ''
            }`}
          >
            Name
          </label>
          <input
            type="text"
            className={`border border-gray-300 rounded-md p-2 ${
              errors.name ? 'border-red-500' : ''
            }`}
            {...register('name')}
          />
          <span className="text-red-500 text-sm">{errors.name?.message}</span>

          <label
            htmlFor="email"
            className={`text-sm font-medium ${
              errors.email ? 'text-red-500' : ''
            }`}
          >
            Email
          </label>
          <input
            type="email"
            className={`border border-gray-300 rounded-md p-2 ${
              errors.email ? 'border-red-500' : ''
            }`}
            {...register('email')}
          />
          <span className="text-red-500 text-sm">{errors.email?.message}</span>

          <label
            htmlFor="password"
            className={`text-sm font-medium ${
              errors.password ? 'text-red-500' : ''
            }`}
          >
            Password
          </label>
          <input
            type="password"
            className={`border border-gray-300 rounded-md p-2 ${
              errors.password ? 'border-red-500' : ''
            }`}
            {...register('password')}
          />
          <span className="text-red-500 text-sm">
            {errors.password?.message}
          </span>
          <button
            type="submit"
            disabled={signupLoading}
            className="mt-4 max-w-fit mx-auto px-8 bg-blue-500 text-white rounded-md p-2 hover:bg-blue-600"
          >
            {signupLoading ? 'Signing up...' : 'Signup'}
          </button>
        </form>
        {signupError && (
          <div className="text-red-500 text-sm">{signupError}</div>
        )}
      </div>
    </div>
  );
};

export default Signup;
