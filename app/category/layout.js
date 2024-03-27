import Footer from "../components/Footer";
import Header from "../components/Header";
import Newsletter from "../components/Newsletter";

export default function CategoryLayout({ children }) {
  return (
    <>
        <Header />
        <main>
            <section className="w-11/12 lg:w-10/12 max-w-7xl mx-auto py-0 lg:py-10 lg:flex justify-between items-start">
                {children}
            </section>
            <Newsletter />
        </main>
        <Footer />
    </>
  )
}
