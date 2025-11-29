import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';
import { useDispatch } from 'react-redux';
import { signin } from '../../store/slices/authSlice';
import { useNavigate } from 'react-router-dom';

const signinSchema = z.object({
  email: z
    .email({ message: 'Invalid email address' })
    .min(1, { message: 'Email is required' }),
  password: z.string().min(1, { message: 'Password is required.' }),
});

const Signin = () => {
  const dispatch = useDispatch();

  const navigate = useNavigate();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: zodResolver(signinSchema),
  });

  const onFormSubmit = (data: z.infer<typeof signinSchema>) => {
    dispatch(
      signin({
        ...data,
        onSuccess: () => {
          navigate('/todo');
        },
      })
    );
  };

  return (
    <div className="flex justify-center items-center h-screen">
      <div className="w-md border border-gray-300 space-y-4 rounded-md p-4">
        <h2 className="text-2xl font-bold">Signin</h2>
        <form
          className="flex flex-col gap-2"
          onSubmit={handleSubmit(onFormSubmit)}
        >
          <label
            htmlFor="email"
            className={`text-sm font-medium ${
              errors.email ? 'text-red-500' : ''
            }`}
          >
            Email
          </label>
          <input
            type="text"
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
            className="mt-4 max-w-fit mx-auto px-8 bg-blue-500 text-white rounded-md p-2 hover:bg-blue-600"
          >
            Signin
          </button>
        </form>
      </div>
    </div>
  );
};

export default Signin;
