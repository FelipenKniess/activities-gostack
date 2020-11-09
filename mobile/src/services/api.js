import axios from 'axios';

const api = axios.create({
    baseURL: 'http://192.168.0.104:3333',
})

export default api;

/** 
 iOs cmo emulador: Localhost
 ios com físico>: ip da máquina
 
 android com emulador: localhost(adb reverse)
 android com emular: 10.0.2.2 (Android studio)
 Andoid com emulador 10.0.3.2 (denymotion)
 Android com físico: ip da máquina


 * */ 