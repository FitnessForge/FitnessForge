/* eslint-disable */
import { NestFactory } from '@nestjs/core';
import { AppModule } from '../../../back/src/app/app.module';
import { Logger } from '@nestjs/common';
var __TEARDOWN_MESSAGE__: string;

module.exports = async function () {
  // Start services that that the app needs to run (e.g. database, docker-compose, etc.).
  console.log('Starting services...');

  const app = await NestFactory.create(AppModule);
  app.setGlobalPrefix('api');
  await app.listen(8000);
  Logger.log(`🚀 Application is running on: http://localhost:8000/api`);

  // Hint: Use `globalThis` to pass variables to global teardown.
  globalThis.__TEARDOWN_MESSAGE__ = '\nTearing down...\n';
};
