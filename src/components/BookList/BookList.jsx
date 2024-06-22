
export function BookList({ books, selected, setSelected }) {

    return (
        <div className="book-list">
           <h1>Book List</h1>
           <div>
            {books.map((book) => 
            <div className="book-item" key={book.id}>
                
                <p className={book.id === selected ? "underline" : ""}
                   onClick={() => setSelected(book.id)}>
                    {book.name}
                </p>
            </div>
            )}
           </div>
        </div>
    )
}

export default BookList;