const socket = io(); // connecting client side connection in this js file connected to html file using "io()" function in "socket.io.js"

socket.on('countUpdated', (count) => {
    console.log('The count has been Updated!', count);
})

document.querySelector('#increment').addEventListener('click', () => {
    console.log('Clicked!');

    socket.emit('increment');
});