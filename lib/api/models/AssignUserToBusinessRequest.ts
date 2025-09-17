/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
export type AssignUserToBusinessRequest = {
    /**
     * User ID to assign
     */
    userId: number;
    /**
     * Business ID to assign user to
     */
    businessId: number;
    /**
     * Role to assign to the user
     */
    role: AssignUserToBusinessRequest.role;
};
export namespace AssignUserToBusinessRequest {
    /**
     * Role to assign to the user
     */
    export enum role {
        STUDENT = 'STUDENT',
        TEACHER = 'TEACHER',
        ADMIN = 'ADMIN',
        SUPERADMIN = 'SUPERADMIN',
    }
}

