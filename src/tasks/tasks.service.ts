import { Injectable } from '@nestjs/common';
import { PrismaService } from '../prisma.service';

@Injectable()
export class TasksService {

    constructor(private prisma: PrismaService){}

    async getTasks(){
        return this.prisma.task.findMany();
    }
    
}
