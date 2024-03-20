import { FC, useEffect } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { useNavigate } from 'react-router-dom';

import Feed from '@/components/Feed';
import { auth } from '@/config/firebase';
import { ROUTES } from '@/constants/routes';

const FeedPage: FC = () => {
	const [user] = useAuthState(auth);
	const navigate = useNavigate();

	useEffect(() => {
		if (!user) return navigate(ROUTES.onboarding);
	}, [user, navigate]);

	return <Feed />;
};

export default FeedPage;
