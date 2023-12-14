import Footer from "@/components/Footer";

export const metadata = {
	title: "Demo | Quize",
};
export default function Layout({ children }) {
  return (
    <>
      {children}
      <Footer />
    </>
  );
}
