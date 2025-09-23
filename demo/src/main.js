import {FileBasedRouting} from 'ziko'
console.log(import.meta.glob("./pages/**/*.js"))

FileBasedRouting(import.meta.glob("./pages/**/*.js"))