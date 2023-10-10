import { NextFunction, Request, Response } from 'express';
import sendResponse from '../../../shared/response';
import { AcademicDepartmentService } from './academicDepartment.service';

const getAllDepartment = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const result = await AcademicDepartmentService.getAllDepartment(req);
    sendResponse(res, result);
  } catch (error) {
    next(error);
  }
};

const createDepartment = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const result = await AcademicDepartmentService.createDepartment(req);
    sendResponse(res, result);
  } catch (error) {
    next(error);
  }
};

const getSingleDepartment = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const result = await AcademicDepartmentService.getSingleDepartment(req);
    sendResponse(res, result);
  } catch (error) {
    next(error);
  }
};

const updateDepartment = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const result = await AcademicDepartmentService.updateDepartment(req);
    sendResponse(res, result);
  } catch (error) {
    next(error);
  }
};

const deleteDepartment = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const result = await AcademicDepartmentService.deleteDepartment(req);
    sendResponse(res, result);
  } catch (error) {
    next(error);
  }
};

export const AcademicDepartmentController = {
  getAllDepartment,
  getSingleDepartment,
  updateDepartment,
  deleteDepartment,
  createDepartment
};
