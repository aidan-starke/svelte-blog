import { gql } from "graphql-request";
import { client } from "../../libs/graphql-client";

export const get = async (req: { params: { slug: string } }) => {
	try {
		const query = gql`
			query Page($slug: String!) {
				page(where: { slug: $slug }) {
					title
					content {
						html
					}
				}
			}
		`;

		const { page } = await client.request(query, { slug: req.params.slug });

		return {
			status: 200,
			body: { page },
		};
	} catch (err) {
		return {
			status: 500,
			body: { error: "there was a server error" },
		};
	}
};
