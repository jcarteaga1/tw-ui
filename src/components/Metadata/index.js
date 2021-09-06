import Helmet from "react-helmet";

const Metadata = (props) => {
  const { title, content, url } = props;
  return (
    <Helmet>
      <title>{title}</title>
      <meta name="description" content={content}></meta>
      <meta name="twitter:card" content="summary" />
      <meta name="twitter:site" content="MyTwitter" />
      <meta name="twitter:creator" content="@ArteagaJuanc" />
      <meta property="og:url" content={url} />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={content} />
    </Helmet>
  );
};

export default Metadata;
