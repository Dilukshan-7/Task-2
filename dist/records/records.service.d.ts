export declare class RecordsService {
    private records;
    getAllRecords(): {
        id: number;
        name: string;
    }[];
    getRecordById(id: number): {
        id: number;
        name: string;
    };
    addOrUpdateRecord(record: any): any;
}
