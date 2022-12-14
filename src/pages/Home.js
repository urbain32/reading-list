import { useEffect, useState } from "react";
import BookList from "../components/BookList";
import BookForm from "../components/BookForm";
import { db } from "../firebase/config";
import { collection, doc, getDocs } from "firebase/firestore";

export default function Home() {
  const [books, setBooks] = useState(null);
  useEffect(() => {
    // get data firebase 9
    const ref = collection(db, "books");
    getDocs(ref).then((snapshot) => {
      let result = [];
      snapshot.docs.forEach((doc) => {
        result.push({ id: doc.id, ...doc.data() });
      });
      setBooks(result);
    });
  }, []);

  return (
    <div className="App">
      {books && <BookList books={books} />}
      <BookForm />
    </div>
  );
}
