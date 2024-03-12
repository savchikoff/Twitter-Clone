import closeIcon from '@/assets/close.svg';
import React, { memo, useEffect, useRef } from 'react';
import ReactDOM from 'react-dom';

import { IModalProps } from './interfaces';
import {
    Background,
    CloseIcon,
    Content,
    HeaderRow,
    ScrollDisabler,
    Wrapper
} from './styled';

const portalRoot: HTMLElement | null = document.getElementById('portal-root');

const Modal: React.FC<IModalProps> = memo(({ isOpen, close, children }) => {
    const ref = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const checkIfClickedOutside = (e: any) => {
            if (isOpen && ref.current && !ref.current.contains(e.target)) {
                close();
            }
        };

        document.addEventListener('mousedown', checkIfClickedOutside);

        return () => {
            document.removeEventListener('mousedown', checkIfClickedOutside);
        };
    }, [isOpen, close]);

    if (!isOpen) return null;
    return ReactDOM.createPortal(
        <>
            <Background>
                <Wrapper ref={ref}>
                    <HeaderRow>
                        <CloseIcon
                            src={closeIcon}
                            alt="close-icon"
                            onClick={close}
                        />
                    </HeaderRow>
                    <Content>{children}</Content>
                </Wrapper>
            </Background>
            <ScrollDisabler />
        </>,
        portalRoot as Element
    );
});

export default Modal;
