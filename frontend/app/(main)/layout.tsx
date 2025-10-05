import "../globals.css";
import Header from "@/components/layout/header";
import Footer from "@/components/layout/footer";
import { getAuthUser } from "@/data/services/auth-service";
import { fetchStrapiData } from "@/lib/utils";
import { globalQuery } from "@/data/strapi-query/query";

export default async function MainLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const [user, globalData] = await Promise.all([
    getAuthUser(),
    fetchStrapiData("api/global", globalQuery),
  ]);
  return (
    <div>
      <Header user={user} globalData={globalData} />
      {children}
      <Footer />
    </div>
  );
}
