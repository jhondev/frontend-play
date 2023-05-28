import { redirect, type Action } from '@sveltejs/kit';

export const POST: Action = async ({ locals }) => {
	locals.pb.authStore.clear();
	locals.user = undefined;

	throw redirect(303, '/login');
};
