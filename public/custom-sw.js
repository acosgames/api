self.addEventListener('push', event => {
    const data = event.data.json()
    console.log('New notification', data)

    let options = JSON.parse(JSON.stringify(data));
    if (options.title)
        delete options.title;

    // const options = {
    //     body: data.body,
    // }
    event.waitUntil(
        self.registration.showNotification(data.title, options)
    );
})


self.addEventListener('notificationclick', function (event) {
    let url = event?.notification?.data?.url;
    event.notification.close(); // Android needs explicit close.
    event.waitUntil(
        clients.matchAll({ includeUncontrolled: true }).then(windowClients => {
            // Check if there is already a window/tab open with the target URL
            for (var i = 0; i < windowClients.length; i++) {
                var client = windowClients[i];
                // If so, just focus it.
                if (client.url === url && 'focus' in client) {
                    return client.focus();
                }
            }
            // If not, then open the target URL in a new window/tab.
            if (clients.openWindow) {
                return clients.openWindow(url);
            }
        })
    );
});