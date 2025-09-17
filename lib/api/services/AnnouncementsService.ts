/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { Announcement } from '../models/Announcement';
import type { ApiResponse } from '../models/ApiResponse';
import type { CreateAnnouncementRequest } from '../models/CreateAnnouncementRequest';
import type { UpdateAnnouncementRequest } from '../models/UpdateAnnouncementRequest';
import type { CancelablePromise } from '../core/CancelablePromise';
import { OpenAPI } from '../core/OpenAPI';
import { request as __request } from '../core/request';
export class AnnouncementsService {
    /**
     * Create a new announcement
     * @param requestBody
     * @returns any Announcement created successfully
     * @throws ApiError
     */
    public static postApiAnnouncements(
        requestBody: CreateAnnouncementRequest,
    ): CancelablePromise<(ApiResponse & {
        data?: Announcement;
    })> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/api/announcements',
            body: requestBody,
            mediaType: 'application/json',
            errors: {
                400: `Invalid input data`,
                404: `Business not found`,
                500: `Internal server error`,
            },
        });
    }
    /**
     * Get announcement by ID
     * @param id Announcement ID
     * @returns any Announcement fetched successfully
     * @throws ApiError
     */
    public static getApiAnnouncements(
        id: number,
    ): CancelablePromise<(ApiResponse & {
        data?: Announcement;
    })> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/api/announcements/{id}',
            path: {
                'id': id,
            },
            errors: {
                400: `Invalid announcement ID`,
                404: `Announcement not found`,
                500: `Internal server error`,
            },
        });
    }
    /**
     * Update announcement
     * @param id Announcement ID
     * @param requestBody
     * @returns any Announcement updated successfully
     * @throws ApiError
     */
    public static putApiAnnouncements(
        id: number,
        requestBody: UpdateAnnouncementRequest,
    ): CancelablePromise<(ApiResponse & {
        data?: Announcement;
    })> {
        return __request(OpenAPI, {
            method: 'PUT',
            url: '/api/announcements/{id}',
            path: {
                'id': id,
            },
            body: requestBody,
            mediaType: 'application/json',
            errors: {
                400: `Invalid input data`,
                404: `Announcement not found`,
                500: `Internal server error`,
            },
        });
    }
    /**
     * Delete announcement
     * @param id Announcement ID
     * @returns any Announcement deleted successfully
     * @throws ApiError
     */
    public static deleteApiAnnouncements(
        id: number,
    ): CancelablePromise<(ApiResponse & {
        data?: any;
    })> {
        return __request(OpenAPI, {
            method: 'DELETE',
            url: '/api/announcements/{id}',
            path: {
                'id': id,
            },
            errors: {
                400: `Invalid announcement ID`,
                500: `Internal server error`,
            },
        });
    }
    /**
     * Get all announcements for a business
     * @param businessId Business ID
     * @param active Filter by active status (true for active only, false for all)
     * @returns any Announcements fetched successfully
     * @throws ApiError
     */
    public static getApiAnnouncementsBusiness(
        businessId: number,
        active?: boolean,
    ): CancelablePromise<(ApiResponse & {
        data?: Array<Announcement>;
    })> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/api/announcements/business/{businessId}',
            path: {
                'businessId': businessId,
            },
            query: {
                'active': active,
            },
            errors: {
                400: `Invalid business ID`,
                500: `Internal server error`,
            },
        });
    }
    /**
     * Get announcements for a business filtered by role
     * @param businessId Business ID
     * @param role Role to filter announcements by
     * @returns any Announcements fetched successfully
     * @throws ApiError
     */
    public static getApiAnnouncementsBusinessRole(
        businessId: number,
        role: 'ADMIN' | 'SUPERADMIN' | 'TEACHER' | 'STUDENT',
    ): CancelablePromise<(ApiResponse & {
        data?: Array<Announcement>;
    })> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/api/announcements/business/{businessId}/role',
            path: {
                'businessId': businessId,
            },
            query: {
                'role': role,
            },
            errors: {
                400: `Invalid business ID or role`,
                500: `Internal server error`,
            },
        });
    }
    /**
     * Get announcements for a business within a date range
     * @param businessId Business ID
     * @param startDate Start date for the range
     * @param endDate End date for the range
     * @returns any Announcements fetched successfully
     * @throws ApiError
     */
    public static getApiAnnouncementsBusinessDateRange(
        businessId: number,
        startDate: string,
        endDate: string,
    ): CancelablePromise<(ApiResponse & {
        data?: Array<Announcement>;
    })> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/api/announcements/business/{businessId}/date-range',
            path: {
                'businessId': businessId,
            },
            query: {
                'startDate': startDate,
                'endDate': endDate,
            },
            errors: {
                400: `Invalid business ID or date range`,
                500: `Internal server error`,
            },
        });
    }
}
