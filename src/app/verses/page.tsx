import SearchBar from "@/components/versePageComponents/SearchBar";
import SideBar from "@/components/versePageComponents/SideBar";
import NavBar from "@/components/NavBar";
import VerseList from "@/components/versePageComponents/VerseList";

interface Params {
  [key: string]: string | string[];
  query: string;
}

const Database = async ({ searchParams }: { searchParams: Params }) => {
  return (
    <div className="mb-2">
      <section className="max-[300px]:hidden">
        <NavBar />
        <div className="flex flex-col mx-10 max-sm:mx-4">
          <div className="grid grid-cols-11 gap-4 max-lg:grid-cols-1 max-lg:gap-0">
            <div className="col-span-3">
              <SideBar />
            </div>
            <div className="col-span-8 rounded-container">
              <SearchBar page="verses" />
              <VerseList searchParams={searchParams} />
            </div>
          </div>
        </div>
      </section>
      <div className="min-[300px]:hidden m-2">
        Device width too small. Please revisit on a larger device.
      </div>
    </div>
  );
};

export default Database;
