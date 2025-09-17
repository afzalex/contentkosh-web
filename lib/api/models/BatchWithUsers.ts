/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
export type BatchWithUsers = {
    /**
     * Batch ID
     */
    id?: number;
    /**
     * Unique code name for the batch
     */
    codeName?: string;
    /**
     * Display name for the batch
     */
    displayName?: string;
    /**
     * Start date of the batch
     */
    startDate?: string;
    /**
     * End date of the batch
     */
    endDate?: string;
    /**
     * Whether the batch is active
     */
    isActive?: boolean;
    /**
     * ID of the business this batch belongs to
     */
    businessId?: number;
    /**
     * Batch creation timestamp
     */
    createdAt?: string;
    /**
     * Batch last update timestamp
     */
    updatedAt?: string;
    business?: {
        /**
         * Business ID
         */
        id?: number;
        /**
         * Business institute name
         */
        instituteName?: string;
    };
    batchUsers?: Array<{
        /**
         * Batch User ID
         */
        id?: number;
        /**
         * Whether the batch user is active
         */
        isActive?: boolean;
        /**
         * Batch user creation timestamp
         */
        createdAt?: string;
        user?: {
            /**
             * User ID
             */
            id?: number;
            /**
             * User email
             */
            email?: string;
            /**
             * User name
             */
            name?: string;
        };
    }>;
};

