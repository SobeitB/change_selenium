import {NestFactory} from '@nestjs/core'
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';

import {AppModule} from './app.module'

async function start() {
    const PORT = process.env.PORT || 3000;

    const app = await NestFactory.create(AppModule);

    const config = new DocumentBuilder()
        .setTitle('Урок по изучению бекенда')
        .setDescription('Документация рест апи')
        .setVersion('1.0.0')
        .build();
    const document = SwaggerModule.createDocument(app, config);
    SwaggerModule.setup('/api/docs', app, document)

    await app.listen(PORT, () => console.log(`server started, port = ${PORT}`));
}

start();