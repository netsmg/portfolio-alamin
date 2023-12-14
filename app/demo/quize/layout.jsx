import Footer from "@/components/Footer";

export const metadata = {
	title: "Demo | quize",
};
export default function Layout({ children }) {
  return (
    <>
      {children}
      <Footer />
    </>
  );
}
