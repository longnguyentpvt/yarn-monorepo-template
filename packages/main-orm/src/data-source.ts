import "reflect-metadata";
import { DataSource, DataSourceOptions } from "typeorm";

import { configuration } from "@app/data/configuration";

const {
  dbHost, dbPort, dbName, dbUsn, dbPassword
} = configuration;

const options: DataSourceOptions = {
  type: "mysql",
  host: dbHost,
  port: dbPort,
  username: dbUsn,
  password: dbPassword,
  database: dbName,
  synchronize: false,
  logging: false,
  entities: [`${ __dirname }/entity/**/*.{ts,js}`],
  migrations: ["src/migrations/**/*.ts"],
  subscribers: [],
  connectTimeout: 60000
};

console.info("Options", options);

export const AppDataSource = new DataSource(options);
