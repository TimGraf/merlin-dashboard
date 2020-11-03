import { JobsApi } from './jobs';
import { UsersApi } from './users';
import { AuthApi } from './auth';
import axios, { AxiosInstance } from 'axios';

export class Api {
    jobs: JobsApi | null;
    users: UsersApi | null;
    auth: AuthApi | null;

    constructor() {
        // TODO additional HTTP client configuration may be needed here
        const config = {};
        const client = axios.create(config);

        this.auth = new AuthApi(client);
        this.jobs = new JobsApi(client);
        this.users = new UsersApi(client);
    }
}