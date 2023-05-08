import PocketBase from 'pocketbase';

export const handle = async ({ event, resolve }): Promise<void> => {
	event.locals.pb = new PocketBase('http://localhost:8090');
	event.locals.pb.authStore.loadFromCookie(event.request.headers.get('cookie') || '');

	if (event.locals.pb.authStore.isValid) {
		event.locals.user = '';
	}
};
