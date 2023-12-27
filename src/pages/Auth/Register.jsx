import React, { useState } from 'react'
import FormContainer from '../../components/FormContainer'
import Input from '../../components/Input'
import { FaEye, FaEyeSlash } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import Button from '../../components/Button';

export default function Register() {
    const [showPassword, setShowPassword] = useState(false);

    const togglePasswordVisibility = () => {
        setShowPassword(!showPassword);
    };

    return (
        <FormContainer>
            <h2 className="text-2xl font-semibold text-center text-primary">Register</h2>

            <form className="space-y-4">

                <div>
                    <Input.TextInput
                        type='email'
                        name="password"
                        placeholder="Email"
                    ></Input.TextInput>
                </div>

                <div className="relative">
                    <Input.TextInput
                        type={showPassword ? "text" : "password"}
                        name="password"
                        placeholder="password"
                    ></Input.TextInput>
                    <button
                        type="button"
                        className="absolute top-1/2 right-2 transform -translate-y-1/2"
                        onClick={togglePasswordVisibility}
                    >
                        {showPassword ? <FaEyeSlash /> : <FaEye />}
                    </button>
                </div>

                <div className="flex items-center justify-between flex-wrap gap-y-5">
                    <Input.Checkbox
                        labelText={"Remember me"}
                        id="remember__me"
                        name="isRemember"
                        className="mr-2"
                    ></Input.Checkbox>
                    <Link to={'/resetPassword'} className="text-sm text-indigo-600 hover:underline">
                        Forgot password?
                    </Link>
                </div>

                <div>
                    <Button type="submit">Register</Button>
                </div>
            </form>
        </FormContainer>
    )
}
