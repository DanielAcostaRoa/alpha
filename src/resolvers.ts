import 'reflect-metadata';
import ServiceData from "./services/index"
import { waitForTask } from './lib/waitForTask';

export const resolvers = {
    Query: {
        a: async (_: any, { id }: { id: string }, {}) => {
            try {
                const response = await ServiceData.A.getById(id);
                await waitForTask("a",1000);
                return response;
            } catch (e: any) {
                console.log(e);
                throw new Error(e);
            }
        },
        as: async (_: any, {}, {}) => {
            try {
                const response = await ServiceData.A.getAll();
                await waitForTask("as",1000);
                return response;
            } catch (e: any) {
                console.log(e);
                throw new Error(e);
            }
        }
    },
    A: {
        b: async (parent: any, _: any, {}) => {
            try {
                const response = await ServiceData.B.getByParentId(parent.id);
                await waitForTask("a-b",1000);
                return response;
            } catch (e: any) {
                console.log(e);
                throw new Error(e);
            }
        },
        c: async (parent: any, _: any, {}) => {
            try {
                const response = await ServiceData.C.getByParentId(parent.id);
                await waitForTask("a-c",1000);
                return response;
            } catch (e: any) {
                console.log(e);
                throw new Error(e);
            }
        },
    },
    B: {
        d: async (parent: any, _: any, {}) => {
            try {
                const response = await ServiceData.D.getByParentId(parent.id);
                await waitForTask("a-b-d",1000);
                return response;
            } catch (e: any) {
                console.log(e);
                throw new Error(e);
            }
        },
        e: async (parent: any, _: any, {}) => {
            try {
                const response = await ServiceData.E.getByParentId(parent.id);
                await waitForTask("a-b-e",1000);
                return response;
            } catch (e: any) {
                console.log(e);
                throw new Error(e);
            }
        },
    },
    C: {
        f: async (parent: any, _: any, {}) => {
            try {
                const response = await ServiceData.F.getByParentId(parent.id);
                await waitForTask("a-c-f",1000);
                return response;
            } catch (e: any) {
                console.log(e);
                throw new Error(e);
            }
        },
        g: async (parent: any, _: any, {}) => {
            try {
                const response = await ServiceData.G.getByParentId(parent.id);
                await waitForTask("a-c-g",5000);
                return response;
            } catch (e: any) {
                console.log(e);
                throw new Error(e);
            }
        },
    }
};
