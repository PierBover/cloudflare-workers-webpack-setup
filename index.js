addEventListener('fetch', event => {
	event.respondWith(onRequest(event));
});

function onRequest() {
	console.log('hello');
	return new Response('Hello!', {
		status: 200
	});
}