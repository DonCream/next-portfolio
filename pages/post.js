import Layout from "../components/Layout";
import { withRouter } from "next/router";

const Post = ({ router }) => (
  <Layout title={router.query.title}>
    <p style={{ width: "80vw" }}>
      Dolor optio voluptatum numquam tenetur qui, beatae, nihil Dolorum iusto
      deserunt ipsum vitae cum. Sed quos itaque explicabo nulla hic Corrupti
      repellendus iure animi repellendus et saepe. Totam obcaecati quia!
    </p>
  </Layout>
);

export default withRouter(Post);
