# create-exp-ts-orm

This package allows you to easily clone a template of an Express app with TypeScript and TypeORM example.

## Installation

To use this package, simply run the following command:

```bash
npx create-exp-ts-orm
```

This will download all the necessary files directly into the root folder.

If you want to download everything into a new folder with a specific name, you can run the following command:

```bash
npx create-exp-ts-orm somename
```

Replace `somename` with the desired folder name.

## Usage

Once the files are downloaded, you may need to change database connection options like `host`, `port`, `username`, `password` and `database`, then you can start working with the Express app by following these steps:

1. npm run build
2. npm run start
3. npm run dev

You also need to create a `.env` file in your root directory which simply have `PORT` variable only

## License

This project is licensed under the [ISC License](https://opensource.org/licenses/ISC).