import { NextFunction, Request, Response } from 'express';
import sendResponse from '../../../shared/response';
import { RoomService } from './course.service';

const getAllCourse = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const result = await RoomService.getAllCourse(req);
    sendResponse(res, result);
  } catch (error) {
    next(error);
  }
};

const getSingleCourse = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const result = await RoomService.getSingleCourse(req);
    sendResponse(res, result);
  } catch (error) {
    next(error);
  }
};
const createCourse = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const result = await RoomService.createCourse(req);
    sendResponse(res, result);
  } catch (error) {
    next(error);
  }
};

const updateCourse = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const result = await RoomService.updateCourse(req);
    sendResponse(res, result);
  } catch (error) {
    next(error);
  }
};

const deleteCourse = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const result = await RoomService.deleteCourse(req);
    sendResponse(res, result);
  } catch (error) {
    next(error);
  }
};

export const CourseController = {
  getAllCourse,
  getSingleCourse,
  updateCourse,
  deleteCourse,
  createCourse
};
