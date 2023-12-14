import Footer from "@/components/Footer";

export const metadata = {
	title: "Alamin | Bot",
};
export default function Layout({ children }) {
  return (
    <>
      {children}
      <Footer />
    </>
  );
}
