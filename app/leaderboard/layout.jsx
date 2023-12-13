import Footer from "@/components/Footer";

export const metadata = {
	title: "Alamin | Login",
};
export default function Layout({ children }) {
  return (
    <>
      {children}
      <Footer />
    </>
  );
}
