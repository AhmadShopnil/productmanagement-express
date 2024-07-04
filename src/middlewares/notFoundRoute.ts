import { Request, Response } from 'express';

const notFoundRoute = (req: Request, res: Response) => {
  return res.status(404).json({
    success: false,
    message: ' Your api is incorrect  !!',
    error: '',
  });
};

export default notFoundRoute;
