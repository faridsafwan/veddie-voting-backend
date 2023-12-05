import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
} from '@nestjs/common';
import { WinnersService } from './winners.service';
import { CreateWinnerDto } from './dto/create-winner.dto';
import { UpdateWinnerDto } from './dto/update-winner.dto';
import { Winner } from './entities/winner.entity';

@Controller('winners')
export class WinnersController {
  constructor(private readonly winnersService: WinnersService) {}

  @Get()
  getAllWinners() {
    return this.winnersService.getAllWinners();
  }

  @Post('/addNewWinners')
  addNewWinners(@Body() winners: Winner[]) {
    return this.winnersService.addNewWinners(winners);
  }

  // @Post()
  // create(@Body() createWinnerDto: CreateWinnerDto) {
  //   return this.winnersService.create(createWinnerDto);
  // }

  // @Get()
  // findAll() {
  //   return this.winnersService.findAll();
  // }

  // @Get(':id')
  // findOne(@Param('id') id: string) {
  //   return this.winnersService.findOne(+id);
  // }

  // @Patch(':id')
  // update(@Param('id') id: string, @Body() updateWinnerDto: UpdateWinnerDto) {
  //   return this.winnersService.update(+id, updateWinnerDto);
  // }

  // @Delete(':id')
  // remove(@Param('id') id: string) {
  //   return this.winnersService.remove(+id);
  // }
}
