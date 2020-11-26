import './util/module-alias';
import { Server } from '@overnightjs/core';
import bodyParser from 'body-parser';
import { ForecastController } from './controllers/forecast';
import { Application } from 'express';

// Classe com construtor
export class SetupServer extends Server {
  constructor(private port = 8000) {
    super();
  };

  // separação da inicialização da aplicação
  // permitindo que quem inicie o server tenha controle
  // total de como será inicializado
  // primeiro constroi o servidor, depois inicializa

  public init(): void {
    this.setupExpress();
    this.setupControllers();
  };

  private setupExpress(): void {
    this.app.use(bodyParser.json());
  };

  private setupControllers(): void {
    const forecastController = new ForecastController();
    this.addControllers([forecastController]);
  }

  public getApp(): Application {
    return this.app;
  }
};


