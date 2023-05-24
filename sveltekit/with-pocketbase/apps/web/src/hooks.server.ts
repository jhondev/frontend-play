import PocketBase from 'pocketbase';
import { serializeNonPOJOs } from './lib/utils';

export const handle = async ({ event, resolve }): Promise<Response> => {
	event.locals.pb = new PocketBase('http://localhost:8090');
	event.locals.pb.authStore.loadFromCookie(event.request.headers.get('cookie') || '');

	event.locals.user = event.locals.pb.authStore.isValid
		? serializeNonPOJOs(event.locals.pb.authStore.model)
		: undefined;

	const response = await resolve(event);
	response.headers.set('set-cookie', event.locals.pb.authStore.exportToCookie({ secure: false }));

	return response;
};
