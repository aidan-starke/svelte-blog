import { gql } from "graphql-request";
import { client } from "@/libs/graphql-client";

export const get = async () => {
	try {
		const query = gql`
			query Pages {
				pages {
					title
					slug
					content {
						html
					}
				}
			}
		`;
		const { pages } = await client.request(query);

		return {
			status: 200,
			body: { pages },
		};
	} catch (err) {
		return {
			status: 500,
			body: { error: "there was a server error" },
		};
	}
};
