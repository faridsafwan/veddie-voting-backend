import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { FindOneOptions, Repository } from 'typeorm';
import { Dress } from './entities/dress.entity';

@Injectable()
export class DressesService {
  constructor(
    @InjectRepository(Dress)
    private readonly dressRepository: Repository<Dress>,
  ) {}
  private dresses = [
    {
      id: 1,
      name: 'Dress 1',
      wearer: 'MICHAEL B JORDAN',
      votes: 0,
      imageUrl:
        'https://www.fashionbeans.com/wp-content/uploads/2019/12/bdmotymenmbj2.jpg',
      best: false,
    },
    {
      id: 2,
      name: 'Dress 2',
      wearer: 'DAVID BECKHAM',
      votes: 0,
      imageUrl:
        'https://www.fashionbeans.com/wp-content/uploads/2019/12/bdmotymendavidb.jpg',
      best: false,
    },
    {
      id: 3,
      name: 'Dress 3',
      wearer: 'ZAC EFRON',
      votes: 0,
      imageUrl:
        'https://www.fashionbeans.com/wp-content/uploads/2019/12/bdmotymenzac.jpg',
      best: false,
    },
    {
      id: 4,
      name: 'Dress 4',
      wearer: 'HENRY GOLDING',
      votes: 0,
      imageUrl:
        'https://www.fashionbeans.com/wp-content/uploads/2019/12/bdmotymenhenry.jpg',
      best: false,
    },
    {
      id: 5,
      name: 'Dress 5',
      wearer: 'BRAD PITT',
      votes: 0,
      imageUrl:
        'https://www.fashionbeans.com/wp-content/uploads/2019/12/bdmotybradp.jpg',
      best: false,
    },
  ];

  // create(createDressDto: CreateDressDto) {
  //   return 'This action adds a new dress';
  // }

  async findAll(): Promise<Dress[]> {
    return await this.dressRepository.find();
  }

  async findOne(id): Promise<Dress | undefined> {
    return await this.dressRepository.findOne(id);
  }

  async voteForDress(id): Promise<Dress | null> {
    const dress = await this.dressRepository.findOne(id);

    if (dress) {
      dress.votes += 1;
      await this.dressRepository.save(dress);
      return dress;
    }

    return null;
  }

  // update(id: number, updateDressDto: UpdateDressDto) {
  //   return `This action updates a #${id} dress`;
  // }

  // remove(id: number) {
  //   return `This action removes a #${id} dress`;
  // }
}
