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
    // Your voting logic here
    const dress = await this.dressesService.voteForDress(Number(id));

    // Send real-time update
    if (dress) {
      this.voteGateway.updateVotes(await this.dressesService.findAll());
    }

    return { success: true };
  }
}
