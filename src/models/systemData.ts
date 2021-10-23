export interface Error {
    Date: string;
    Value: number;
}

export interface Warning {
    Date: string;
    Value: number;
}

export interface Operation {
    Date: string;
    Value: number;
}

export type DataViewChart = Operation | Warning | Error

export interface SystemData {
    Name: string;
    Url: string;
    AvgResponseTime: number;
    AvgResponseTimeWarningLimit: number;
    AvgResponseTimeAlertLimit: number;
    LastSync: string;
    LastSyncStr: string;
    DailyErrorCount: number;
    LastError: string;
    LastErrorStr: string;
    Errors: Error[];
    Warnings: Warning[];
    Operations: Operation[];
}