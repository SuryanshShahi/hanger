import PageWrapper from "./components/PageWrapper/PageWrapper";
import Home from "./features/home";

export default function Index() {
  return (
    <PageWrapper
      seo={{
        metaTitle: "",
        metaDescription: "",
      }}
    >
      <Home />
    </PageWrapper>
  );
}
