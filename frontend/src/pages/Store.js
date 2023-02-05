import "tailwindcss/tailwind.css";
import NavBar from "../components/books/NavBar";
import Filter from "../components/books/Filter";
import image from "../assets/ban2.jpg"
import BookmapStore from "../components/books/BookmapStore";

function Store() {
  return (
    <div className="min-h-screen flex flex-col">
      <NavBar />
      <div className="rounded-2xl mb-4">
            <img
              src={image} alt="image1"
              className="w-full h-[300px] object-cover object-right md:object-top rounded-2xl"
            />
          </div>
      <main className="h-full flex gap-8 p-8 pt-0">
        <Filter />
        <div className="flex-1 h-full">
         
          <div className="flex md:grid md:grid-cols-2 xl:flex items-center justify-around lg:justify-between flex-wrap gap-8">
          <BookmapStore />
          </div>
        </div>
      </main>
    </div>
  );
}

export default Store;