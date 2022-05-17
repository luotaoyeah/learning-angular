interface ILoggerService {
    prefix: string;
    log(message: string): void;
}

export { ILoggerService };
