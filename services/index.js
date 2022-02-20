import { request, gql } from 'graphql-request'

const graphqlAPI = process.env.NEXT_PUBLIC_GRAPHCMS_ENDPOINT;

export const getExcerpts = async () => {
    const query = gql`
        query MyQuery {
            excerptsConnection {
            edges {
                node {
                author
                createdAt
                title
                }
            }
            }
        }
    `
    const result = await request(graphqlAPI, query);
    return result.excerptsConnection.edges;
}