import { NextFunction, Request, Response } from 'express';
import sendResponse from '../../../shared/response';
import { OfferedCourseClassScheduleService } from './offeredCourseClassSchedule.service';

const getAllOfferedCourseClassSchedule = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const result = await OfferedCourseClassScheduleService.getAllOfferedCourseClassSchedule(req);
    sendResponse(res, result);
  } catch (error) {
    next(error);
  }
};

const getSingleOfferedCourseClassSchedule = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const result = await OfferedCourseClassScheduleService.getSingleOfferedCourseClassSchedule(req);
    sendResponse(res, result);
  } catch (error) {
    next(error);
  }
};

const createOfferedCourseClassSchedule = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const result = await OfferedCourseClassScheduleService.createOfferedCourseClassSchedule(req);
    sendResponse(res, result);
  } catch (error) {
    next(error);
  }
};

const updateOfferedCourseClassSchedule = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const result = await OfferedCourseClassScheduleService.updateOfferedCourseClassSchedule(req);
    sendResponse(res, result);
  } catch (error) {
    next(error);
  }
};

const deleteOfferedCourseClassSchedule = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const result = await OfferedCourseClassScheduleService.deleteOfferedCourseClassSchedule(req);
    sendResponse(res, result);
  } catch (error) {
    next(error);
  }
};

export const OfferedCourseClassScheduleController = {
  getAllOfferedCourseClassSchedule,
  getSingleOfferedCourseClassSchedule,
  updateOfferedCourseClassSchedule,
  deleteOfferedCourseClassSchedule,
  createOfferedCourseClassSchedule
};
