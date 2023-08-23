import { Controller, Get, Param, Post, Body } from '@nestjs/common';

@Controller('records')
export class RecordsController {
    @Get()
  getAllRecords() {
    // Fetch and return all records
  }

  @Get(':id')
  getRecordById(@Param('id') id: string) {
    // Fetch and return a record by id
  }

  @Post()
  addOrUpdateRecord(@Body() record: any) {
    // Add or update a record in the mock database
  }
}
