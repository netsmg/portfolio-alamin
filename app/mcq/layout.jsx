import Footer from "@/components/Footer";

export const metadata = {
	title: "Alamin | MCQ",
};
export default function Layout({ children }) {
  return (
    <>
      {children}
      <Footer />
    </>
  );
}
