import { Html, Head, Main, NextScript } from "next/document";
import Link from "next/link";


export default function Document() {
  return (
    <Html lang="en">
      <Head>
        <link 
            rel="stylesheet" 
            href="https://cdn.jsdelivr.net/npm/bootstrap@4.4.1/dist/css/bootstrap.min.css" 
          />
           <link 
          rel="stylesheet" 
          href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@20..48,100..700,0..1,-50..200" 
        />
      </Head>
      <body>
        <div className="">
          <Main />
        </div>
        <NextScript />
      </body>
    </Html>
  );
}
