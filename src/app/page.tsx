import PageIcons from "@/components/PageIcons";
import Footer from "@/components/Footer";

export default function Home() {
  return (
      <main className="min-h-screen flex flex-col">
          <div className={"flex-1 items-center justify-between p-24"}>
              <PageIcons/>
          </div>
          <Footer/>
      </main>
  );
}
