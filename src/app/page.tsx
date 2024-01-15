import { Footer, Header } from "@/app/designsystem/organisms";
import Image from "next/image";

interface HomeProps {}
export default function Home({}: React.FC<HomeProps>) {
  return (
    <>
      {/* Header Section */}
      <Header />
      {/* Main Section */}
      <main className="flex min-h-screen flex-col items-center justify-between p-24">
        <h1>Welcome to Home page!</h1>
      </main>
      {/* Footer Section */}
      <Footer />
    </>
  );
}
