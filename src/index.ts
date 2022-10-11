import 'reflect-metadata';
import Graph from "./lib/graph";
import { typeDefs } from "./typedefs";
import { resolvers } from "./resolvers";


const graph = new Graph("Beta", {
    typeDefs,
    resolvers,
});

export default async function handler() {
    graph.start();
}

if (require.main === module) {
    handler();
}
