import { Injectable } from '@nestjs/common';

@Injectable()
export class DressesService {
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

  findAll() {
    return this.dresses;
  }

  findOne(id: number) {
    return this.dresses.find((dress) => dress.id === id);
  }

  voteForDress(id: number) {
    const dress = this.dresses.find((dress) => dress.id === id);
    if (dress) {
      dress.votes += 1;
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
