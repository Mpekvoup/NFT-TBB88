import axios from 'axios';

export const a = axios.create({

    baseURL: 'https://47fa927e1297d0de.mokky.dev/nfts',
})

export const a1 = axios.create({
    baseURL: 'https://47fa927e1297d0de.mokky.dev/orders',

})

export default a; 