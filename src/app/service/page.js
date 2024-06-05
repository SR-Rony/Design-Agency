import AllService from "@/components/AllService";
import NavbarOtherPage from "@/components/NavbarOtherPage";
import NewsLetter from "@/components/NewsLetter";

const page = () => {
  return (
    <div>
      {/* <NavbarOtherPage pageName="Our Services" /> */}
      <AllService />
      <NewsLetter />
    </div>
  );
};

export default page;
