import { GraphQLClient } from "graphql-request";
import { GRAPHQL_ENDPOINT } from "@/libs/constants";

export const client = new GraphQLClient(GRAPHQL_ENDPOINT);
