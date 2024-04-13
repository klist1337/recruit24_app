import { Controller, Get } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';

@Controller('position')
export class PositionController {
    constructor (private prisma: PrismaService) {}

    @Get('all')
    async getAll() {
        const allData = await this.prisma.companydata.findMany();
        const sortedData = allData.sort((a , b) => {
            const dateA = this.parseData(a.posting_date);
            const dateB = this.parseData(b.posting_date);
            return  dateB.getTime() - dateA.getTime();
        });
        return sortedData;
    }

    parseData(dateString: string): Date {
        const parts = dateString.split(' ');
        const day = parseInt(parts[1]);
        const month = this.getMonthNumber(parts[2]);
        const year = parseInt(parts[3]);
        return new Date(year, month, day);
    }

    getMonthNumber(monthName:string): number {
        const months = ['janvier', 'fevrier', 'mars' , 'avril', 'mai', 'juin',
                        'juillet', 'août', 'septembre', 'octobre', 'novembre', 'decembre'];
        return months.indexOf(monthName); 
    }
}
