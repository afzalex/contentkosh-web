/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
export type CreateExamRequest = {
    /**
     * Name of the exam (required)
     */
    name: string;
    /**
     * Description of the exam
     */
    description?: string;
    /**
     * Whether the exam is active
     */
    isActive?: boolean;
    /**
     * ID of the business this exam belongs to (required)
     */
    businessId: number;
};

