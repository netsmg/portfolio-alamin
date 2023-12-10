import Footer from "@/components/Footer";

export const metadata = {
	title: "Alamin | blog ",
};
export default function Layout({ children }) {
  return (
    <>
      {children}
      <Footer />
    </>
  );
}
