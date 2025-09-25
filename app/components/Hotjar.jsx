// components/Hotjar.tsx
'use client';
import { useEffect } from 'react';
import Script from 'next/script';
import { usePathname } from 'next/navigation';



const HOTJAR_ID = process.env.NEXT_PUBLIC_HOTJAR_ID;
const HOTJAR_SV ='6';

export default function Hotjar() {
  const pathname = usePathname();

  useEffect(() => {
    if (typeof window.hj === 'function') {
      window.hj('stateChange', pathname || '/');
    }
  }, [pathname]);

  if (!HOTJAR_ID) return null;

  return (
    <>
      <Script id="hotjar-init" strategy="afterInteractive">
        {`
          (function(h,o,t,j,a,r){
              h.hj=h.hj||function(){(h.hj.q=h.hj.q||[]).push(arguments)};
              h._hjSettings={hjid:${HOTJAR_ID},hjsv:${HOTJAR_SV}};
              a=o.getElementsByTagName('head')[0];
              r=o.createElement('script');r.async=1;
              r.src=t+h._hjSettings.hjid+j+h._hjSettings.hjsv;
              a.appendChild(r);
          })(window,document,'https://static.hotjar.com/c/hotjar-','.js?sv=');
        `}
      </Script>
    </>
  );
}
