import * as io from 'socket.io-client';
const socket = io('//localhost:3001')
socket.on('connect',()=>{
    console.log("连接成功")
})
export default socket