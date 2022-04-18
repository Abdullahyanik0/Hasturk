import { NextSeo } from 'next-seo';
import Head from 'next/head';

import { AppConfig } from '../utils/app-config';

const Meta = (props) => {
  return (
    <>
      <Head>
        <meta charSet="UTF-8" key="charset" />
        <meta name="viewport" content="width=device-width,initial-scale=1" key="viewport" />
        <link rel="apple-touch-icon" href="" key="apple" />
        <link rel="icon" type="image/png" sizes="32x32" href="" key="icon32" />
        <link rel="icon" type="image/png" sizes="16x16" href="" key="icon16" />
        <link rel="icon" href="" key="favicon" />
      </Head>
      <NextSeo
        title={props?.title}
        description={props?.description}
        canonical={props?.canonical}
        openGraph={{
          title: props?.title,
          description: props?.description,
          url: props?.canonical,
          locale: AppConfig.locale,
          site_name: AppConfig.site_name
        }}
      />
    </>
  );
};

export default Meta;
