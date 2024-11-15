import { ArticlesSection } from "../components/ArticlesSection";
import { Sidebar } from "../components/Sidebar";
import { Layout } from "../Layout/Layout";

export const Home = () => {
  return (
    <Layout>
      <main className="container mx-auto flex mt-8">
        <ArticlesSection />
        <Sidebar />
      </main>
    </Layout>
  );
};
