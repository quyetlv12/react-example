import React from 'react'
import { authservice } from '../../services/auth'
import { useForm } from 'react-hook-form'
import { authAtom } from '../../store/auth'
import { useSetRecoilState } from 'recoil'
import { useNavigate } from 'react-router'

const Login = () => {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm()
  const navigate = useNavigate()
  const setUser = useSetRecoilState(authAtom);
  const onSubmitData = async (data) =>{
    const res = await authservice.login(data)
    if (res.status===200){
      setUser(res.data)
      navigate('/')
    }
  }
  return (
    <section className="bg-white dark:bg-gray-900">
  <div className="container flex items-center justify-center min-h-screen px-6 mx-auto">
    <form onSubmit={handleSubmit(onSubmitData)} className="w-full max-w-md">
      <div className="flex justify-center mx-auto">
        <img
          className="w-auto h-7 sm:h-8"
          src="https://merakiui.com/images/logo.svg"
          alt=""
        />
      </div>
      <div className="relative flex items-center mt-6">
        <span className="absolute">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="w-6 h-6 mx-3 text-gray-300 dark:text-gray-500"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth={2}
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
            />
          </svg>
        </span>
        <input
          autoComplete="on"
          id="email"
          type="email"
          className="block w-full py-3 text-gray-700 bg-white border rounded-lg px-11 dark:bg-gray-900 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 dark:focus:border-blue-300 focus:ring-blue-300 focus:outline-none focus:ring focus:ring-opacity-40"
          placeholder="Email address"
          {...register('email')}
        />
      </div>
      <div className="relative flex items-center mt-4">
        <span className="absolute">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="w-6 h-6 mx-3 text-gray-300 dark:text-gray-500"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth={2}
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z"
            />
          </svg>
        </span>
        <input
          autoComplete="on"
          id="password"
          type="password"
          className="block w-full px-10 py-3 text-gray-700 bg-white border rounded-lg dark:bg-gray-900 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 dark:focus:border-blue-300 focus:ring-blue-300 focus:outline-none focus:ring focus:ring-opacity-40"
          placeholder="Password"
          {...register('password')}
        />
      </div>
      <div className="flex">
        <span id="errors" className="text-red-500 mt-5 font-bold" />
      </div>
      <div className="mt-6">
        <button
          type="submit"
          id="btn-login"
          className="w-full px-6 py-3 text-sm font-medium tracking-wide text-white capitalize transition-colors duration-300 transform bg-blue-500 rounded-lg hover:bg-blue-400 focus:outline-none focus:ring focus:ring-blue-300 focus:ring-opacity-50"
        >
          Đăng Nhập
        </button>
      </div>
    </form>
  </div>
</section>

  )
}

export default Login