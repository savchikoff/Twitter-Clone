import { FC, memo } from 'react';

import { useTimeout } from '@/hooks/useTimeout';

import {
	NotificationContent,
	NotificationTitle,
	NotificationWrapper,
} from './styled';

interface INotificationProps {
	message: string;
	close: () => void;
	isError: boolean;
}

const Notification: FC<INotificationProps> = ({
	message,
	close,
	isError
}) => {
	useTimeout(() => {
		close();
	});

	return (
		<>
			<NotificationWrapper $isError={isError}>
				<NotificationTitle $isError={isError}>{isError ? "Error" : "Success"}</NotificationTitle>
				<NotificationContent $isError={isError}>
					{message}
				</NotificationContent>
			</NotificationWrapper>
		</>
	);
};

export default memo(Notification);
