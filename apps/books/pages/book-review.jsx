import { bookServise } from "../services/book-service.js";

export class BookReview extends React.Component {
  state = {
    book: null,
    //PROBLEM HERE
    review:{review :'' , score:0}
  };

  //INIT
  componentDidMount() {
    const { bookId } = this.props.match.params;
    // console.log(bookId);

    bookServise.getById(bookId).then((book) => {
      //   console.log(book);
      this.setState({ book });
      
    });

    console.log('didMount');
  }

  goBack = () => {
    this.props.history.goBack();
  };

  onSaveBookReview = (ev) => {
    ev.preventDefault();
    console.log("Review saved!");

    // console.log(this.state.book.score);

    if (this.state.book.score < 0 || this.state.book.score === "") {
      console.log("bad");
      return;
    }

    const { bookId } = this.props.match.params;

    bookServise.save(this.state.review , bookId ).then((review) => {
      console.log("review", review);

      this.setState({
        book: {
          ...this.state.book,
          reviews: [review, ...this.state.book.reviews],
        },

      });

    });

  };

  onInputChange = (ev) => {
    const value =
      ev.target.type === "number" ? +ev.target.value : ev.target.value;
    // const bookCopy = { ...this.state.book };
    // bookCopy[ev.target.name] = value;

    this.setState({
      review: {...this.state.review , [ev.target.name] : value},
    });
  };

  render() {
    if (!this.state.book) return <h1>Loading..</h1>;
    return (
      <form onSubmit={this.onSaveBookReview} className="review-form">
        <h1>Reviews</h1>
        <button onClick={this.goBack}>Go back</button>
        <h2>Book Name: {this.state.book.title}</h2>
        {this.state.book.reviews && (
          <div>
            Book Reviews:{" "}
            {this.state.book.reviews.map((review, idx) => {
              return (
                <div key={idx}>
                  <p>
                    {review.review} {review.score}/10
                  </p>
                </div>
              );
            })}
          </div>
        )}

        <div className="review-text-area">
          <textarea
            name="review"
            cols="50"
            rows="10"
            placeholder="Review Area"
            onChange={this.onInputChange}
          ></textarea>
        </div>

        <div className="review-input-score">
          <input
            type="number"
            name="score"
            placeholder="Score"
            onChange={this.onInputChange}
          />
        </div>

        <div className="review-btn-submit">
          <button type="submit">Add Review</button>
        </div>
      </form>
    );
  }
}

