import { Injectable } from '@nestjs/common';
import { CreateWinnerDto } from './dto/create-winner.dto';
import { UpdateWinnerDto } from './dto/update-winner.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Winner } from './entities/winner.entity';

@Injectable()
export class WinnersService {
  constructor(
    @InjectRepository(Winner)
    private readonly winnerRepository: Repository<Winner>,
  ) {}

  async getAllWinners(): Promise<Winner[]> {
    return await this.winnerRepository.find({
      order: {
        id: 'ASC', // or 'DESC' for descending order
      },
    });
  }

  async addNewWinners(winners: Winner[]): Promise<Winner[]> {
    return await this.winnerRepository.save(winners);
  }

  // create(createWinnerDto: CreateWinnerDto) {
  //   return 'This action adds a new winner';
  // }

  findAll() {
    return `This action returns all winners`;
  }

  findOne(id: number) {
    return `This action returns a #${id} winner`;
  }

  // update(id: number, updateWinnerDto: UpdateWinnerDto) {
  //   return `This action updates a #${id} winner`;
  // }

  remove(id: number) {
    return `This action removes a #${id} winner`;
  }
}
