import "../globals.css";
import Header from "@/components/layout/header";
import Footer from "@/components/layout/footer";
import { getAuthUser } from "@/data/services/auth-service";

export default async function MainLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const user = await getAuthUser();
  return (
    <div>
      <Header user={user} />
      {children}
      <Footer />
    </div>
  );
}
