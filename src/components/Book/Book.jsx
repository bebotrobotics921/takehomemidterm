import styles from "./Book.module.css";

export function Book({ books, selected, getStars }) {
        
        return (
            <div className= "book">
                <h1>Book</h1>
                    <div className={styles.bookView}>
                        {books.map((book)=>
                        <div key={book.id}>
                            <div className={styles.bookCover}>
                                {book.id === selected ? (
                                <img height="400" src={book.coverImg} />
                                ) : (
                                    ""
                                )}
                            </div>
                        
                            <div className={styles.details}>
                                <div className="descriptions">
                                <div>
                                    {book.id === selected ? (
                                        <p >{book.name}</p>
                                    ): (
                                        ""
                                    )}
                                </div>
                                <div>
                                    {book.id === selected ? (
                                        <p>{book.author} & {book.coAuthor}</p>
                                    ): (
                                        ""
                                    )}
                                </div>
                                <div>
                                    {book.id === selected ? (
                                        <div>{book.id === selected ? (<ol>{book.sequels}</ol>) : ("")}</div>
                                    ): (
                                        ""
                                    )}
                                </div>
                                <div>
                                    {book.id === selected ? (
                                        <span className="stars">Rating: {getStars(book.rating)}</span>
                                    ): (
                                        ""
                                    )}
                                </div>
                                </div>
                                
                            </div>   
                          
                        </div>
                         )}
                    </div>    
               


                    
                        
            </div>
        )
}

export default Book;