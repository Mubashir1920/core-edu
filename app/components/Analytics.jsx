// components/Analytics.tsx
'use client';
import Script from 'next/script';
import { usePathname } from 'next/navigation';
import { useEffect } from 'react';
import * as gtag from '../utils/gtag';

const GA_ID = process.env.NEXT_PUBLIC_GA_ID;

export default function Analytics() {
    const pathname = usePathname();

    useEffect(() => {
        if (!GA_ID) return;
        // send a pageview whenever pathname changes
        gtag.pageview(window.location.pathname + window.location.search);
    }, [pathname]);

    if (!GA_ID) return null;

    return (
        <>
            <Script src={`https://www.googletagmanager.com/gtag/js?id=${GA_ID}`} strategy="afterInteractive" />
            <Script id="gtag-init" strategy="afterInteractive">
                {`
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());
          gtag('config', '${GA_ID}', { send_page_view: false });
        `}
            </Script>
        </>
    );
}
