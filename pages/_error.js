import Layout from "../components/Layout";

export default ({ statusCode }) => (
  <Layout title="Error!!!">
    {statusCode
      ? `Could not load your user data: Status Code ${statusCode}`
      : `Couldnt get that page, sorry!`}
  </Layout>
);
