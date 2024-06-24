
import styles from "./Book.module.css";

export function Book({ books, selected, getStars }) {

        return (
            
                    <div className={styles.bookView}>
                        {books.map((book)=>
                        <div key={book.id}>
                            <div className={styles.bookCover}>
                                {book.id === selected ? (
                                <img height="300" src={book.coverImg} />
                                ) : (
                                    ""
                                )}
                            </div>
                        
                            <div className={styles.author}>
                                {book.id===selected ? (
                                <p>{book.author} <br></br>{book.coAuthor}</p>
                                ):(
                                    ""
                                )}
                            </div>
                            <div className={styles.sequels}>     
                                   
                               
                                {book.id === selected ? (
                                <ol>{book.sequels}</ol>
                                ): (
                                    ""
                                )}
                             
                           </div>
                           <div className={styles.stars}>
                                {book.id===selected ? (
                                <p className="stars">Rating: {getStars(book.rating)}</p>
                                ):(
                                    ""
                                )}
                            </div>            
                            </div>   
                         )}
                    </div>    
               


                    
                        
           
        )
}

export default Book;