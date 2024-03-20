import { IFormInput } from "../interfaces";

export interface ILogInFormProps {
    handleLogin: ({ email, password }: IFormInput) => void;
}