import Navbar from "@/components/Navbar"
import "../page.css";
import Layout from "@/components/Layout";

export default function ContactoLayout({
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