import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const Login = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const navigate = useNavigate();
    const backgroundImage = 'url(/image/background.jpg)'; // Đặt đúng đường dẫn

    const handleEmailChange = (e) => setEmail(e.target.value);
    const handlePasswordChange = (e) => setPassword(e.target.value);

    const handleSubmit = (e) => {
        e.preventDefault();

        // Lấy thông tin từ localStorage
        const savedAccounts = JSON.parse(localStorage.getItem('accounts')) || [];
        const account = savedAccounts.find(acc => acc.ID === email);

        // Kiểm tra thông tin đăng nhập
        if (account && password === account.PASSWORD) {
            navigate('/movie'); // Chuyển hướng nếu thông tin đăng nhập chính xác
        } else {
            alert('Invalid email or password.'); // Hiển thị thông báo lỗi nếu thông tin không khớp
        }
    };

    const handleSignUpRedirect = () => {
        navigate('/register');
    };

    return (
        <div
            className='custom-body'
            style={{ backgroundImage: backgroundImage, backgroundSize: 'cover', backgroundPosition: 'center' }}
        >
            <div className="flex items-center justify-center min-h-screen">
                <LoginForm
                    email={email}
                    password={password}
                    onEmailChange={handleEmailChange}
                    onPasswordChange={handlePasswordChange}
                    onSubmit={handleSubmit}
                    onSignUpRedirect={handleSignUpRedirect}
                />
            </div>
        </div>
    );
};

const LoginForm = ({ email, password, onEmailChange, onPasswordChange, onSubmit, onSignUpRedirect }) => {
    return (
        <div className="w-full max-w-md p-8 space-y-8 bg-white rounded-lg shadow">
            <h2 className="text-2xl font-bold text-center text-gray-900">Login</h2>
            <form onSubmit={onSubmit} className="space-y-6">
                <div className="rounded-md shadow-sm">
                    <div>
                        <label htmlFor="email-address" className="sr-only">
                            Email address
                        </label>
                        <input
                            id="email-address"
                            name="email"
                            type="email"
                            autoComplete="email"
                            required
                            value={email}
                            onChange={onEmailChange}
                            className="relative block w-full px-3 py-2 mb-3 text-gray-900 placeholder-gray-500 border border-gray-300 rounded-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
                            placeholder="Email address"
                        />
                    </div>
                    <div>
                        <label htmlFor="password" className="sr-only">
                            Password
                        </label>
                        <input
                            id="password"
                            name="password"
                            type="password"
                            autoComplete="current-password"
                            required
                            value={password}
                            onChange={onPasswordChange}
                            className="relative block w-full px-3 py-2 text-gray-900 placeholder-gray-500 border border-gray-300 rounded-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
                            placeholder="Password"
                        />
                    </div>
                </div>

                <div>
                    <button
                        type="submit"
                        className="relative flex justify-center w-full px-4 py-2 text-sm font-medium text-white bg-indigo-600 border border-transparent rounded-md group hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                    >
                        Login
                    </button>
                </div>
            </form>
            <div className="text-center">
                <button
                    onClick={onSignUpRedirect}
                    className="mt-4 text-sm font-medium text-indigo-600 hover:text-indigo-500"
                >
                    Don't have an account? Sign up
                </button>
            </div>
        </div>
    );
};

export default Login;
