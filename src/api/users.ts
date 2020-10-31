import { Axios } from  'axios-observable';
import { Observable, from } from 'rxjs';

export interface User {
    avatar: string;
    name: string;
    email: string;
}

export interface UserResponse {
    users: User[];
    total_count: number;
}

export class UsersApi {
    client: Axios | null;
    apiRootUrl: string = "https://reqres.in";

    constructor(client: Axios) {
        this.client = client;
    }

    getUsers(page: number, perPage: number) {
        return this.client.get(`${this.apiRootUrl}/api/users?page=${page}&per_page${perPage}`);
    }
}