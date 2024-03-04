import Navbar from "@/components/Navbar"
import "../page.css";
import Layout from "@/components/Layout";

export default function SobremiLayout({
    children, // will be a page or nested layout
  }: {
    children: React.ReactNode
  }) {
    return (
      <>
      <Layout>
        {children}
      </Layout>
      </>
    )
  }