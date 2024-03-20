import { FC } from 'react';

import { IErrorLabelProps } from './interfaces';
import { Error } from './styled';

const ErrorLabel: FC<IErrorLabelProps> = ({ label }) => {
	return <Error>⚠️ {label}</Error>;
};

export default ErrorLabel;
