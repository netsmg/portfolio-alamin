import Footer from "@/components/Footer";

export const metadata = {
	title: "Demo | Result",
};
export default function Layout({ children }) {
  return (
    <>
      {children}
      <Footer />
    </>
  );
}
