import { useSiteMetaData } from 'hooks/useSiteMetaData';
import { Helmet } from 'react-helmet';

interface SEOTypes {
  title: string;
  description: string;
  url: string;
}

const SEO = ({ title, description, url }: SEOTypes) => {
  const data = useSiteMetaData();
  const { siteMetadata } = data.site;

  const SEOItem: SEOTypes = {
    title: title || siteMetadata.title,
    description: description || siteMetadata.description,
    url: url || siteMetadata.siteUrl,
  };

  return (
    <Helmet>
      <title>{title}</title>
      <meta property="og:title" content={SEOItem.title} />
      <meta property="og:description" content={SEOItem.description} />
      <meta property="og:url" content={SEOItem.url} />
    </Helmet>
  );
};

export default SEO;
