import { Body, Controller, Get, Param, Post } from '@nestjs/common';
import { time } from 'console';
import { PrismaService } from 'src/prisma/prisma.service';


@Controller('position')
export class PositionController {
    constructor (private prisma: PrismaService) {}

    @Get('all')
    async getAll() {
        const allData = await this.prisma.companydata.findMany(
            {
                orderBy: {
                    mytimestamp:'desc',
                }
            }
        );
        const sortedData = allData.sort((a , b) => {
            const dateA = this.parseData(a.posting_date);
            const dateB = this.parseData(b.posting_date);
            return  dateB.getTime() - dateA.getTime();
        });
        return sortedData;
    }

    @Get(':searchValue') 
    async getSearchValue(@Param('searchValue') searchValue: string){
        const value = await this.prisma.companydata.findMany({
            where: {
                job_title: searchValue, 
            },
        });
        const sortedData = value.sort((a , b) => {
            const dateA = this.parseData(a.posting_date);
            const dateB = this.parseData(b.posting_date);
            return  dateB.getTime() - dateA.getTime();
        });
        return sortedData;
    }
    @Post('submit')
    async createpost(@Body() formData:any) {
        try {
            await this.prisma.companydata.create({
                data: {
                    employer: formData.companyName,
                    job_title:formData.jobTitle,
                    country_and_state:formData.country_State,
                    year_wages: formData.year_wages,
                    years_require_experience:formData.years_require_experience, 
                    job_description:formData.job_description,
                    job_location:formData.job_location,
                    company_description:formData.company_description,
                    responsibilities:formData.responsabilities,
                    requirements_for_role:formData.requirements_for_role,
                    start_date: this.CreateDateFormat(formData.start_date),
                    posting_date: this.formatCurrentTime(),
                },
            });
        } catch(error) {
            throw new Error("failed to create new job" + error.message);
        }
    }

    parseData(dateString: string): Date {
        const parts = dateString?.split(' ');
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
    
    CreateDateFormat(dateStr:string) {
        const [year, month, day] = dateStr.split('-');
        const months = ['janvier', 'février', 'mars', 'avril', 'mai', 'juin', 'juillet', 'août', 'septembre', 'octobre', 'novembre', 'décembre'];
        const weekdays = ['dimanche', 'lundi', 'mardi', 'mercredi', 'jeudi', 'vendredi', 'samedi'];
        const date = new Date(`${year}-${month}-${day}`);
        const dayOfWeek = weekdays[date.getDay()];
        const formattedDate = `${dayOfWeek} ${parseInt(day)} ${months[parseInt(month) - 1]} ${year}`;
        return formattedDate;
    }

     formatCurrentTime(): string {
        const currentDate: Date = new Date();
        
        const frenchDays: string[] = [
           "dimanche", "lundi", "mardi", "mercredi", "jeudi", "vendredi", "samedi",
        ];
    
        
        const frenchMonths: string[] = [
            "janvier", "février", "mars", "avril", "mai", "juin",
            "juillet", "août", "septembre", "octobre", "novembre", "décembre"
        ];
    
        // Get the day of the week, day of the month, month, and year
        const dayOfWeek: string = frenchDays[currentDate.getDay()];
        const dayOfMonth: number = currentDate.getDate();
        const monthName: string = frenchMonths[currentDate.getMonth()];
        const year: number = currentDate.getFullYear();
    
        // Construct the formatted date string
        const formattedDate: string = `${dayOfWeek} ${dayOfMonth} ${monthName} ${year}`;
    
        return formattedDate;
    }
    
}
