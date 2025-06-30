const currentTime = () => new Date().toLocaleString('en-GB', { timeZone: 'America/Sao_Paulo' } );

export const log = {
    error: (valueToLog: string, someObject?: any) => console.log(`\[ERROR\]:\[${currentTime()}\] ` + valueToLog, someObject || ''),
    trace: (valueToLog: string, someObject?: any) => console.log(`\[TRACE\]:\[${currentTime()}\] ` + valueToLog, someObject || ''),
    info:  (valueToLog: string, someObject?: any) => console.log(`\[INFO\]:\[${currentTime()}\] `  + valueToLog, someObject || ''),
}
