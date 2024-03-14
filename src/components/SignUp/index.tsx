import twitterLogo from "@/assets/twitter-logo.svg";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { addDoc, collection } from "firebase/firestore";
import { FC, useEffect, useMemo, useState } from "react";
import { useAuthState } from "react-firebase-hooks/auth"
import { useForm } from "react-hook-form";
import { Link, useNavigate } from "react-router-dom";

import { Month } from "@/constants/month";
import { auth, db } from "@/firebase";
import ErrorLabel from "@/ui/ErrorLabel";
import LinkWrapper from "@/ui/LinkWrapper";
import Notification from "@/ui/Notification";
import { generateYears } from "@/utils/generateYears";
import { getDaysInMonthArray } from "@/utils/getDaysInMonthArray";

import Select from "../../ui/Select";
import { ISignUpFormInput } from "./interfaces";
import {
    Button,
    Container,
    DateOfBirthHeader,
    DateOfBirthSelects,
    DateOfBirthWrapper,
    Input,
    InputsWrapper,
    SignUpFields,
    SignUpForm,
    SignUpHeader,
    TwitterLogo,
    TwitterLogoWrapper,
    Wrapper
} from "./styled";

const SignUp: FC = () => {
    const navigate = useNavigate();

    const { register, handleSubmit, formState: { errors, isValid } } = useForm<ISignUpFormInput>({ mode: "onBlur" });

    const [isNotificationActive, setNotificationActive] = useState(false);
    const [isError, setIsError] = useState(false);
    const [error, setError] = useState<string | undefined>("");

    const [selectedDay, setSelectedDay] = useState("");
    const [selectedMonth, setSelectedMonth] = useState("");
    const [selectedYear, setSelectedYear] = useState("");
    const [dateOfBirth, setDateOfBirth] = useState("");

    const [user, loading] = useAuthState(auth);

    useEffect(() => {
        setDateOfBirth(`${selectedDay} ${selectedMonth} ${selectedYear}`)
    }, [selectedMonth, selectedYear, selectedDay]);

    useEffect(() => {
        if (loading) return;
        if (user) navigate('/');
    }, [user, loading]);

    useEffect(() => {
        if (errors?.name?.message ||
            errors?.phone?.message ||
            errors?.email?.message ||
            errors?.password?.message) {
            setIsError(true);
            setError(
                errors?.name?.message ||
                errors?.phone?.message ||
                errors?.email?.message ||
                errors?.password?.message);
        } else {
            setIsError(false);
            setError("");
        }
    }, [errors.email, errors.password, errors.name, errors.phone]);

    const handleSignUp = async ({ name, email, phone, password }: ISignUpFormInput) => {
        try {
            const credentials = await createUserWithEmailAndPassword(auth, email, password);
            await addDoc(collection(db, "Users"), {
                uid: credentials.user.uid,
                authProvider: "local",
                name,
                phone,
                email,
                password,
                dateOfBirth
            });
            navigate('/');
        } catch (e: any) {
            setIsError(true);
            setError(e.message);
            setNotificationActive(true);
        }
    };

    const handleNotificationActive = () => {
        setNotificationActive(false);
        setIsError(false);
        setError("");
    }

    const daysInMonth = useMemo(() => getDaysInMonthArray(Month.indexOf(selectedMonth), Number(selectedYear)), [selectedMonth, selectedYear]);
    const years = useMemo(() => generateYears(), []);
    const isDayDisabled = !selectedMonth || !selectedYear;
    const isSubmitButtonDisabled = isDayDisabled || !selectedDay || !isValid;

    return (
        <Container>
            <Wrapper>
                <SignUpForm onSubmit={handleSubmit(handleSignUp)}>
                    <InputsWrapper>
                        <TwitterLogoWrapper>
                            <TwitterLogo src={twitterLogo} />
                        </TwitterLogoWrapper>
                        <SignUpHeader>Create an account</SignUpHeader>
                        <SignUpFields>
                            <Input
                                {...register("name", {
                                    required: "Name field is required"
                                })}
                                placeholder="Name" />
                            <Input
                                {...register("phone", {
                                    required: "Phone field is required",
                                    pattern: {
                                        value: /^(\+375|80)(29|25|44|33)(\d{3})(\d{2})(\d{2})$/,
                                        message: "Invalid phone number (example: +375333435866)"
                                    }
                                })}
                                placeholder="Phone number" />
                            <Input
                                {...register("email", {
                                    required: "Email field is required",
                                    pattern: {
                                        value: /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/,
                                        message: "Invalid email address (example: example@mail.ru)"
                                    }
                                })}
                                type="email"
                                placeholder="Email" />
                            <Input
                                type="password"
                                {...register("password", {
                                    required: "You must specify a password",
                                    pattern: {
                                        value: /^(?=.*?[A-Z])(?=(.*[a-z]){1,})(?=(.*[\d]){1,})(?=(.*[\W]){1,})(?!.*\s).{8,}$/,
                                        message: "Password should contain at least one number and one    special character"
                                    },
                                    minLength: {
                                        value: 8,
                                        message: "Password must be more than 8 characters"
                                    },
                                    maxLength: {
                                        value: 20,
                                        message: "Password must be less than 20 characters"
                                    },
                                })}
                                placeholder="Password" />
                            {isError && !isNotificationActive && <ErrorLabel label={error} />}
                            <LinkWrapper><Link to="/">Use email</Link></LinkWrapper>
                        </SignUpFields>
                    </InputsWrapper>
                    <DateOfBirthWrapper>
                        <DateOfBirthHeader>Date of birth</DateOfBirthHeader>
                        <DateOfBirthSelects>
                            <Select label="Month" options={Month} selectedOption={selectedMonth} setSelectedOption={setSelectedMonth} />
                            <Select label="Year" options={years} selectedOption={selectedYear} setSelectedOption={setSelectedYear} />
                            <Select label="Day" options={daysInMonth} selectedOption={selectedDay} setSelectedOption={setSelectedDay} isDisabled={!selectedMonth || !selectedYear} />
                        </DateOfBirthSelects>
                        {isDayDisabled && <ErrorLabel label="* While month and year aren't specified you can't choose the day" />}
                    </DateOfBirthWrapper>
                    <Button type="submit" disabled={isSubmitButtonDisabled}>Sign Up</Button>
                </SignUpForm>
                {isNotificationActive && <Notification
                    isError
                    active={isNotificationActive}
                    handleNotificationActive={handleNotificationActive}
                    label="Error while authenticating"
                    message={error} />}
            </Wrapper>
        </Container>
    )
}

export default SignUp;