import Footer from "@/components/Footer";

export const metadata = {
	title: "Demo | Subsciption",
};
export default function Layout({ children }) {
  return (
    <>
      {children}
      <Footer />
    </>
  );
}
