import 'express';

declare module 'express' {
  interface Request {
    user?: {
      userId: string;
      username?: string;
      // You can add more properties here if needed
    };
  }
}
