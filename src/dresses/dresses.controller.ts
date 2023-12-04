import { Controller, Get, Post, Param } from '@nestjs/common';
import { DressesService } from './dresses.service';
import { VoteGateway } from './vote.gateway';

@Controller('dresses')
export class DressesController {
  constructor(
    private readonly dressesService: DressesService,
    private readonly voteGateway: VoteGateway,
  ) {}

  // @Post()
  // create(@Body() createDressDto: CreateDressDto) {
  //   return this.dressesService.create(createDressDto);
  // }

  @Get()
  findAll() {
    return this.dressesService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.dressesService.findOne(+id);
  }

  // @Post(':id/vote')
  // voteForDresss(@Param('id') id: string) {
  //   return this.dressesService.voteForDress(Number(id));
  // }

  @Post(':id/vote')
  async voteForDress(@Param('id') id: string) {
    console.log(id, 'vote');

    // Your voting logic here
    this.dressesService.voteForDress(Number(id));

    // Send real-time update
    this.voteGateway.updateVotes(this.findAll());

    return { success: true };
  }
}
