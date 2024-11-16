import { PublicidadeNews } from "../components/PublicidadeNews"
import { Sidebar } from "../components/Sidebar"
import { Layout } from "../Layout/Layout"


export const Publicidades = () => {
    return (
        <Layout>
        <main className="container mx-auto flex mt-8">
          <section className="w-3/4 pr-8 px-6">
              <PublicidadeNews />
          </section>
          <Sidebar />
        </main>
      </Layout>
    )
}