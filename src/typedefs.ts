import { gql } from "apollo-server";

export const typeDefs = gql`
    type A {
        id: ID!
        b: B!
        c: C!
        payloadA: String!
    }
    type B {
        id: ID!
        d: D!
        e: E!
        payloadB: String!
    }
    type C {
        id: ID!
        f: F!
        g: G!
        payloadC: String!
    }
    type D {
        id: ID!
        payloadD: String!
    }
    type E {
        id: ID!
        payloadE: String!
    }
    type F {
        id: ID!
        payloadF: String!
    }
    type G {
        id: ID!
        payloadG: String!
    }
    type Query {
        a(id: ID!): A!
        as: [A!]!
    }
`;
