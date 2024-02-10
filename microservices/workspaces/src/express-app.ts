import express, { Application } from "express";

export default async (app: Application) => {
  app.use(express.json());
  app.use(express.urlencoded({ extended: true }));

  app.use(express.json());

  // Routes

  // Error Handlers

  return app;
};
