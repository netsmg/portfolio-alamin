import Footer from "@/components/Footer";

export const metadata = {
	title: "Demo | Code",
};
export default function Layout({ children }) {
  return (
    <>
      {children}
      <Footer />
    </>
  );
}
