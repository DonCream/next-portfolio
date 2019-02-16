import Layout from "../components/Layout";
import Link from "next/link";

const PostLink = ({ slug, title }) => (
  <li>
    <Link as={`/${slug}`} href={`/post?title=${title}`}>
      <a>{title}</a>
    </Link>
  </li>
);

const Blog = () => (
  <Layout title="My Blog">
    <ul>
      <PostLink slug="react" title="React" />
      <PostLink slug="angular" title="Angular" />
      <PostLink slug="vue" title="Vue" />
    </ul>
  </Layout>
);

export default Blog;
