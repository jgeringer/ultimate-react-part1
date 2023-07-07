import create from "./http-service";

// use an interface to define the shape of our object
export interface User {
    id: number;
    name: string;
}

export default create('/users')