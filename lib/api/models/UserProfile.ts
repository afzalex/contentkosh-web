/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
export type UserProfile = {
    /**
     * User ID
     */
    id?: number;
    /**
     * User email address
     */
    email?: string;
    /**
     * User full name
     */
    name?: string;
    /**
     * User creation timestamp
     */
    createdAt?: string;
    /**
     * User last update timestamp
     */
    updatedAt?: string;
    /**
     * List of business associations for the user
     */
    businessUsers?: Array<{
        /**
         * Business User ID
         */
        id?: number;
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
        /**
         * User role in the business
         */
        role?: 'STUDENT' | 'TEACHER' | 'ADMIN' | 'SUPERADMIN' | 'GUEST';
        /**
         * Whether the business user is active
         */
        isActive?: boolean;
    }>;
};

