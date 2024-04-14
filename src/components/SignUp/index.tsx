import { FC } from 'react';

import SignUpForm from './SignUpForm';
import {
	Container,
	Wrapper,
} from './styled';

const SignUp: FC = () => {

	return (
		<Container>
			<Wrapper>
				<SignUpForm />
			</Wrapper>
		</Container>
	);
};

export default SignUp;
