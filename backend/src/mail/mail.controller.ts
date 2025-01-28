import { Body, Controller, Post } from '@nestjs/common';
import { MailService } from './mail.service';


@Controller('mail')
export class MailController {

    constructor(private readonly mailService: MailService) { }

    @Post('send')
    async sendMail(
        @Body('to') to: string,
        @Body('subject') subject: string,
        @Body('content') content: string,
    ): Promise<string> {
        await this.mailService.sendMail(to, subject, content);
        return 'メール送信が完了しました！';
    }

}
