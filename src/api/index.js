import Server from './Server.js' 

class Api { 
    constructor() { 
        Object.assign(this, ...Array.from(arguments)) 
    } 
} 
export default new Api(Server)