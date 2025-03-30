import { INestApplication } from '@nestjs/common';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';
import { version } from '../package.json';

export function setupSwagger(app: INestApplication) {
	const options = new DocumentBuilder().setTitle('Plural API').setDescription('Plural API').setVersion(version).addBearerAuth().build();

	const document = SwaggerModule.createDocument(app, options);
	SwaggerModule.setup('docs/swagger', app, document);
}
