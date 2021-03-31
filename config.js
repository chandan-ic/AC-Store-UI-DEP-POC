const dev = process.env.NODE_ENV !== 'production'
export const server = dev ? 'http://dev.autocomm.theinfotiger.com' : 'https://autocomm.com'

//http://localhost:3000

//http://dev.autocomm.theinfotiger.com


export const localServer = dev ? 'http://localhost:3000' : 'https://autocomm.com'