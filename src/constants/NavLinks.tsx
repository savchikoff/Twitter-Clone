/// <reference types="vite-plugin-svgr/client" />
import { ComponentType } from 'react';

import Bookmarks from '@/assets/icons/bookmarks.svg?react';
import Explore from '@/assets/icons/explore.svg?react';
import Home from '@/assets/icons/home.svg?react';
import Lists from '@/assets/icons/lists.svg?react';
import Messages from '@/assets/icons/messages.svg?react';
import More from '@/assets/icons/more.svg?react';
import Notifications from '@/assets/icons/notification.svg?react';
import Profile from '@/assets/icons/profile.svg?react';

interface INavLink {
	name: string;
	to: string;
	icon: ComponentType;
}

export const NAV_LINKS: INavLink[] = [
	{
		name: 'Home',
		to: '/',
		icon: Home,
	},
	{
		name: 'Explore',
		to: '/explore',
		icon: Explore,
	},
	{
		name: 'Notifications',
		to: '/notification',
		icon: Notifications,
	},
	{
		name: 'Messages',
		to: '/messages',
		icon: Messages,
	},
	{
		name: 'Bookmarks',
		to: '/bookmarks',
		icon: Bookmarks,
	},
	{
		name: 'Lists',
		to: '/lists',
		icon: Lists,
	},
	{
		name: 'Profile',
		to: 'profile',
		icon: Profile,
	},
	{
		name: 'More',
		to: '/more',
		icon: More,
	},
];
