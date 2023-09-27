console.log('coucou');
let i: number;

type User = {
    firstname: string;
    lastname: string;
    age: number;
    isMajor: boolean
}


type Convert<T> = {
   [key in keyof T]: T[key]
}

type A = Convert<User>