import { Injectable } from '@nestjs/common';

@Injectable()
export class RecordsService {
  private records = [
    { id: 1, name: 'Record 1' },
    { id: 2, name: 'Record 2' },
  ];

  getAllRecords() {
    return this.records;
  }

  getRecordById(id: number) {
    return this.records.find(record => record.id === id);
  }

  addOrUpdateRecord(record: any) {
    const existingRecordIndex = this.records.findIndex(r => r.id === record.id);

    if (existingRecordIndex !== -1) {
      this.records[existingRecordIndex] = record; // Update existing record
    } else {
      this.records.push(record); // Add new record
    }

    return record;
  }
}
