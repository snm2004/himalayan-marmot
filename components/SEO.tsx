
import React from 'react';
import { Helmet } from 'react-helmet-async';

interface SEOProps {
    title: string;
    description: string;
    image?: string;
    url?: string;
    keywords?: string;
}

const SEO: React.FC<SEOProps> = ({ title, description, image, url, keywords }) => {
    const siteTitle = "Himalayan Marmot | Authentic Ladakh Bike Tours";
    const defaultImage = "https://www.himalayanmarmotladakh.com/himalayan-bike-new.jpg"; // Fallback image
    const siteUrl = "https://www.himalayanmarmotladakh.com";

    const fullTitle = title === siteTitle ? title : `${title} | Himalayan Marmot`;
    const absoluteImage = image?.startsWith('http') ? image : `${siteUrl}${image || defaultImage}`;
    const canonicalUrl = url ? `${siteUrl}${url}` : siteUrl;

    return (
        <Helmet>
            {/* Standard Metadata */}
            <title>{fullTitle}</title>
            <meta name="description" content={description} />
            {keywords && <meta name="keywords" content={keywords} />}
            <link rel="canonical" href={canonicalUrl} />

            {/* Open Graph / Facebook */}
            <meta property="og:type" content="website" />
            <meta property="og:title" content={fullTitle} />
            <meta property="og:description" content={description} />
            <meta property="og:image" content={absoluteImage} />
            <meta property="og:url" content={canonicalUrl} />
            <meta property="og:site_name" content="Himalayan Marmot" />

            {/* Twitter */}
            <meta name="twitter:card" content="summary_large_image" />
            <meta name="twitter:title" content={fullTitle} />
            <meta name="twitter:description" content={description} />
            <meta name="twitter:image" content={absoluteImage} />
        </Helmet>
    );
};

export default SEO;
