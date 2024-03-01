import { useEffect, useMemo, useState } from "react";
import twitterLogo from "@assets/twitter-logo.svg";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { addDoc, collection } from "firebase/firestore";
import { Link, useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";

import { Month } from "@/constants/Month";
import { db, auth } from "@/firebase";
import { useAuthState } from "react-firebase-hooks/auth"
import { generateYears, getDaysInMonthArray } from "@/utils/getDaysInMonthArray";
import Select from "../Select";
import { Button, Container, DateOfBirthHeader, DateOfBirthSelects, DateOfBirthWrapper, Error, Input, InputsWrapper, SignUpFields, SignUpHeader, TwitterLogo, TwitterLogoWrapper, UseLink, Wrapper } from "./styled";
import ErrorLabel from "@/ui/ErrorLabel";


interface ISignUpFormInput {
    name: string;
    phone: string;
    email: string;
    password: string;
}

const SignUp = () => {
    const navigate = useNavigate();

    const { register, handleSubmit, formState: { errors, isValid } } = useForm<ISignUpFormInput>({ mode: "onBlur" });

    const [isNotificationActive, setNotificationActive] = useState(false);
    const [isError, setIsError] = useState(false);
    const [error, setError] = useState<string | undefined>("");

    const [name, setName] = useState("");
    const [number, setNumber] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
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
        if (user) navigate('/feed');
    }, [user, loading]);

    const handleSignUp = async (login: string, password: string) => {
        try {
            const credentials = await createUserWithEmailAndPassword(auth, login, password);
            await addDoc(collection(db, "Users"), {
                uid: credentials.user.uid,
                authProvider: "local",
                name,
                number,
                email,
                password,
                dateOfBirth
            });
            navigate('/feed');
        } catch (error) {
            console.error(error);
        }
    };

    const daysInMonth = useMemo(() => getDaysInMonthArray(Month.indexOf(selectedMonth), Number(selectedYear)), [selectedMonth, selectedYear]);
    const years = useMemo(() => generateYears(), []);
    const isDayDisabled = !selectedMonth || !selectedYear;

    return (
        <Container>
            <Wrapper>
                <InputsWrapper>
                    <TwitterLogoWrapper>
                        <TwitterLogo src={twitterLogo} />
                    </TwitterLogoWrapper>
                    <SignUpHeader>Create an account</SignUpHeader>
                    <SignUpFields>
                        <Input onChange={(e) => setName(e.target.value)} placeholder="Name" />
                        <Input onChange={(e) => setNumber(e.target.value)} placeholder="Phone number" />
                        <Input
                            {...register("email", {
                                required: "Email field is required",
                                pattern: {
                                    value: /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/,
                                    message: "Invalid email address"
                                }
                            })}
                            type="email"
                            onChange={(e) => setEmail(e.target.value)}
                            placeholder="Email" />
                        <Input type="password" onChange={(e) => setPassword(e.target.value)} placeholder="Password" />
                        <ErrorLabel label="hello" />
                        <UseLink><Link to="/">Use email</Link></UseLink>
                    </SignUpFields>
                </InputsWrapper>
                <DateOfBirthWrapper>
                    <DateOfBirthHeader>Date of birth</DateOfBirthHeader>
                    <DateOfBirthSelects>
                        <Select label="Month" options={Month} selectedOption={selectedMonth} setSelectedOption={setSelectedMonth} />
                        <Select label="Year" options={years} selectedOption={selectedYear} setSelectedOption={setSelectedYear} />
                        <Select label="Day" options={daysInMonth} selectedOption={selectedDay} setSelectedOption={setSelectedDay} isDisabled={!selectedMonth || !selectedYear} />
                    </DateOfBirthSelects>
                    {isDayDisabled && <ErrorLabel label="* While month and year isn't specified you can't choose the day" />}
                </DateOfBirthWrapper>
                <Button onClick={() => handleSignUp(email, password)}>Next</Button>
            </Wrapper>
        </Container>
    )
}

export default SignUp;