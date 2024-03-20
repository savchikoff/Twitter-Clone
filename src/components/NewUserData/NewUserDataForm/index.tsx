import { FC } from "react"
import { Input, NewDataForm, SubmitButton } from "./styled"
import { INewUserDataFormProps } from "./interfaces"
import ErrorLabel from "@/ui/ErrorLabel"
import { useForm } from "react-hook-form"
import { ChangeFormInputs } from "../interfaces"

const NewUserDataForm: FC<INewUserDataFormProps> = ({ handleChangeData }) => {

    const {
        register,
        handleSubmit,
        formState: { errors }
    } = useForm<ChangeFormInputs>({ mode: 'onBlur' });

    return (
        <NewDataForm onSubmit={handleSubmit(handleChangeData)}>
            <Input
                placeholder="New name"
                {...register('name', {
                    minLength: {
                        value: 2,
                        message: 'Name must be more than 2 characters',
                    },
                })}
            />
            {errors.name && <ErrorLabel label={errors.name.message} />}
            <Input
                placeholder="New phone"
                {...register('phone', {
                    pattern: {
                        value: /^(\+375|80)(29|25|44|33)(\d{3})(\d{2})(\d{2})$/,
                        message: 'Invalid phone number (example: +375333435866)',
                    },
                })}
            />
            {errors.phone && <ErrorLabel label={errors.phone.message} />}
            <Input
                placeholder="New email (needs current password)"
                {...register('email', {
                    pattern: {
                        value: /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/,
                        message: 'Invalid email address',
                    },
                })}
            />
            {errors.email && <ErrorLabel label={errors.email.message} />}
            <Input
                type="password"
                placeholder="Current password"
                {...register('password', {
                    minLength: {
                        value: 8,
                        message: 'Password must be more than 8 characters',
                    },
                    maxLength: {
                        value: 20,
                        message: 'Password must be less than 20 characters',
                    },
                })}
            />
            {errors.password && <ErrorLabel label={errors.password.message} />}
            <Input
                type="password"
                placeholder="New password (needs current password)"
                {...register('newPassword', {
                    pattern: {
                        value:
                            /^(?=.*?[A-Z])(?=(.*[a-z]){1,})(?=(.*[\d]){1,})(?=(.*[\W]){1,})(?!.*\s).{8,}$/,
                        message:
                            'New password should contain at least one number, one special character and one upper letter',
                    },
                    minLength: {
                        value: 8,
                        message: 'Password must be more than 8 characters',
                    },
                    maxLength: {
                        value: 20,
                        message: 'Password must be less than 20 characters',
                    },
                })}
            />
            {errors.newPassword && <ErrorLabel label={errors.newPassword.message} />}
            <SubmitButton type="submit">Change</SubmitButton>
        </NewDataForm>
    )
}

export default NewUserDataForm;