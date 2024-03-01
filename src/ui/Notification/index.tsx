import { FC, useEffect, useState } from 'react';

import {
    NotificationWrapper,
    NotificationTitle,
    NotificationContent,
} from './styled';

interface INotificationProps {
    label?: string;
    message?: string;
    isError: boolean;
    active: boolean;
    handleNotificationActive: () => void;
}

const Notification: FC<INotificationProps> = ({ isError, active, handleNotificationActive, label, message }) => {
    const [timer, setTimer] = useState<NodeJS.Timeout | null>(null);

    useEffect(() => {
        if (active) {
            const newTimer = setTimeout(() => {
                handleNotificationActive();
            }, 5000);

            setTimer(newTimer);
        }

        return () => {
            if (timer) {
                clearTimeout(timer);
            }
        };
    }, [active, handleNotificationActive, timer]);

    return (
        <>
            {active && (
                <NotificationWrapper $isError={isError}>
                    <NotificationTitle $isError={isError}>{label}</NotificationTitle>
                    <NotificationContent $isError={isError}>
                        {message}
                    </NotificationContent>
                </NotificationWrapper>
            )}
        </>
    );
};

export default Notification;
