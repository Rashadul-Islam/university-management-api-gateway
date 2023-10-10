import { Request } from 'express';
import { IGenericResponse } from '../../../interfaces/common';
import { CoreService } from '../../../shared/axios';

const getAllStudentEnrolledCourse = async (req: Request): Promise<IGenericResponse> => {
  const response: IGenericResponse = await CoreService.get('/student-enrolled-courses', {
    params: req.query,
    headers: {
      Authorization: req.headers.authorization
    }
  });

  return response;
};

const getSingleStudentEnrolledCourse = async (req: Request): Promise<IGenericResponse> => {
  const { id } = req.params;
  const response: IGenericResponse = await CoreService.get(`/student-enrolled-courses/${id}`, {
    headers: {
      Authorization: req.headers.authorization
    }
  });

  return response;
};

const createStudentEnrolledCourse = async (req: Request): Promise<IGenericResponse> => {
  const response: IGenericResponse = await CoreService.post(`/student-enrolled-courses`, req.body, {
    headers: {
      Authorization: req.headers.authorization
    }
  });

  return response;
};

const updateStudentEnrolledCourse = async (req: Request): Promise<IGenericResponse> => {
  const { id } = req.params;
  const response: IGenericResponse = await CoreService.patch(
    `/student-enrolled-courses/${id}`,
    req.body,
    {
      headers: {
        Authorization: req.headers.authorization
      }
    }
  );

  return response;
};

const deleteStudentEnrolledCourse = async (req: Request): Promise<IGenericResponse> => {
  const { id } = req.params;
  const response: IGenericResponse = await CoreService.delete(`/student-enrolled-courses/${id}`, {
    headers: {
      Authorization: req.headers.authorization
    }
  });

  return response;
};

export const StudentEnrolledCourseService = {
  getAllStudentEnrolledCourse,
  getSingleStudentEnrolledCourse,
  updateStudentEnrolledCourse,
  deleteStudentEnrolledCourse,
  createStudentEnrolledCourse
};
