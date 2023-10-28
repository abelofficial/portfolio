import { GraphQLClient } from "graphql-request";

export interface IDatoRequestProps {
  query: string;
  variables?: any;
  includeDrafts?: boolean;
  excludeInvalid?: boolean;
}

export function request<TResponse>({
  query,
  variables,
  includeDrafts,
  excludeInvalid,
}: IDatoRequestProps): Promise<TResponse> {
  const headers = {
    authorization: `Bearer ${process.env.NEXT_DATOCMS_API_TOKEN}`,
  };
  if (includeDrafts) {
    headers["X-Include-Drafts"] = "true";
  }
  if (excludeInvalid) {
    headers["X-Exclude-Invalid"] = "true";
  }
  const client = new GraphQLClient("https://graphql.datocms.com", { headers });
  let response = client.request<TResponse>(query, variables);
  return response;
}
