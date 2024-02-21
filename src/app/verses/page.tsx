import VerseCard from "@/components/VerseCard";
import SearchBar from "@/components/verses/SearchBar";
import SideBar from "@/components/verses/SideBar";

interface Params {
  [key: string]: string | string[];
  query: string
}

interface VerseObject {
  _id: string;
  location: string;
  verse: string;
  section: string;
  book: string;
  topic: string[];
  context: string;
  character: string;
  author: string;
  __v: string;
}

const getVerses = async () => {
  try {
    const res = await fetch("https://verbum-beta.vercel.app/api/verses", {
      cache: "no-store",
    });

    if (!res.ok) {
      throw new Error("Failed to fetch!");
    }

    return res.json();
  } catch (error) {
    console.log(error);
  }
};

const Database = async ({ searchParams }: { searchParams: Params }) => {
  const toArray = (value: string | string[]) =>
    Array.isArray(value) ? value : value ? [value] : [];

  const otherFilter = (param: string | string[], value: string) => {
    if (!param) {
      return true;
    }
    return toArray(param).includes(value);
  };
  const topicFilter = (param: string | string[], value: string | string[]) => {
    if (!param) {
      return true;
    }
    return toArray(param).every((p) => toArray(value).includes(p));
  };

  const queryFilter = (param: string, title: string, verse: string) => {
    if (!param) {
      return true;
    }
    return (
      title.toLowerCase().includes(param.toLocaleLowerCase()) ||
      verse.toLowerCase().includes(param.toLocaleLowerCase())
    );
  };

  const { section, book, topic, context, character, author, query } =
    searchParams;
  const { verses }: { verses: VerseObject[] } = await getVerses();

  const filteredVerses = verses.filter((verse) => {
    return (
      otherFilter(section, verse.section) &&
      otherFilter(book, verse.book) &&
      topicFilter(topic, verse.topic) &&
      otherFilter(context, verse.context) &&
      otherFilter(character, verse.character) &&
      otherFilter(author, verse.author) &&
      queryFilter(query, verse.location, verse.verse)
    );
  });

  return (
    <section className="flex flex-col mx-10">
      <div className="grid grid-cols-11 gap-4 max-lg:grid-cols-1 max-lg:gap-0">
        <div className="col-span-3 mt-24">
          <SideBar />
        </div>
        <div className="col-span-8 rounded-container mt-24 max-lg:mt-4">
          <SearchBar />
          <p className="font-body py-3 px-3 font-semibold">
            Showing {filteredVerses.length} Verses
          </p>
          <div className="my-5 flex flex-col justify-start gap-5">
            {filteredVerses.map((verse) => (
              <VerseCard
                key={verse._id}
                location={verse.location}
                verse={verse.verse}
                topic={verse.topic}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Database;
