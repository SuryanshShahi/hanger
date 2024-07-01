"use client";
import { metaContent } from "@/app/utils/content";
import Head from "next/head";
import { FC, Fragment, PropsWithChildren, Suspense, useState } from "react";
import { IoIosArrowUp } from "react-icons/io";
import "slick-carousel/slick/slick-theme.css";
import "slick-carousel/slick/slick.css";
import Footer from "../footer";
import Navbar from "../navbar";
interface IPageWraps {
  wrapperClass?: string;
  isNavbar?: boolean;
  navClass?: string;
  seo?: any;
}

const PageWrapper: FC<PropsWithChildren<IPageWraps>> = ({
  children,
  wrapperClass,
  seo,
}) => {
  const [isActive, setIsActive] = useState(false);
  const slideNav = () => {
    if (window.scrollY >= 100) {
      setIsActive(true);
    } else {
      setIsActive(false);
    }
  };
  if (typeof window !== "undefined") {
    window.addEventListener("scroll", slideNav);
  }
  return (
    <Suspense fallback={<div>...Loading</div>}>
      <Fragment>
        <Head>
          <title>{seo?.metaTitle ?? metaContent.TITLE}</title>
          <meta
            name="description"
            content={seo?.metaDescription ?? metaContent.DESCRIPTION}
          />
          <meta
            property="og:title"
            content={seo?.metaTitle ?? metaContent.TITLE}
          />
          <meta
            property="og:description"
            content={seo?.metaDescription ?? metaContent.DESCRIPTION}
          />

          <meta name="viewport" content="width=device-width, initial-scale=1" />

          {/* Favicon section start */}
          <link rel="icon" type="image/x-icon" href={metaContent.FAVICON} />

          <link
            rel="apple-touch-icon"
            sizes="180x180"
            href="favicon/apple-touch-icon.png"
          />
          <link
            rel="icon"
            type="image/png"
            sizes="32x32"
            href="favicon/favicon-32x32.png"
          />
          <link
            rel="icon"
            type="image/png"
            sizes="16x16"
            href="favicon/favicon-16x16.png"
          />
          <link rel="manifest" href="favicon/site.webmanifest" />
          <link
            rel="mask-icon"
            href="favicon/safari-pinned-tab.svg"
            color="#FFC40D"
          />
          <meta name="msapplication-TileColor" content="#ffffff" />
          <meta name="theme-color" content="#ffffff" />
          {/* Favicon section end */}

          {seo?.meta?.map((meta: any) => (
            <meta
              name={meta.name}
              property={meta.property}
              key={meta.id}
              content={meta.content}
            />
          ))}
        </Head>
        <div className="animate-bottom">
          <Navbar />
          <div className={`${wrapperClass}`}>{children}</div>
          {isActive && (
            <div
              className="z-10 w-12 h-8 hover:h-10 duration-300 bottom-0 right-10 rounded-t-md fixed cursor-pointer bg-primary flex items-center justify-center"
              onClick={() => window.scroll(0, 0)}
            >
              <IoIosArrowUp color="white" />
            </div>
          )}

          <Footer />
        </div>
      </Fragment>
    </Suspense>
  );
};

export default PageWrapper;
