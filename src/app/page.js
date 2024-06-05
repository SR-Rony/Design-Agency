import FutureProject from "@/components/FutureProject";
import Navbar from "@/components/Navbar";
import NewsLetter from "@/components/NewsLetter";
import WorkList from "@/components/WorkList";
import Banner from './../components/Banner';

export default function Home() {
  return (
    <div>
      {/* <Navbar /> */}
      <Banner />
      <WorkList />
      <FutureProject />
      <NewsLetter />

    </div>
  );
}
