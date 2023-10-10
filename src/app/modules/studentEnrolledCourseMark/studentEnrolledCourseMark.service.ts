import { Request } from 'express';
import { IGenericResponse } from '../../../interfaces/common';
import { CoreService } from '../../../shared/axios';

const getAllCourseMark = async (req: Request): Promise<IGenericResponse> => {
  const response: IGenericResponse = await CoreService.get('/student-enrolled-course-marks', {
    params: req.query,
    headers: {
      Authorization: req.headers.authorization
    }
  });

  return response;
};

const getStudentMarks = async (req: Request): Promise<IGenericResponse> => {
  const response: IGenericResponse = await CoreService.get(
    '/student-enrolled-course-marks/my-marks',
    {
      params: req.query,
      headers: {
        Authorization: req.headers.authorization
      }
    }
  );

  return response;
};

const updateCourseMarks = async (req: Request): Promise<IGenericResponse> => {
  const response: IGenericResponse = await CoreService.post(
    `/student-enrolled-course-marks/update-marks`,
    req.body,
    {
      headers: {
        Authorization: req.headers.authorization
      }
    }
  );

  return response;
};

const updateCourseFinalMarks = async (req: Request): Promise<IGenericResponse> => {
  const response: IGenericResponse = await CoreService.post(
    `/student-enrolled-course-marks/update-final-marks`,
    req.body,
    {
      headers: {
        Authorization: req.headers.authorization
      }
    }
  );
  
  return response;
};

export const StudentEnrolledCourseMarkService = {
  getAllCourseMark,
  getStudentMarks,
  updateCourseFinalMarks,
  updateCourseMarks
};
