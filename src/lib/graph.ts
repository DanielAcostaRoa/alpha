import { buildSubgraphSchema } from "@apollo/subgraph";
import { ApolloServer } from "apollo-server";

interface GraphDefinition {
    typeDefs: any;
    resolvers: any;
}

export default class Graph {
    private graphName: string;
    private graphDefinition: GraphDefinition;

    constructor(graphName: string, graphDefinition: GraphDefinition) {
        this.graphName = graphName;
        this.graphDefinition = graphDefinition;
    }
    private createServer() {
        return new ApolloServer({
            schema: buildSubgraphSchema([this.graphDefinition]),
            context: ({ req }) => {
                return {
                    token: req.headers.authorization,
                };
            }
        });
    }
    public async start(PORT: number = 4000) {
        try {
            const server = this.createServer();
            server.listen(PORT).then(({ url }) => {
                console.log(`🚀 ${this.graphName} Service is ready at ${url}`);
            });
        } catch (error: any) {
            console.log(error);
        }
    }
}
