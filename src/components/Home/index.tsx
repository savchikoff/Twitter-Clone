import { FC } from 'react';

import { useTweets } from '@/providers/TweetsProvider';
import ThemeToggle from '@/ui/ThemeToggle';

import NewTweet from '../NewTweet';
import { TweetsWrapper } from '../Profile/styled';
import SectionWrapper from '../SectionWrapper';
import Tweet from '../Tweet';
import { HomeHeader, HomeHeaderWrapper } from './styled';

const Home: FC = () => {
	const allTweets = useTweets();

	return (
		<SectionWrapper>
			<HomeHeaderWrapper>
				<HomeHeader data-cy="home-label">Home</HomeHeader>
				<ThemeToggle />
			</HomeHeaderWrapper>
			<NewTweet />
			<TweetsWrapper>
				{allTweets.map(
					({
						tweetId,
						name,
						userName,
						text,
						likes,
						likedUsers,
						image,
						createdAt,
						id,
					}) => {
						const { nanoseconds, seconds } = createdAt;
						const date = new Date(
							seconds * 1000 + nanoseconds / 1000000
						).toLocaleDateString();
						return (
							<Tweet
								key={tweetId}
								tweetId={tweetId}
								name={name.split(' ')[0]}
								likedUsers={likedUsers}
								userName={userName}
								text={text}
								likes={likes}
								image={image}
								createdAt={date}
								id={id}
							/>
						);
					}
				)}
			</TweetsWrapper>
		</SectionWrapper>
	);
};

export default Home;
