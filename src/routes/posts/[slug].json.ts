import { gql } from "graphql-request";
import { client } from "../../libs/graphql-client";

export const get = async (req: { params: { slug: string } }) => {
	try {
		const query = gql`
			query Post($slug: String!) {
				post(where: { slug: $slug }) {
					title
					date
					tags
					author {
						name
						authorTitle: title
						picture {
							url(
								transformation: {
									image: { resize: { fit: clip, height: 50, width: 50 } }
								}
							)
						}
					}
					content {
						html
					}
					coverImage {
						url
					}
				}
			}
		`;

		const { post } = await client.request(query, { slug: req.params.slug });

		return {
			status: 200,
			body: { post },
		};
	} catch (err) {
		return {
			status: 500,
			body: { error: "there was a server error" },
		};
	}
};
