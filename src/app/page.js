import Diferencial from "@/Components/Diferencial";
import NavBar from "../Components/NavBar/index";
import Header from "@/Components/Header";
import Medical_Service from "@/Components/Medical_Service";
import AppInfo from "@/Components/AppInfo";
import Carrousel from "@/Components/Carrousel";
import ArticlesSection from "@/Components/ArticlesSection";
import Footer from "@/Components/Footer";
const Home = () => {

  return (
    <>
      <NavBar />
      <Header />
      <Medical_Service />
      <Diferencial />
      <AppInfo />
      <Carrousel />
      <ArticlesSection />
      <Footer />
    </>
  )
}
export default Home;