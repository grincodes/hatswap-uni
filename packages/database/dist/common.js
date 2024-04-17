import {} from '@prisma/client';
export var defaultPrismaClientOptions = {
    datasources: {
        db: {
            url: process.env['DATABASE_URL'],
        },
    },
    // log: ['query'],
};
//# sourceMappingURL=common.js.map