import { FC } from 'react';
import {
	Container,
	Wrapper,
} from './styled';
import SignUpForm from './SignUpForm';

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
