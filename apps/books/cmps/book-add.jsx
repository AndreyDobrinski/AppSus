import {bookServise} from '../services/book-service.js'

export class BookAdd extends React.Component{



    state = {
        bookSearch:'',
        booksAPI: []
    }


    onInputChange = (ev) => {
        const value =
          ev.target.type === "number" ? +ev.target.value : ev.target.value;

          this.setState({
            bookSearch : value
          })
    
          bookServise.getDemoAPIBooks(value)
          .then(books =>{
              this.setState({
                booksAPI:books
              })
          })
          
    };


    onBookAdded = (book) =>{
        var newBook =  bookServise.searchBook(book.id,this.state.booksAPI)
        bookServise.addBook(newBook)



        this.setState({
            bookSearch : ''
        })
    }




    render(){
        const {booksAPI} = this.state
        return(
            <section>
                <input type="text" name="name" value={this.state.bookSearch}  placeholder="Add new books"  onChange={this.onInputChange}  className="book-add" list="brow"/>
         

                <ul>
                    {booksAPI.map((book,idx) =>{
                        if(this.state.bookSearch !== '')
                        return (
                            
                            <li key={idx} className="list-new-books">
                                {book.volumeInfo.title}
                                <button className="btn-add-books" onClick={() => {this.onBookAdded(book)}}>+</button>
                            </li>
                            
                            )
                    })}
                </ul>

            </section>
        )
    }
}
