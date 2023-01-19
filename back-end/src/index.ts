import express, { Express, Request, Response } from 'express';
import { BankAccount } from 'model/bank-account.model';
import dotenv from 'dotenv';
dotenv.config();

const port = process.env.PORT;
const app: Express = express();

const accounts: BankAccount[] = [
  {
    id: '565210d8-fb1b-4105-bae9-0d47b8c75f30',
    firstName: 'Ippon',
    lastName: 'Technologies',
    email: 'ippon@ippon.fr',
    money: 10000,
  },
];

app.get('/accounts', (req: Request, res: Response) => {
  /*
    ----------------------------------------------------------------------------------------

      Retrieve all accounts

    ----------------------------------------------------------------------------------------
   */
  res.status(200).send({});
});

app.post('/account', (req: Request, res: Response) => {
  // Generate random ID
  const id = '123';

  /*
    ----------------------------------------------------------------------------------------

      Account need to have firstName, lastName, email and money
      At the time of creation, the money on the account cannot be negative unless it is an administrator
      Errors should be visible for the client
      The client should get back the information he entered

    ----------------------------------------------------------------------------------------
   */

  res.status(201).send({ id });
});

/*
  --------------------------------------------

      Create a method to withdraw money

  --------------------------------------------
 */

app.get('/', (req: Request, res: Response) => {
  res.setHeader('Cache-Control', 'no-cache');
  res.status(200).send('Ippon Typescript Server');
});

app.listen(port, () => {
  console.log(`Server is running at http://localhost:${port}`);
});

module.exports = app;
