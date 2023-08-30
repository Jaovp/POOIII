export default class Token{

    private _token = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiIxMjM0NTY3ODkwIiwidG9rZW4iOiJlbnZpYW5kbyBlIHJlY2ViZW5kbyBwYWdhbWVudG9zIn0.eCOU-Um1wplZ11-G6aKZhH9FJsIlSECXR13lEJqCT3E";

    public get token() {
        return this._token;
    }

    public set token(value) {
        this._token = value;
    }

}