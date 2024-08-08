export const routes = [
    {
        href: '/',
        label: 'Overview',
    },
    {
        href: '/transactions',
        label: 'Transactions',
    },
    {
        href: '/accounts',
        label: 'Accounts',
    },
    {
        href: '/categories',
        label: 'Categories',
    },
    // {
    //     href: '/settings',
    //     label: 'Settings',
    // },
];

export enum VARIANTS {
    LIST = "LIST",
    IMPORT = "IMPORT",
};

export const INITIAL_IMPORT_RESULTS = {
    data: [],
    errors: [],
    meta: {},
};

// export const dateFormat = "yyyy-MM-dd HH:mm:ss";
// export const outputFormat = "yyyy-MM-dd";

export const requiredOptions =[
    "amount",
    "date",
    "payee",
];

export const options = [
    "amount",
    "payee",
    // "notes",
    "date",
];

