import Link from "next/link";
import Layout from "../components/Layout";
import fetch from "isomorphic-unfetch";
import React, { Component } from "react";
import Error from "./_error";

class about extends Component {
  static async getInitialProps() {
    const res = await fetch("https://api.github.com/users/DonCream");
    const statusCode = res.status > 200 ? res.status : false;
    const data = await res.json();

    return { user: data, statusCode };
  }

  render() {
    const { user, statusCode } = this.props;

    if (statusCode) {
      return <Error statusCode={statusCode} />;
    }

    return (
      <Layout title="About">
        <p>{user.name}</p>
        <p>A Javascript programmer</p>
        <img src={user.avatar_url} alt="Lamar" height="200px" />
      </Layout>
    );
  }
}

export default about;
