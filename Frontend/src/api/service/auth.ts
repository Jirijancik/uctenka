import HttpService from './httpService';

class AuthService extends HttpService {
    constructor() {
        super('/auth');
    }

    login = (credentials: { username: string; password: string }): Promise<{ access_token: string }> => {
        return this.post('login', credentials);
    };

    register = (userData: { username: string; password: string }): Promise<{ access_token: string }> => {
        return this.post('register', userData);
    };
}

export const authService = new AuthService();
