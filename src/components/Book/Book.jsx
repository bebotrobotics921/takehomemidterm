
import styles from "./Book.module.css";
export function Book({ books, selected, getStars }) {
    
    
        return (
           
                    <div className={styles.bookView}>
                        {books.map((book)=>
                            <div className={styles.descriptions}>
                                <div>
                                    {book.id === selected ? (
                                    <img height="300" src={book.coverImg} />  
                                    ) : (
                                        ""
                                    )}
                                </div>
                                <div >
                                    {book.id === selected ? (
                                    <p>Author: {book.author} <br></br> {book.coAuthor}</p>
                                    ):(
                                        ""
                                    )}
                                </div>
                               
                                <div>
                                    {book.id === selected ? (
                                    <ol key={book.id}>{book.sequels}</ol>/*{book.sequels.map((sequel)=><ol>{sequel}</ol>)} gives a warning error*/
                                ):(
                                    ""
                                )}
                                </div>  

                                <div>
                                {book.id===selected ? (
                                <span className="stars">Rating: {getStars(book.rating)}</span>
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