import Footer from "@/components/Footer";

export const metadata = {
	title: "Demo | wiki",
};
export default function Layout({ children }) {
  return (
    <>
      {children}
      <Footer />
    </>
  );
}
