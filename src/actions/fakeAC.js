// @flow
import { FAKE_ACTION } from '../config/actionTypes';

export const fakeAction = (payload) => {

	return {
		type : FAKE_ACTION,
		payload
	};

};

export const fakeThunk = () => {

	return async function fakeThunkCb(dispatch) {

		try {

			const that = await fetch('https://jsonplaceholder.typicode.com/todos/1');
			dispatch(fakeAction('try'));
			dispatch(fakeAction(that.url));
			console.log('that.completed', that.url);

		} catch (e) {

			dispatch(fakeAction(e));

		}
	}

	// return function fakeThunkCb(dispatch) {

	// 	dispatch(fakeAction('test'));

	// 	return fetch('https://jsonplaceholder.typicode.com/todos/1')
	// 		.then((res) => {

	// 			dispatch(fakeAction('try'));

	// 			if (res.status >= 200 && res.status < 300) {

	// 				return dispatch(fakeAction('something'));

	// 			}

	// 			return Promise.reject(res);

	// 		})
	// 		.catch((error) => {

	// 			dispatch(fakeAction('error'));

	// 		});

	// };

};

