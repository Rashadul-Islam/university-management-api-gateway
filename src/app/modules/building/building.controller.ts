import { NextFunction, Request, Response } from 'express';
import sendResponse from '../../../shared/response';
import { BuildingService } from './building.service';

const getAllBuilding = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const result = await BuildingService.getAllBuilding(req);
    sendResponse(res, result);
  } catch (error) {
    next(error);
  }
};

const getSingleBuilding = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const result = await BuildingService.getSingleBuilding(req);
    sendResponse(res, result);
  } catch (error) {
    next(error);
  }
};
const createBuilding = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const result = await BuildingService.createBuilding(req);
    sendResponse(res, result);
  } catch (error) {
    next(error);
  }
};

const updateBuilding = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const result = await BuildingService.updateBuilding(req);
    sendResponse(res, result);
  } catch (error) {
    next(error);
  }
};

const deleteBuilding = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const result = await BuildingService.deleteBuilding(req);
    sendResponse(res, result);
  } catch (error) {
    next(error);
  }
};

export const BuildingController = {
  getAllBuilding,
  getSingleBuilding,
  updateBuilding,
  deleteBuilding,
  createBuilding
};
