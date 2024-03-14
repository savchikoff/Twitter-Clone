export interface ISelectProps {
    label: string;
    options: string[];
    selectedOption: string;
    setSelectedOption: (option: string) => void;
    isDisabled?: boolean;
    dataCy?: string;
}