import { useState } from "react";
import { useNavigate } from "react-router";

import InputFields from "../components/InputFields";
import { MdLogin } from "react-icons/md";

function Login() {
    const [formData, setFormData] = useState({
        username: '',
        email: '',
        password: '',
    });
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState('');
    const navigate = useNavigate();

    const handleSubmit = async (e) => {
        e.preventDefault();
        setLoading(true);
        setError('');

        try {
            const response = await fetch('http://127.0.0.1:3000/login', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(formData),
            });

            const data = await response.json();

            if (response.ok) {
                localStorage.setItem('token', data.token);
                navigate('/');
            } else {
                setError(data.message || 'Login failed');
            }
        } catch (error) {
            setError(`Network error. Please try again. Error: ${error}`);
        } finally {
            setLoading(false);
        }
    };

    const handleInputChange = (field, value) => {
        setFormData(prev => ({
            ...prev,
            [field]: value
        }));
    };

    return (
        <main className="h-screen flex items-center justify-center">
            <section className="border p-5 rounded-md">
                <form className="flex flex-col gap-5 items-center" onSubmit={handleSubmit}>
                    <h1 className="text-center text-4xl">Login</h1>

                    {error && <p>{error}</p>}

                    <InputFields
                        label="Username"
                        inputId="usernameInput"
                        placeholder="johnlenny"
                        inputType="text"
                        value={formData.username}
                        onChange={(value) => handleInputChange('username', value)}
                    />
                    <InputFields
                        label="Email"
                        inputId="emailInput"
                        placeholder="example@gmail.com"
                        inputType="text"
                        value={formData.email}
                        onChange={(value) => handleInputChange('email', value)}
                    />
                    <InputFields
                        label="Password"
                        inputId="pwdInput"
                        placeholder="********"
                        inputType="text"
                        value={formData.password}
                        onChange={(value) => handleInputChange('password', value)}
                    />
                    <button
                        type="submit"
                        disabled={loading}
                        className="cursor-pointer border flex items-center w-fit px-5 py-2 rounded-md hover:text-black hover:bg-white transition-all">
                        <MdLogin />{loading ? 'Logging in...' : 'Login'}
                    </button>
                </form>
            </section>
        </main>
    )
}

export default Login