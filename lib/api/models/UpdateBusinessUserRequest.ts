/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
export type UpdateBusinessUserRequest = {
    /**
     * New role for the user
     */
    role?: UpdateBusinessUserRequest.role;
    /**
     * Whether the business user should be active
     */
    isActive?: boolean;
};
export namespace UpdateBusinessUserRequest {
    /**
     * New role for the user
     */
    export enum role {
        STUDENT = 'STUDENT',
        TEACHER = 'TEACHER',
        ADMIN = 'ADMIN',
        SUPERADMIN = 'SUPERADMIN',
    }
}

