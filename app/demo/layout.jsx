import Footer from "@/components/Footer";

export const metadata = {
	title: "Alamin | Demo",
};
export default function Layout({ children }) {
  return (
    <>
      {children}
      <Footer />
    </>
  );
}
