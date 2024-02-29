import { useEffect, useMemo, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";
import { useAppDispatch } from "@/hooks/redux-hooks";
import { setUser } from '../../store/slices/userSlice'
import { Wrapper, Container, TwitterLogoWrapper, TwitterLogo, SignUpHeader, SignUpForm, InputsWrapper, Input, UseLink, DateOfBirthHeader, DateOfBirthWrapper, DateOfBirthSelects, Button, Error } from "./styled";
import twitterLogo from "@assets/twitter-logo.svg";
import Select from "../Select";
import { getDaysInMonthArray, generateYears } from "@/utils/getDaysInMonthArray";
import { Month } from "@/constants/Month";
import { db } from "@/firebase";
import { addDoc, collection } from "firebase/firestore";

const SignUp = () => {
    const dispatch = useAppDispatch();
    const navigate = useNavigate();

    const [name, setName] = useState("");
    const [number, setNumber] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [selectedDay, setSelectedDay] = useState("");
    const [selectedMonth, setSelectedMonth] = useState("");
    const [selectedYear, setSelectedYear] = useState("");
    const [dateOfBirth, setDateOfBirth] = useState("");

    useEffect(() => {
        setDateOfBirth(`${selectedDay} ${selectedMonth} ${selectedYear}`)
    }, [selectedMonth, selectedYear, selectedDay]);

    const handleSignUp = async (login: string, password: string) => {
        const auth = getAuth();
        console.log('fire');
        try {
            const credentials = await createUserWithEmailAndPassword(auth, login, password);
            const docRef = await addDoc(collection(db, "Users"), {
                name,
                number,
                email,
                password,
                dateOfBirth
            });

            console.log("Document written with ID", docRef.id);

            dispatch(setUser({
                login: credentials.user.email,
                id: credentials.user.uid,
            }));

            navigate('/feed');
        } catch (error) {
            console.error(error);
        }
    };

    const daysInMonth = useMemo(() => getDaysInMonthArray(Month.indexOf(selectedMonth), Number(selectedYear)), [selectedMonth, selectedYear]);
    const years = useMemo(() => generateYears(), []);
    const isDisabled = !selectedMonth || !selectedYear;

    return (
        <Container>
            <Wrapper>
                <InputsWrapper>
                    <TwitterLogoWrapper>
                        <TwitterLogo src={twitterLogo} />
                    </TwitterLogoWrapper>
                    <SignUpHeader>Create an account</SignUpHeader>
                    <SignUpForm>
                        <Input onChange={(e) => setName(e.target.value)} placeholder="Name" />
                        <Input onChange={(e) => setNumber(e.target.value)} placeholder="Phone number" />
                        <Input type="email" onChange={(e) => setEmail(e.target.value)} placeholder="Email" />
                        <Input type="password" onChange={(e) => setPassword(e.target.value)} placeholder="Password" />
                        <UseLink><Link to="/">Use email</Link></UseLink>
                    </SignUpForm>
                </InputsWrapper>
                <DateOfBirthWrapper>
                    <DateOfBirthHeader>Date of birth</DateOfBirthHeader>
                    <DateOfBirthSelects>
                        <Select label="Month" options={Month} selectedOption={selectedMonth} setSelectedOption={setSelectedMonth} />
                        <Select label="Year" options={years} selectedOption={selectedYear} setSelectedOption={setSelectedYear} />
                        <Select label="Day" options={daysInMonth} selectedOption={selectedDay} setSelectedOption={setSelectedDay} isDisabled={!selectedMonth || !selectedYear} />
                    </DateOfBirthSelects>
                    {isDisabled && <Error>* While month and year isn't specified you can't choose the day</Error>}
                </DateOfBirthWrapper>
                <Button onClick={() => handleSignUp(email, password)}>Next</Button>
            </Wrapper>
        </Container>
    )
}

export default SignUp;