import { JobsApi } from './jobs';
import { UsersApi } from './users';
import Axios from  'axios-observable';

export class Api {
    jobs: JobsApi | null;
    users: UsersApi | null;

    constructor() {
        // TODO additional HTTP client configuration may be needed here
        const config = {};
        const client = Axios.create(config);

        this.jobs = new JobsApi(client);
        this.users = new UsersApi(client);
    }
}