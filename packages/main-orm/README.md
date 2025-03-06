### Generate migration
`yarn typeorm migration:generate ./src/migrations/FirstInit -d ./src/data-source.ts`

### Run migration
`yarn typeorm migration:run -d ./src/data-source.ts`

### Revert migration
`yarn typeorm migration:revert -d ./src/data-source.ts`