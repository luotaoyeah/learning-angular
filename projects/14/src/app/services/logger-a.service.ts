import { Injectable } from '@angular/core';
import { ILoggerService } from './i-logger.service';

@Injectable()
export class LoggerAService implements ILoggerService {
    public constructor() {}

    public prefix: string = 'LoggerAService';

    public log(message: string): void {
        console.log(`${this.prefix}: ${message}`);
    }
}
