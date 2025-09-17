/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { Course } from './Course';
export type ExamWithCourses = {
    /**
     * Exam ID
     */
    id?: number;
    /**
     * Name of the exam
     */
    name?: string;
    /**
     * Description of the exam
     */
    description?: string;
    /**
     * Whether the exam is active
     */
    isActive?: boolean;
    /**
     * ID of the business this exam belongs to
     */
    businessId?: number;
    /**
     * Exam creation timestamp
     */
    createdAt?: string;
    /**
     * Exam last update timestamp
     */
    updatedAt?: string;
    /**
     * List of active courses under this exam
     */
    courses?: Array<Course>;
};

