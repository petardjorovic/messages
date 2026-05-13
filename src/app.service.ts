import { Injectable } from '@nestjs/common';
import { Repository } from 'typeorm';
import { Administrator } from './entities/Administrator';
import { InjectRepository } from '@nestjs/typeorm';

@Injectable()
export class AppService {
  constructor(
    @InjectRepository(Administrator)
    private administratorRepository: Repository<Administrator>,
  ) {}

  getAll(): Promise<Administrator[]> {
    return this.administratorRepository.find();
  }
}
