import express from 'express';
import { AcademicSemesterRoutes } from '../modules/academicSemester/academicSemester.route';
import { AcademicDepartmentRoutes } from '../modules/academicDepartment/academicDepartment.route';
import { AcademicFacultyRoutes } from '../modules/academicFaculty/academicFaculty.route';
import { BuildingRoutes } from '../modules/building/building.route';
import { RoomRoutes } from '../modules/room/room.route';
import { CourseRoutes } from '../modules/course/course.route';
import { SemesterRegistrationRoutes } from '../modules/semesterRegistration/semesterRegistration.route';
import { OfferedCourseRoutes } from '../modules/offeredCourse/offeredCourse.route';
import { OfferedCourseSectionRoutes } from '../modules/offeredCourseSection/offeredCourseSection.route';
import { OfferedCourseClassScheduleRoutes } from '../modules/offeredCourseClassSchedule/offeredCourseClassSchedule.route';
import { StudentEnrolledCourseRoutes } from '../modules/studentEnrolledCourse/studentEnrolledCourse.route';
import { StudentEnrolledCourseMarkRoutes } from '../modules/studentEnrolledCourseMark/studentEnrolledCourseMark.route';
import { StudentSemesterPaymentRoutes } from '../modules/studentSemesterPayment/studentSemesterPayment.route';

const router = express.Router();

const moduleRoutes = [
  {
    path: '/academic-faculties',
    routes: AcademicFacultyRoutes
  },
  {
    path: '/academic-semesters',
    routes: AcademicSemesterRoutes
  },
  {
    path: '/academic-departments',
    routes: AcademicDepartmentRoutes
  },
  {
    path: '/buildings',
    routes: BuildingRoutes
  },
  {
    path: '/rooms',
    routes: RoomRoutes
  },
  {
    path: '/courses',
    routes: CourseRoutes
  },
  {
    path: '/semester-registrations',
    routes: SemesterRegistrationRoutes
  },
  {
    path: '/offered-courses',
    routes: OfferedCourseRoutes
  },
  {
    path: '/offered-course-sections',
    routes: OfferedCourseSectionRoutes
  },
  {
    path: '/offered-course-class-schedules',
    routes: OfferedCourseClassScheduleRoutes
  },
  {
    path: '/student-enrolled-courses',
    routes: StudentEnrolledCourseRoutes
  },
  {
    path: '/student-enrolled-course-marks',
    routes: StudentEnrolledCourseMarkRoutes
  },
  {
    path: '/student-semester-payments',
    routes: StudentSemesterPaymentRoutes
  } 
];

moduleRoutes.forEach((route) => {
  router.use(route.path, route.routes);
});

export default router;
