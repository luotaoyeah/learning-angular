import { Injectable } from '@angular/core';
import { ILoggerService } from './i-logger.service';

@Injectable()
export class LoggerService implements ILoggerService {
    public constructor() {}

    public prefix: string = 'LoggerService';

    public log(message: string): void {
        console.log(`${this.prefix}: ${message}`);
    }
}
