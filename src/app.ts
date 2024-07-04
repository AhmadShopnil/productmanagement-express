import express, { Application, Request, Response } from "express";
import cors from "cors";

const app: Application = express();

app.use(express.json());
app.use(cors());

// app.use('/api/users', );
// app.use('/api/users/orders', OrderRoutes);

app.get("/", (req: Request, res: Response) => {
  res.status(200).json({
    success: true,
    message: "Product management server running successfully",
  });
});

export default app;
