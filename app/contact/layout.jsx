import Footer from "@/components/Footer";

export const metadata = {
	title: "Alamin | Contact",
};
export default function Layout({ children }) {
  return (
    <>
      {children}
      <Footer />
    </>
  );
}
