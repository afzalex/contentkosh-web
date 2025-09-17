/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
export type Batch = {
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
};

