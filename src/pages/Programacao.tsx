import { ProgramaWeek } from "../components/ProgramaWeek";
import { Sidebar } from "../components/Sidebar";
import { Layout } from "../Layout/Layout";

export const Programacao = () => {
  return (
    <Layout>
      <main className="container mx-auto flex mt-8">
        <section className="w-3/4 pr-8 px-6">
            <ProgramaWeek />
        </section>
        <Sidebar />
      </main>
    </Layout>
  );
};
