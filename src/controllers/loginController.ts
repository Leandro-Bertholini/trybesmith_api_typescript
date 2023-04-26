// import { Request, Response } from 'express';
// import loginService from '../services/loginService';
// import { Login } from '../types/Login';

// async function userLogin(req: Request, res: Response):Promise<void> {
//   const { username, password } = req.body as Login;
//   const { type, data } = await loginService.userLogin(username, password);

//   res.status(type).json(data);
// }

// export default {
//   userLogin,
// };