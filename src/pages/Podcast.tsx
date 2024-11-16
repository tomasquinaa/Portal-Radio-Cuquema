import { PodCastDay } from "../components/PodcastDay"
import { Sidebar } from "../components/Sidebar"
import { Layout } from "../Layout/Layout"


export const PodCast = () => {
    return (
        <Layout>
            <main className="container mx-auto flex mt-8">
            <section className="w-3/4 pr-8 px-6">
                <PodCastDay />
            </section>
            <Sidebar />
            </main>
        </Layout>
    )
}