import { expect } from '@jest/globals';
import { isLikedByMe } from './isLikedByMe';

describe('isLikedByMe', () => {
	it('should return true if the uid is in the likedUsers array', () => {
		const likedUsers = ['user1', 'user2', 'user3'];
		const uid = 'user2';

		const result = isLikedByMe(likedUsers, uid);

		expect(result).toBe(true);
	});

	it('should return false if the uid is not in the likedUsers array', () => {
		const likedUsers = ['user1', 'user2', 'user3'];
		const uid = 'user4';

		const result = isLikedByMe(likedUsers, uid);

		expect(result).toBe(false);
	});

	it('should return false if the likedUsers array is empty', () => {
		const likedUsers: string[] = [];
		const uid = 'user1';

		const result = isLikedByMe(likedUsers, uid);

		expect(result).toBe(false);
	});
});
