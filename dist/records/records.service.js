"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.RecordsService = void 0;
const common_1 = require("@nestjs/common");
let RecordsService = exports.RecordsService = class RecordsService {
    constructor() {
        this.records = [
            { id: 1, name: 'Record 1' },
            { id: 2, name: 'Record 2' },
        ];
    }
    getAllRecords() {
        return this.records;
    }
    getRecordById(id) {
        return this.records.find(record => record.id === id);
    }
    addOrUpdateRecord(record) {
        const existingRecordIndex = this.records.findIndex(r => r.id === record.id);
        if (existingRecordIndex !== -1) {
            this.records[existingRecordIndex] = record;
        }
        else {
            this.records.push(record);
        }
        return record;
    }
};
exports.RecordsService = RecordsService = __decorate([
    (0, common_1.Injectable)()
], RecordsService);
//# sourceMappingURL=records.service.js.map