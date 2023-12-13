import Footer from "@/components/Footer";

export const metadata = {
	title: "Demo | Blog",
};
export default function Layout({ children }) {
  return (
    <>
      {children}
      <Footer />
    </>
  );
}
