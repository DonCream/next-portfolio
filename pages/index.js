import Link from "next/link";
import Layout from "../components/Layout";

const Index = () => (
  <Layout title="Home">
    <Link href="/about">
      <a>Go to About page</a>
    </Link>
    <p>Welcome to the Homepage</p>
  </Layout>
);

export default Index;
