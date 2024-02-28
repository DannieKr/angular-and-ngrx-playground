export interface LoginRequestInterface {
    user: {
        email: string | null;
        password: string | null;
    };
}