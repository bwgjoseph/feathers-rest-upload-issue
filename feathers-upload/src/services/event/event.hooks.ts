import { HookContext } from '@feathersjs/feathers';

export default {
  before: {
    all: [],
    find: [],
    get: [],
    create: [
      async (context: HookContext) => {
        console.log('data', context.data);
        console.log('files', context.params.file);
      },
    ],
    update: [],
    patch: [],
    remove: [],
  },

  after: {
    all: [],
    find: [],
    get: [],
    create: [],
    update: [],
    patch: [],
    remove: [],
  },

  error: {
    all: [],
    find: [],
    get: [],
    create: [],
    update: [],
    patch: [],
    remove: [],
  },
};
