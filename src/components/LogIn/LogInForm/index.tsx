import { FC } from "react";
import ErrorLabel from "@/ui/ErrorLabel";
import { Button, Input, LogInFormWrapper } from "./styled";
import { ILogInFormProps } from "./interfaces";
import { useForm } from "react-hook-form";
import { IFormInput } from "../interfaces";

const LogInForm: FC<ILogInFormProps> = ({ handleLogin }) => {
    const {
        register,
        handleSubmit,
        formState: { errors, isValid },
    } = useForm<IFormInput>({ mode: 'onBlur' });

    return (
        <LogInFormWrapper onSubmit={handleSubmit(handleLogin)}>
            <Input
                data-cy="login-email"
                {...register('email', {
                    required: 'Email field is required',
                    pattern: {
                        value: /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/,
                        message: 'Invalid email address',
                    },
                })}
                placeholder="Email address"
            />
            {errors.email && <ErrorLabel label={errors.email.message} />}
            <Input
                data-cy="login-password"
                type="password"
                {...register('password', {
                    required: 'You must specify a password',
                    minLength: {
                        value: 8,
                        message: 'Password must be more than 8 characters',
                    },
                    maxLength: {
                        value: 20,
                        message: 'Password must be less than 20 characters',
                    },
                })}
                placeholder="Password"
            />
            {errors.password && <ErrorLabel label={errors.password.message} />}
            <Button data-cy="login-btn" type="submit" disabled={!isValid}>
                Log In
            </Button>
        </LogInFormWrapper>
    )
}

export default LogInForm;