// // const socket = io('/')
// // const videoGrid = document.getElementByID('video-grid')
// // const myPeer = new Peer(undefined, {
// //     host: '/',
// //     port: 3001
// // })

// // const myVideo = document.createElement('video')
// // myVideo.muted = true

// // const peers = {}

// // navigator.mediaDevices.getUserMedia({
// //     video: true,
// //     audio: true
// // }).then(stream =>{

// //     addVideoStream(myVideo, stream)
// //     myPeer.on('call', call =>{
// //         call.answer(stream)

// //         const video = document.createElement('video')

// // call.on('stream', userVideoStream =>{

// //     addVideoStream(video, userVideoStream)

// // })        
// //     })
// //     socket.on('user-connected', userId => {

// //         connectToNewUser(userId, stream)

// //     })

// // })

// // socket.on('user-disconnected', userId =>{
// //     if (peers[userId]) peers[userId].close()
// // })

// // myPeer.on('open', id =>{
// //     socket.emit('join-room', ROOM_ID, id)
// // })
// // // socket.emit('join-room', ROOM_ID, 10)


// // function connectToNewUser(userId, stream){

// // const call = myPeer.call(userId, stream)
// // const video = document.createElement('video')
// // call.on('stream', userVideoStream =>{
// //     addVideoStream(video, userVideoStream)
// // })

// // call.on('close', ()=>{
// //     video.remove()
// // })

// // peers[userId] = call

// // }


// // function addVideoStream(video, stream){
// //     video.addEventListener('loadedmetadata', ()=>{
// //         video.play()
// //     })
// //     videoGrid.append(video)
// // }

// const socket = io('/');
// const videoGrid = document.getElementById('video-grid');
// const myPeer = new Peer(undefined, {
//     host: '/',
//     port: 3001 // Use a different port for the Peer server
// });

// const myVideo = document.createElement('video');
// myVideo.muted = true;

// const peers = {};

// navigator.mediaDevices.getUserMedia({
//     video: true,
//     audio: true
// }).then(stream => {
//     addVideoStream(myVideo, stream);
//     myPeer.on('call', call => {
//         call.answer(stream);
//         const video = document.createElement('video');
//         call.on('stream', userVideoStream => {
//             addVideoStream(video, userVideoStream);
//         });
//     });
//     socket.on('user-connected', userId => {
//         connectToNewUser(userId, stream);
//     });
// });

// socket.on('user-disconnected', userId => {
//     if (peers[userId]) {
//         peers[userId].close();
//         delete peers[userId]; // Remove the peer from the peers object
//     }
// });

// myPeer.on('open', id => {
//     socket.emit('join-room', ROOM_ID, id);
// });

// function connectToNewUser(userId, stream) {
//     const call = myPeer.call(userId, stream);
//     const video = document.createElement('video');
//     call.on('stream', userVideoStream => {
//         addVideoStream(video, userVideoStream);
//     });
//     call.on('close', () => {
//         video.remove();
//         delete peers[userId]; // Remove the peer from the peers object
//     });
//     peers[userId] = call;
// }

// function addVideoStream(video, stream) {
//     video.srcObject = stream;
//     video.addEventListener('loadedmetadata', () => {
//         video.play();
//     });
//     videoGrid.append(video);
// }



const socket = io('/');
const videoGrid = document.getElementById('video-grid');
const myPeer = new Peer(undefined, {
    host: '/',
    port: '3006' // Ensure you're using the correct port for Peer server
});

navigator.mediaDevices.getUserMedia({
    video: true,
    audio: true
}).then(stream => {
    const myVideo = document.createElement('video'); // Create myVideo element
    myVideo.muted = true; // Mute own video
    addVideoStream(myVideo, stream); // Add own video stream to the grid

    myPeer.on('call', call => {
        call.answer(stream);
        const video = document.createElement('video');
        call.on('stream', userVideoStream => {
            addVideoStream(video, userVideoStream);
        });
    });

    socket.on('user-connected', userId => {
        setTimeout(() => {
            // Delaying the call to ensure video elements are created
            connectToNewUser(userId, stream);
        }, 1000);
    });
});

socket.on('user-disconnected', userId => {
    const videoElement = document.getElementById(userId);
    if (videoElement) {
        videoElement.remove();
    }
});

myPeer.on('open', id => {
    socket.emit('join-room', ROOM_ID, id);
});

function connectToNewUser(userId, stream) {
    const call = myPeer.call(userId, stream);
    const video = document.createElement('video');
    call.on('stream', userVideoStream => {
        addVideoStream(video, userVideoStream);
    });
    call.on('close', () => {
        video.remove();
    });
}

function addVideoStream(video, stream) {
    video.srcObject = stream;
    video.addEventListener('loadedmetadata', () => {
        video.play();
    });
    videoGrid.append(video);
}
