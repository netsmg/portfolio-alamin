import Footer from "@/components/Footer";

export const metadata = {
	title: "Demo| Login",
};
export default function Layout({ children }) {
  return (
    <>
      {children}
      <Footer />
    </>
  );
}
