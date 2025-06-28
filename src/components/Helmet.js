import { Helmet } from "react-helmet";

function SEO({ title, description }) {
  return (
    <Helmet>
      <title>{title} - PBJ Fire</title>
      <meta name="description" content={description} />
    </Helmet>
  );
}

export default SEO;
