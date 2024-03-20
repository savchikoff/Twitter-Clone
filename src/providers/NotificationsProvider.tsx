import { FC, PropsWithChildren, createContext, useContext, useMemo, useState } from "react";
import styled from "styled-components";
import Notification from "@/ui/Notification";

const NotificationsWrapper = styled.div`
    position: fixed;
    top: 30px;
    right: 24px;
    display: flex;
    flex-direction: column;
    gap: 10px;
`;


type NotificationContextValue = {
    open: (message: string, isError: boolean) => void;
    close: (id: number) => void;
};

export const NotificationContext = createContext<NotificationContextValue | null>(null);

export const useNotification = () => useContext(NotificationContext);

interface NotificationType {
    message: string;
    id: number;
    isError: boolean;
}


export const NotificationProvider: FC<PropsWithChildren> = ({ children }) => {
    const [notifications, setNotifications] = useState<NotificationType[]>([]);

    const openNotification = (message: string, isError: boolean) => {
        const newNotification = {
            id: Date.now(),
            message: message,
            isError: isError
        };

        setNotifications(prevNotifications => [...prevNotifications, newNotification]);
    };

    const closeNotification = (id: number) => {
        setNotifications(prevNotifications =>
            prevNotifications.filter(notification => notification.id !== id)
        );
    };

    const contextValue = useMemo(() => ({
        open: openNotification,
        close: closeNotification
    }), []);

    return (
        <>
            <NotificationContext.Provider value={contextValue}>
                {children}
                <NotificationsWrapper>
                    {notifications && notifications.map(({ id, message, isError }) => {
                        return (
                            <Notification key={id} message={message} close={() => closeNotification(id)} isError={isError} />
                        )
                    })}
                </NotificationsWrapper>
            </NotificationContext.Provider>
        </>
    )
}