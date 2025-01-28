import { Injectable } from '@nestjs/common';
import { MailerService } from '@nestjs-modules/mailer';
import { ConfigService } from '@nestjs/config';


@Injectable()
export class MailService {

    constructor(private readonly mailerService: MailerService,
    private readonly configService: ConfigService,
    ) {}

    async sendMail(from: string, subject: string, content: string): Promise<void> {
        try {
          await this.mailerService.sendMail({
            to:this.configService.get<string>('SUPPORT_EMAIL'),
            subject:`お問い合わせ:${subject}`,
            template: './email', // ./templates/email.hbs を指す
            context: { // テンプレートに渡すデータ
              subject,
              content,
              from,
            },
          });
        } catch (error) {
          console.error('メール送信エラー:', error);
        }
      }

}
