import { useMemo, useState } from "react";
import { Wrapper, Container, TwitterLogoWrapper, TwitterLogo, SignUpHeader, SignUpForm, InputsWrapper, Input, UseLink, DateOfBirthHeader, DateOfBirthWrapper, DateOfBirthSelects, Button, Error } from "./styled";
import twitterLogo from "@assets/twitter-logo.svg";
import Select from "../Select";
import { getDaysInMonthArray, generateYears } from "@/utils/getDaysInMonthArray";
import { Month } from "@/constants/Month";

const SignUp = () => {
    const [selectedDay, setSelectedDay] = useState("");
    const [selectedMonth, setSelectedMonth] = useState("");
    const [selectedYear, setSelectedYear] = useState("");

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
                        <Input placeholder="Name" />
                        <Input placeholder="Phone number" />
                        <Input placeholder="Email" />
                        <UseLink>Use email</UseLink>
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
                <Button>Next</Button>
            </Wrapper>
        </Container>
    )
}

export default SignUp;