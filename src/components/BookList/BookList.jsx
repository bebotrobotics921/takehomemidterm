import styles from "./BookList.module.css";
export function BookList({ books, setSelected}) {

    return (
        <>
       
        <ul key={books.id} className={styles.bookList}>
            {books.map((book) => (
           
                
                <li className={styles.title}
                    key={book.id}
                    onClick={() => setSelected(book.id)}>
                    {book.name}
                </li>
           
            ))}
           </ul>
        </>
    )
}

export default BookList;