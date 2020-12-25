import { storageService } from './storage-service.js'

const KEY = 'booksDB'

export const bookServise = {
  query,
  getById,
  save,
  getDemoAPIBooks,
  searchBook,
  getDemoBooks,
  addBook
}

var books;
_createBooks()

function _createBooks() {
  books = storageService.loadFromStorge(KEY)
  if (!books || !books.length) {
    books = getDemoBooks()
    _saveBooksToStorage()
  }
}



function _saveBooksToStorage() {
  storageService.saveToStorage(KEY, books)
}



function query() {
  return Promise.resolve(books);
  // return books
}


function getById(bookId) {
  const book = books.find(book => book.id === bookId);

  const copy = JSON.parse(JSON.stringify(book))

  return Promise.resolve(copy);

}





function save(review, bookId) {
  return _addReview(review, bookId)
}



function addBook(book) {
  const newBook = {
    id: book.id,
    title: book.volumeInfo.title || 'book-title',
    subtitle: book.searchInfo.textSnippet || 'book-sub',
    publishedDate: book.volumeInfo.publishedDate || 'book-date',
    description: book.volumeInfo.description || 'book-desc',

    pageCount: book.volumeInfo.pageCount || 'book-pages',

    thumbnail: book.volumeInfo.imageLinks.thumbnail || 'book-pic',
    listPrice: {
      amount: 5,
      currencyCode: "EUR",
      isOnSale: false
    },
    reviews: [
      { review: 'Amazing!', score: 10 },
      { review: 'Ive read better!', score: 6 },
    ]
  }
  books.unshift(newBook);
  console.log(books);
  console.log(book.volumeInfo.imageLinks.thumbnail);
  return books
}












function _addReview(review, bookId) {


  const bookIdx = books.findIndex(currBook => {
    return bookId === currBook.id
  })

  books[bookIdx].reviews.unshift(review)

  console.log(review);

  _saveBooksToStorage()

  return Promise.resolve(review)
}


function searchBook(bookId, booksAPI) {
  // console.log(bookId,booksAPI);
  var newBook = booksAPI.find(book => {
    return book.id === bookId
  })
  // console.log(newBook);
  return newBook

}


function getDemoBooks() {
  const defaultBooks = [
    {
      id: "OXeMG8wNskc",
      title: "metus hendrerit",
      subtitle: "mi est eros convallis auctor arcu dapibus himenaeos",
      authors: [
        "Barbara Cartland"
      ],
      publishedDate: 1999,
      description: "placerat nisi sodales suscipit tellus tincidunt mauris elit sit luctus interdum ad dictum platea vehicula conubia fermentum habitasse congue suspendisse",
      pageCount: 713,
      categories: [
        "Computers",
        "Hack"
      ],
      thumbnail: "http://coding-academy.org/books-photos/20.jpg",
      language: "en",
      listPrice: {
        amount: 109,
        currencyCode: "EUR",
        isOnSale: false
      },
      reviews: [
        { review: 'Amazing!', score: 10 },
        { review: 'Ive read better!', score: 6 },
      ]
    },

    {
      id: "JYOJa2NpSCq",
      title: "morbi",
      subtitle: "lorem euismod dictumst inceptos mi",
      authors: [
        "Barbara Cartland"
      ],
      publishedDate: 1978,
      description: "aliquam pretium lorem laoreet etiam odio cubilia iaculis placerat aliquam tempor nisl auctor",
      pageCount: 129,
      categories: [
        "Computers",
        "Hack"
      ],
      thumbnail: "http://coding-academy.org/books-photos/14.jpg",
      language: "sp",
      listPrice: {
        amount: 44,
        currencyCode: "EUR",
        isOnSale: true
      },
      reviews: [
        { review: 'good!', score: 7 },
        { review: 'Nothing new', score: 3 },
      ]
    },
    {
      id: "1y0Oqts35DQ",
      title: "at viverra venenatis",
      subtitle: "gravida libero facilisis rhoncus urna etiam",
      authors: [
        "Dr. Seuss"
      ],
      publishedDate: 1999,
      description: "lorem molestie ut euismod ad quis mi ultricies nisl cursus suspendisse dui tempor sit suscipit metus etiam euismod tortor sagittis habitant",
      pageCount: 972,
      categories: [
        "Computers",
        "Hack"
      ],
      thumbnail: "http://coding-academy.org/books-photos/2.jpg",
      language: "he",
      listPrice: {
        amount: 108,
        currencyCode: "ILS",
        isOnSale: false
      },
      reviews: [
        { review: 'Amazing!', score: 10 },
        { review: 'Must read', score: 9 },
      ]
    },
    {
      id: "kSnfIJyikTP",
      title: "dictum",
      subtitle: "augue eu consectetur class curabitur conubia ligula in ullamcorper",
      authors: [
        "Danielle Steel"
      ],
      publishedDate: 1978,
      description: "interdum inceptos mauris habitant primis neque tempus lacus morbi auctor cras consectetur euismod vehicula neque netus enim vivamus augue molestie imperdiet tincidunt aliquam",
      pageCount: 303,
      categories: [
        "Computers",
        "Hack"
      ],
      thumbnail: "http://coding-academy.org/books-photos/16.jpg",
      language: "en",
      listPrice: {
        amount: 30,
        currencyCode: "EUR",
        isOnSale: true
      },
      reviews: [
        { review: 'Not good enoght', score: 2 },
        { review: 'It needs more work', score: 1 },
      ]
    },
    {
      id: "f4iuVmbuKCC",
      title: "sem himenaeos aptent",
      subtitle: "interdum per habitasse luctus purus est",
      authors: [
        "Dr. Seuss"
      ],
      publishedDate: 2011,
      description: "et vehicula faucibus amet accumsan lectus cras nulla cubilia arcu neque litora mi habitasse quis amet augue facilisis sed",
      pageCount: 337,
      categories: [
        "Computers",
        "Hack"
      ],
      thumbnail: "http://coding-academy.org/books-photos/12.jpg",
      language: "sp",
      listPrice: {
        amount: 19,
        currencyCode: "USD",
        isOnSale: false
      },
      reviews: [
        { review: 'Nothing makes sence', score: 0 },
        { review: 'Ive read better', score: 2 },
      ]
    },
    {
      id: "U2rfZO6oBZf",
      title: "mi ante posuere",
      subtitle: "sapien curae consectetur ultrices fringilla blandit ipsum curae faucibus",
      authors: [
        "Leo Tolstoy"
      ],
      publishedDate: 1978,
      description: "senectus habitant nam imperdiet nostra elit dapibus nisl adipiscing in",
      pageCount: 748,
      categories: [
        "Computers",
        "Hack"
      ],
      thumbnail: "http://coding-academy.org/books-photos/1.jpg",
      language: "en",
      listPrice: {
        amount: 91,
        currencyCode: "USD",
        isOnSale: true
      },
      reviews: [
        { review: 'Amazing!', score: 10 },
        { review: 'Ive read better!', score: 6 },
      ]
    },
    {
      id: "xI0wrXaaAcq",
      title: "non",
      subtitle: "leo tortor per dapibus mattis ut conubia porttitor ligula viverra",
      authors: [
        "Leo Tolstoy"
      ],
      publishedDate: 2011,
      description: "nec scelerisque id cursus platea sit ullamcorper bibendum ultrices tempus ante mi aliquet cras tortor dapibus dictum scelerisque",
      pageCount: 65,
      categories: [
        "Computers",
        "Hack"
      ],
      thumbnail: "http://coding-academy.org/books-photos/14.jpg",
      language: "he",
      listPrice: {
        amount: 90,
        currencyCode: "USD",
        isOnSale: false
      },
      reviews: [
        { review: 'Amazing!', score: 10 },
        { review: 'Ive read better!', score: 6 },
      ]
    },
    {
      id: "9laHCEdSpFy",
      title: "tristique",
      subtitle: "consectetur a eu tincidunt condimentum amet nisi",
      authors: [
        "Dr. Seuss"
      ],
      publishedDate: 1999,
      description: "magna quisque venenatis laoreet purus in semper habitant proin pellentesque sed egestas cursus faucibus nam enim id sit mi ligula risus curabitur senectus curabitur sodales fames sem",
      pageCount: 299,
      categories: [
        "Computers",
        "Hack"
      ],
      thumbnail: "http://coding-academy.org/books-photos/11.jpg",
      language: "he",
      listPrice: {
        amount: 176,
        currencyCode: "EUR",
        isOnSale: false
      },
      reviews: [
        { review: 'Amazing!', score: 10 },
        { review: 'Ive read better!', score: 6 },
      ]
    },
    {
      id: "nGhVwZvGCGp",
      title: "urna ornare gravida",
      subtitle: "sem vestibulum semper convallis pharetra tempor himenaeos ut",
      authors: [
        "Jin Yong"
      ],
      publishedDate: 2011,
      description: "porttitor nisl sodales id eu tellus venenatis laoreet auctor dictumst nulla",
      pageCount: 803,
      categories: [
        "Computers",
        "Hack"
      ],
      thumbnail: "http://coding-academy.org/books-photos/10.jpg",
      language: "sp",
      listPrice: {
        amount: 116,
        currencyCode: "USD",
        isOnSale: true
      },
      reviews: [
        { review: 'Amazing!', score: 10 },
        { review: 'Ive read better!', score: 6 },
      ]
    },
    {
      id: "Q8Q9Lsd03BD",
      title: "consequat neque volutpat",
      subtitle: "vel quis taciti fermentum feugiat ullamcorper curae praesent",
      authors: [
        "Dr. Seuss"
      ],
      publishedDate: 1978,
      description: "curabitur bibendum in dolor neque magna phasellus arcu nulla cubilia senectus maecenas ullamcorper neque accumsan facilisis dictumst ornare",
      pageCount: 891,
      categories: [
        "Computers",
        "Hack"
      ],
      thumbnail: "http://coding-academy.org/books-photos/5.jpg",
      language: "en",
      listPrice: {
        amount: 145,
        currencyCode: "EUR",
        isOnSale: false
      },
      reviews: [
        { review: 'Amazing!', score: 10 },
        { review: 'Ive read better!', score: 6 },
      ]
    },
    {
      id: "bd7a76kARao",
      title: "risus",
      subtitle: "pretium bibendum pharetra curabitur quisque dictumst",
      authors: [
        "Danielle Steel"
      ],
      publishedDate: 2018,
      description: "auctor amet nostra luctus molestie proin platea cubilia netus sed purus egestas a primis eu tristique interdum litora lorem venenatis mattis senectus",
      pageCount: 86,
      categories: [
        "Computers",
        "Hack"
      ],
      thumbnail: "http://coding-academy.org/books-photos/16.jpg",
      language: "sp",
      listPrice: {
        amount: 157,
        currencyCode: "ILS",
        isOnSale: true
      },
      reviews: [
        { review: 'Amazing!', score: 10 },
        { review: 'Ive read better!', score: 6 },
      ]
    },
    {
      id: "qKyG0vqeO3e",
      title: "interdum etiam vulputate",
      subtitle: "velit sapien eget tincidunt nunc tortor",
      authors: [
        "Danielle Steel"
      ],
      publishedDate: 2018,
      description: "aenean mauris porta netus accumsan turpis etiam vestibulum vivamus sagittis nullam nec tellus quam mattis est pellentesque nisi litora sit ad",
      pageCount: 882,
      categories: [
        "Computers",
        "Hack"
      ],
      thumbnail: "http://coding-academy.org/books-photos/17.jpg",
      language: "sp",
      listPrice: {
        amount: 57,
        currencyCode: "USD",
        isOnSale: true
      },
      reviews: [
        { review: 'Amazing!', score: 10 },
        { review: 'Ive read better!', score: 6 },
      ]
    },
    {
      id: "2RvT48ZNInj",
      title: "sagittis justo",
      subtitle: "etiam primis proin praesent placerat nisi fermentum nisi",
      authors: [
        "Agatha Christie"
      ],
      publishedDate: 2011,
      description: "nec faucibus arcu suspendisse tempus potenti lobortis aliquam quisque augue integer consectetur etiam ultrices curabitur tristique metus",
      pageCount: 598,
      categories: [
        "Computers",
        "Hack"
      ],
      thumbnail: "http://coding-academy.org/books-photos/8.jpg",
      language: "en",
      listPrice: {
        amount: 167,
        currencyCode: "ILS",
        isOnSale: false
      },
      reviews: [
        { review: 'Amazing!', score: 10 },
        { review: 'Ive read better!', score: 6 },
      ]
    },
    {
      id: "5z2s9pDXAYj",
      title: "quam ullamcorper himenaeos",
      subtitle: "ut placerat eu dapibus sapien sodales laoreet",
      authors: [
        "Danielle Steel"
      ],
      publishedDate: 1999,
      description: "etiam nec aliquam euismod platea vel laoreet quisque condimentum sapien neque ut aliquam torquent in nam",
      pageCount: 608,
      categories: [
        "Computers",
        "Hack"
      ],
      thumbnail: "http://coding-academy.org/books-photos/3.jpg",
      language: "he",
      listPrice: {
        amount: 150,
        currencyCode: "USD",
        isOnSale: true
      },
      reviews: [
        { review: 'Amazing!', score: 10 },
        { review: 'Ive read better!', score: 6 },
      ]
    },
    {
      id: "zBZu5cDEWha",
      title: "quis",
      subtitle: "suscipit turpis etiam turpis libero lobortis",
      authors: [
        "Jin Yong"
      ],
      publishedDate: 2011,
      description: "etiam pretium urna fusce lobortis curae viverra aptent metus semper nisi litora feugiat elementum purus nunc consequat lorem ultricies non primis phasellus sociosqu donec dolor",
      pageCount: 583,
      categories: [
        "Computers",
        "Hack"
      ],
      thumbnail: "http://coding-academy.org/books-photos/6.jpg",
      language: "en",
      listPrice: {
        amount: 58,
        currencyCode: "ILS",
        isOnSale: true
      },
      reviews: [
        { review: 'Amazing!', score: 10 },
        { review: 'Ive read better!', score: 6 },
      ]
    },
    {
      id: "aOI7tQuPZ2f",
      title: "aliquam aliquet dapibus",
      subtitle: "neque eu purus euismod placerat adipiscing odio egestas consequat",
      authors: [
        "Leo Tolstoy"
      ],
      publishedDate: 2011,
      description: "dolor morbi malesuada eleifend purus taciti sit interdum aliquet commodo ut libero tincidunt",
      pageCount: 497,
      categories: [
        "Computers",
        "Hack"
      ],
      thumbnail: "http://coding-academy.org/books-photos/7.jpg",
      language: "en",
      listPrice: {
        amount: 78,
        currencyCode: "USD",
        isOnSale: false
      },
      reviews: [
        { review: 'Amazing!', score: 10 },
        { review: 'Ive read better!', score: 6 },
      ]
    },
    {
      id: "WBooB82Uvwu",
      title: "class",
      subtitle: "elit enim ultricies amet imperdiet a molestie class elementum venenatis",
      authors: [
        "Danielle Steel"
      ],
      publishedDate: 1999,
      description: "rhoncus odio netus consectetur aenean hendrerit massa scelerisque elementum aptent lobortis pharetra maecenas quam nulla volutpat turpis non habitasse aenean ante sodales lobortis quisque libero imperdiet gravida eleifend nulla",
      pageCount: 804,
      categories: [
        "Computers",
        "Hack"
      ],
      thumbnail: "http://coding-academy.org/books-photos/10.jpg",
      language: "en",
      listPrice: {
        amount: 118,
        currencyCode: "ILS",
        isOnSale: false
      },
      reviews: [
        { review: 'Amazing!', score: 10 },
        { review: 'Ive read better!', score: 6 },
      ]
    },
    {
      id: "xm1z5bbZjlS",
      title: "vitae",
      subtitle: "class habitant at commodo semper ligula a bibendum",
      authors: [
        "Leo Tolstoy"
      ],
      publishedDate: 1999,
      description: "himenaeos quis iaculis orci libero egestas quam varius primis erat lacus facilisis blandit dictum tristique interdum litora quisque purus senectus pretium purus",
      pageCount: 231,
      categories: [
        "Computers",
        "Hack"
      ],
      thumbnail: "http://coding-academy.org/books-photos/12.jpg",
      language: "he",
      listPrice: {
        amount: 60,
        currencyCode: "EUR",
        isOnSale: false
      },
      reviews: [
        { review: 'Amazing!', score: 10 },
        { review: 'Ive read better!', score: 6 },
      ]
    },
    {
      id: "u3j6QIKLlJb",
      title: "rhoncus vivamus",
      subtitle: "nullam class risus amet senectus scelerisque etiam curabitur",
      authors: [
        "Agatha Christie"
      ],
      publishedDate: 1978,
      description: "torquent in et id lacus vivamus aptent cursus erat integer venenatis risus ac ante quam etiam euismod feugiat risus suscipit rhoncus pharetra quisque felis",
      pageCount: 652,
      categories: [
        "Computers",
        "Hack"
      ],
      thumbnail: "http://coding-academy.org/books-photos/20.jpg",
      language: "he",
      listPrice: {
        amount: 110,
        currencyCode: "USD",
        isOnSale: true
      },
      reviews: [
        { review: 'Amazing!', score: 10 },
        { review: 'Ive read better!', score: 6 },
      ]
    },
    {
      id: "vxYYYdVlEH3",
      title: "donec mi ullamcorper",
      subtitle: "varius malesuada augue molestie sollicitudin faucibus mi eu tempus",
      authors: [
        "William Shakespeare"
      ],
      publishedDate: 2011,
      description: "aliquet euismod mi vivamus bibendum donec etiam quisque iaculis ullamcorper est sed",
      pageCount: 904,
      categories: [
        "Computers",
        "Hack"
      ],
      thumbnail: "http://coding-academy.org/books-photos/2.jpg",
      language: "sp",
      listPrice: {
        amount: 186,
        currencyCode: "ILS",
        isOnSale: true
      },
      reviews: [
        { review: 'Amazing!', score: 10 },
        { review: 'Ive read better!', score: 6 },
      ]
    }
  ]

  console.log(defaultBooks)
  return defaultBooks
}


function getDemoAPIBooks(newBook){
  const url = `https://www.googleapis.com/books/v1/volumes?printType=books&q=${newBook}`
  return axios.get(url)
    .then(res => res.data.items)

}

// function getDemoAPIBooks() {
//   var apiBooks = [
//     {
//       "kind": "books#volume",
//       "id": "gW36ngEACAAJ",
//       "etag": "noRFhZi9/2A",
//       "selfLink": "https://www.googleapis.com/books/v1/volumes/gW36ngEACAAJ",
//       "volumeInfo": {
//         "title": "Harry Potter and the Sorcerer's Stone",
//         "authors": [
//           "J. K. Rowling"
//         ],
//         "publisher": "Arthur A. Levine Books",
//         "publishedDate": "2008",
//         "description": "Rescued from the outrageous neglect of his aunt and uncle, a young boy with a great destiny proves his worth while attending Hogwarts School for Wizards and Witches. 180,000 first printing.",
//         "industryIdentifiers": [
//           {
//             "type": "ISBN_10",
//             "identifier": "054506967X"
//           },
//           {
//             "type": "ISBN_13",
//             "identifier": "9780545069670"
//           }
//         ],
//         "readingModes": {
//           "text": false,
//           "image": false
//         },
//         "pageCount": 309,
//         "printType": "BOOK",
//         "categories": [
//           "Juvenile Fiction"
//         ],
//         "averageRating": 5,
//         "ratingsCount": 3,
//         "maturityRating": "NOT_MATURE",
//         "allowAnonLogging": false,
//         "contentVersion": "preview-1.0.0",
//         "imageLinks": {
//           "smallThumbnail": "http://books.google.com/books/content?id=gW36ngEACAAJ&printsec=frontcover&img=1&zoom=5&source=gbs_api",
//           "thumbnail": "http://books.google.com/books/content?id=gW36ngEACAAJ&printsec=frontcover&img=1&zoom=1&source=gbs_api"
//         },
//         "language": "en",
//         "previewLink": "http://books.google.com/books?id=gW36ngEACAAJ&dq=harryPoter&hl=&as_pt=BOOKS&cd=1&source=gbs_api",
//         "infoLink": "http://books.google.com/books?id=gW36ngEACAAJ&dq=harryPoter&hl=&as_pt=BOOKS&source=gbs_api",
//         "canonicalVolumeLink": "https://books.google.com/books/about/Harry_Potter_and_the_Sorcerer_s_Stone.html?hl=&id=gW36ngEACAAJ"
//       },
//       "saleInfo": {
//         "country": "IL",
//         "saleability": "NOT_FOR_SALE",
//         "isEbook": false
//       },
//       "accessInfo": {
//         "country": "IL",
//         "viewability": "NO_PAGES",
//         "embeddable": false,
//         "publicDomain": false,
//         "textToSpeechPermission": "ALLOWED",
//         "epub": {
//           "isAvailable": false
//         },
//         "pdf": {
//           "isAvailable": false
//         },
//         "webReaderLink": "http://play.google.com/books/reader?id=gW36ngEACAAJ&hl=&as_pt=BOOKS&printsec=frontcover&source=gbs_api",
//         "accessViewStatus": "NONE",
//         "quoteSharingAllowed": false
//       },
//       "searchInfo": {
//         "textSnippet": "Rescued from the outrageous neglect of his aunt and uncle, a young boy with a great destiny proves his worth while attending Hogwarts School for Wizards and Witches. 180,000 first printing."
//       }
//     },
//     {
//       "kind": "books#volume",
//       "id": "iWUTPwAACAAJ",
//       "etag": "SpS7E3GANqU",
//       "selfLink": "https://www.googleapis.com/books/v1/volumes/iWUTPwAACAAJ",
//       "volumeInfo": {
//         "title": "Harry Potter and the Deathly Hallows",
//         "authors": [
//           "J. K. Rowling"
//         ],
//         "publisher": "Large Print Press",
//         "publishedDate": "2009",
//         "description": "At a time when the forces of evil seem to be gaining the upper hand, Harry comes of age in the wizarding world, and must take on and defeat Voldemort--or be killed himself.",
//         "industryIdentifiers": [
//           {
//             "type": "ISBN_10",
//             "identifier": "1594133557"
//           },
//           {
//             "type": "ISBN_13",
//             "identifier": "9781594133558"
//           }
//         ],
//         "readingModes": {
//           "text": false,
//           "image": false
//         },
//         "pageCount": 969,
//         "printType": "BOOK",
//         "categories": [
//           "Juvenile Fiction"
//         ],
//         "averageRating": 4.5,
//         "ratingsCount": 3442,
//         "maturityRating": "NOT_MATURE",
//         "allowAnonLogging": false,
//         "contentVersion": "preview-1.0.0",
//         "panelizationSummary": {
//           "containsEpubBubbles": false,
//           "containsImageBubbles": false
//         },
//         "imageLinks": {
//           "smallThumbnail": "http://books.google.com/books/content?id=iWUTPwAACAAJ&printsec=frontcover&img=1&zoom=5&source=gbs_api",
//           "thumbnail": "http://books.google.com/books/content?id=iWUTPwAACAAJ&printsec=frontcover&img=1&zoom=1&source=gbs_api"
//         },
//         "language": "en",
//         "previewLink": "http://books.google.com/books?id=iWUTPwAACAAJ&dq=harryPoter&hl=&as_pt=BOOKS&cd=2&source=gbs_api",
//         "infoLink": "http://books.google.com/books?id=iWUTPwAACAAJ&dq=harryPoter&hl=&as_pt=BOOKS&source=gbs_api",
//         "canonicalVolumeLink": "https://books.google.com/books/about/Harry_Potter_and_the_Deathly_Hallows.html?hl=&id=iWUTPwAACAAJ"
//       },
//       "saleInfo": {
//         "country": "IL",
//         "saleability": "NOT_FOR_SALE",
//         "isEbook": false
//       },
//       "accessInfo": {
//         "country": "IL",
//         "viewability": "NO_PAGES",
//         "embeddable": false,
//         "publicDomain": false,
//         "textToSpeechPermission": "ALLOWED",
//         "epub": {
//           "isAvailable": false
//         },
//         "pdf": {
//           "isAvailable": false
//         },
//         "webReaderLink": "http://play.google.com/books/reader?id=iWUTPwAACAAJ&hl=&as_pt=BOOKS&printsec=frontcover&source=gbs_api",
//         "accessViewStatus": "NONE",
//         "quoteSharingAllowed": false
//       },
//       "searchInfo": {
//         "textSnippet": "At a time when the forces of evil seem to be gaining the upper hand, Harry comes of age in the wizarding world, and must take on and defeat Voldemort--or be killed himself."
//       }
//     },
//     {
//       "kind": "books#volume",
//       "id": "iO5pApw2JycC",
//       "etag": "nu5oeKVAbCk",
//       "selfLink": "https://www.googleapis.com/books/v1/volumes/iO5pApw2JycC",
//       "volumeInfo": {
//         "title": "The Ivory Tower and Harry Potter",
//         "subtitle": "Perspectives on a Literary Phenomenon",
//         "authors": [
//           "Lana A. Whited"
//         ],
//         "publisher": "University of Missouri Press",
//         "publishedDate": "2004",
//         "description": "Now available in paper, The Ivory Tower and Harry Potter is the first book-length analysis of J. K. Rowling's work from a broad range of perspectives within literature, folklore, psychology, sociology, and popular culture. A significant portion of the book explores the Harry Potter series' literary ancestors, including magic and fantasy works by Ursula K. LeGuin, Monica Furlong, Jill Murphy, and others, as well as previous works about the British boarding school experience. Other chapters explore the moral and ethical dimensions of Harry's world, including objections to the series raised within some religious circles. In her new epilogue, Lana A. Whited brings this volume up to date by covering Rowling's latest book, Harry Potter and the Order of the Phoenix.",
//         "industryIdentifiers": [
//           {
//             "type": "ISBN_10",
//             "identifier": "0826215491"
//           },
//           {
//             "type": "ISBN_13",
//             "identifier": "9780826215499"
//           }
//         ],
//         "readingModes": {
//           "text": true,
//           "image": true
//         },
//         "pageCount": 418,
//         "printType": "BOOK",
//         "categories": [
//           "Literary Criticism"
//         ],
//         "averageRating": 4.5,
//         "ratingsCount": 12,
//         "maturityRating": "NOT_MATURE",
//         "allowAnonLogging": false,
//         "contentVersion": "2.0.7.0.preview.3",
//         "panelizationSummary": {
//           "containsEpubBubbles": false,
//           "containsImageBubbles": false
//         },
//         "imageLinks": {
//           "smallThumbnail": "http://books.google.com/books/content?id=iO5pApw2JycC&printsec=frontcover&img=1&zoom=5&edge=curl&source=gbs_api",
//           "thumbnail": "http://books.google.com/books/content?id=iO5pApw2JycC&printsec=frontcover&img=1&zoom=1&edge=curl&source=gbs_api"
//         },
//         "language": "en",
//         "previewLink": "http://books.google.com/books?id=iO5pApw2JycC&pg=PA329&dq=harryPoter&hl=&as_pt=BOOKS&cd=3&source=gbs_api",
//         "infoLink": "http://books.google.com/books?id=iO5pApw2JycC&dq=harryPoter&hl=&as_pt=BOOKS&source=gbs_api",
//         "canonicalVolumeLink": "https://books.google.com/books/about/The_Ivory_Tower_and_Harry_Potter.html?hl=&id=iO5pApw2JycC"
//       },
//       "saleInfo": {
//         "country": "IL",
//         "saleability": "NOT_FOR_SALE",
//         "isEbook": false
//       },
//       "accessInfo": {
//         "country": "IL",
//         "viewability": "PARTIAL",
//         "embeddable": true,
//         "publicDomain": false,
//         "textToSpeechPermission": "ALLOWED",
//         "epub": {
//           "isAvailable": true,
//           "acsTokenLink": "http://books.google.com/books/download/The_Ivory_Tower_and_Harry_Potter-sample-epub.acsm?id=iO5pApw2JycC&format=epub&output=acs4_fulfillment_token&dl_type=sample&source=gbs_api"
//         },
//         "pdf": {
//           "isAvailable": false
//         },
//         "webReaderLink": "http://play.google.com/books/reader?id=iO5pApw2JycC&hl=&as_pt=BOOKS&printsec=frontcover&source=gbs_api",
//         "accessViewStatus": "SAMPLE",
//         "quoteSharingAllowed": false
//       },
//       "searchInfo": {
//         "textSnippet": "\u003cb\u003eHarry Potter\u003c/b\u003e and the Technology of Magic Elizabeth Teare The July / August \u003cbr\u003e\n2001 issue of Book lists J. K. Rowling as one of the ten most influential people in \u003cbr\u003e\npublishing . She shares space on this list with John Grisham and Oprah Winfrey&nbsp;..."
//       }
//     },
//     {
//       "kind": "books#volume",
//       "id": "DKcWE3WXoj8C",
//       "etag": "KsDDdaDlZZQ",
//       "selfLink": "https://www.googleapis.com/books/v1/volumes/DKcWE3WXoj8C",
//       "volumeInfo": {
//         "title": "Harry Potter and International Relations",
//         "authors": [
//           "Daniel H. Nexon",
//           "Iver B. Neumann"
//         ],
//         "publisher": "Rowman & Littlefield",
//         "publishedDate": "2006",
//         "description": "Drawing on a range of historical and sociological sources, this work shows how aspects of Harry's world contain aspects of our own. It also includes chapters on the political economy of the franchise, and on the problems of studying popular culture.",
//         "industryIdentifiers": [
//           {
//             "type": "ISBN_10",
//             "identifier": "0742539598"
//           },
//           {
//             "type": "ISBN_13",
//             "identifier": "9780742539594"
//           }
//         ],
//         "readingModes": {
//           "text": false,
//           "image": true
//         },
//         "pageCount": 245,
//         "printType": "BOOK",
//         "categories": [
//           "Literary Criticism"
//         ],
//         "averageRating": 3.5,
//         "ratingsCount": 7,
//         "maturityRating": "NOT_MATURE",
//         "allowAnonLogging": false,
//         "contentVersion": "preview-1.0.0",
//         "panelizationSummary": {
//           "containsEpubBubbles": false,
//           "containsImageBubbles": false
//         },
//         "imageLinks": {
//           "smallThumbnail": "http://books.google.com/books/content?id=DKcWE3WXoj8C&printsec=frontcover&img=1&zoom=5&edge=curl&source=gbs_api",
//           "thumbnail": "http://books.google.com/books/content?id=DKcWE3WXoj8C&printsec=frontcover&img=1&zoom=1&edge=curl&source=gbs_api"
//         },
//         "language": "en",
//         "previewLink": "http://books.google.com/books?id=DKcWE3WXoj8C&pg=PA4&dq=harryPoter&hl=&as_pt=BOOKS&cd=4&source=gbs_api",
//         "infoLink": "http://books.google.com/books?id=DKcWE3WXoj8C&dq=harryPoter&hl=&as_pt=BOOKS&source=gbs_api",
//         "canonicalVolumeLink": "https://books.google.com/books/about/Harry_Potter_and_International_Relations.html?hl=&id=DKcWE3WXoj8C"
//       },
//       "saleInfo": {
//         "country": "IL",
//         "saleability": "NOT_FOR_SALE",
//         "isEbook": false
//       },
//       "accessInfo": {
//         "country": "IL",
//         "viewability": "PARTIAL",
//         "embeddable": true,
//         "publicDomain": false,
//         "textToSpeechPermission": "ALLOWED",
//         "epub": {
//           "isAvailable": false
//         },
//         "pdf": {
//           "isAvailable": true,
//           "acsTokenLink": "http://books.google.com/books/download/Harry_Potter_and_International_Relations-sample-pdf.acsm?id=DKcWE3WXoj8C&format=pdf&output=acs4_fulfillment_token&dl_type=sample&source=gbs_api"
//         },
//         "webReaderLink": "http://play.google.com/books/reader?id=DKcWE3WXoj8C&hl=&as_pt=BOOKS&printsec=frontcover&source=gbs_api",
//         "accessViewStatus": "SAMPLE",
//         "quoteSharingAllowed": false
//       },
//       "searchInfo": {
//         "textSnippet": "markets have been recurring issues in the business of selling \u003cb\u003eHarry Potter\u003c/b\u003e in a \u003cbr\u003e\nglobal market. u Cultural historians and theorists also place \u003cb\u003eHarry Potter\u003c/b\u003e in the \u003cbr\u003e\ncontext of globalization. Some scholars link \u003cb\u003eHarry Potter\u003c/b\u003e to the &quot;\u003cbr\u003e\ncommercialization&quot; ot&nbsp;..."
//       }
//     },
//     {
//       "kind": "books#volume",
//       "id": "-__ICQemqaEC",
//       "etag": "Rl1nggo6TjI",
//       "selfLink": "https://www.googleapis.com/books/v1/volumes/-__ICQemqaEC",
//       "volumeInfo": {
//         "title": "Reading Harry Potter",
//         "subtitle": "Critical Essays",
//         "authors": [
//           "David G. Epstein"
//         ],
//         "publisher": "Greenwood Publishing Group",
//         "publishedDate": "2003",
//         "description": "The tropes and themes of J. K. Rowling's massively popular series are interpreted within the context of its audience.",
//         "industryIdentifiers": [
//           {
//             "type": "ISBN_10",
//             "identifier": "0313320675"
//           },
//           {
//             "type": "ISBN_13",
//             "identifier": "9780313320675"
//           }
//         ],
//         "readingModes": {
//           "text": true,
//           "image": true
//         },
//         "pageCount": 217,
//         "printType": "BOOK",
//         "categories": [
//           "Literary Criticism"
//         ],
//         "averageRating": 5,
//         "ratingsCount": 8,
//         "maturityRating": "NOT_MATURE",
//         "allowAnonLogging": false,
//         "contentVersion": "0.2.2.0.preview.3",
//         "panelizationSummary": {
//           "containsEpubBubbles": false,
//           "containsImageBubbles": false
//         },
//         "imageLinks": {
//           "smallThumbnail": "http://books.google.com/books/content?id=-__ICQemqaEC&printsec=frontcover&img=1&zoom=5&edge=curl&source=gbs_api",
//           "thumbnail": "http://books.google.com/books/content?id=-__ICQemqaEC&printsec=frontcover&img=1&zoom=1&edge=curl&source=gbs_api"
//         },
//         "language": "en",
//         "previewLink": "http://books.google.com/books?id=-__ICQemqaEC&pg=PA191&dq=harryPoter&hl=&as_pt=BOOKS&cd=5&source=gbs_api",
//         "infoLink": "http://books.google.com/books?id=-__ICQemqaEC&dq=harryPoter&hl=&as_pt=BOOKS&source=gbs_api",
//         "canonicalVolumeLink": "https://books.google.com/books/about/Reading_Harry_Potter.html?hl=&id=-__ICQemqaEC"
//       },
//       "saleInfo": {
//         "country": "IL",
//         "saleability": "NOT_FOR_SALE",
//         "isEbook": false
//       },
//       "accessInfo": {
//         "country": "IL",
//         "viewability": "PARTIAL",
//         "embeddable": true,
//         "publicDomain": false,
//         "textToSpeechPermission": "ALLOWED",
//         "epub": {
//           "isAvailable": true,
//           "acsTokenLink": "http://books.google.com/books/download/Reading_Harry_Potter-sample-epub.acsm?id=-__ICQemqaEC&format=epub&output=acs4_fulfillment_token&dl_type=sample&source=gbs_api"
//         },
//         "pdf": {
//           "isAvailable": true,
//           "acsTokenLink": "http://books.google.com/books/download/Reading_Harry_Potter-sample-pdf.acsm?id=-__ICQemqaEC&format=pdf&output=acs4_fulfillment_token&dl_type=sample&source=gbs_api"
//         },
//         "webReaderLink": "http://play.google.com/books/reader?id=-__ICQemqaEC&hl=&as_pt=BOOKS&printsec=frontcover&source=gbs_api",
//         "accessViewStatus": "SAMPLE",
//         "quoteSharingAllowed": false
//       },
//       "searchInfo": {
//         "textSnippet": "Most importantly, the \u003cb\u003eHarry Potter\u003c/b\u003e books resonate with gender stereotypes of the \u003cbr\u003e\nworst sort; as Christine Schoefer argues in her review of the first three books in \u003cbr\u003e\nthe series, &quot;From the beginning . . . , it is boys and men, wizards and sorcerers,&nbsp;..."
//       }
//     },
//     {
//       "kind": "books#volume",
//       "id": "abYKXvCwEToC",
//       "etag": "mhPPm/XAMi8",
//       "selfLink": "https://www.googleapis.com/books/v1/volumes/abYKXvCwEToC",
//       "volumeInfo": {
//         "title": "Harry Potter",
//         "subtitle": "The Story of a Global Business Phenomenon",
//         "authors": [
//           "S. Gunelius"
//         ],
//         "publisher": "Springer",
//         "publishedDate": "2008-06-03",
//         "description": "The Harry Potter books are the bestselling books of all time. In this fascinating study, Susan Gunelius analyzes every aspect of the brand phenomenon that is Harry Potter. Delving into price wars, box office revenue, and brand values, amongst other things, this is the story of the most incredible brand success there has ever been.",
//         "industryIdentifiers": [
//           {
//             "type": "ISBN_13",
//             "identifier": "9780230594104"
//           },
//           {
//             "type": "ISBN_10",
//             "identifier": "0230594107"
//           }
//         ],
//         "readingModes": {
//           "text": true,
//           "image": true
//         },
//         "pageCount": 194,
//         "printType": "BOOK",
//         "categories": [
//           "Business & Economics"
//         ],
//         "averageRating": 3,
//         "ratingsCount": 8,
//         "maturityRating": "NOT_MATURE",
//         "allowAnonLogging": true,
//         "contentVersion": "2.3.5.0.preview.3",
//         "panelizationSummary": {
//           "containsEpubBubbles": false,
//           "containsImageBubbles": false
//         },
//         "imageLinks": {
//           "smallThumbnail": "http://books.google.com/books/content?id=abYKXvCwEToC&printsec=frontcover&img=1&zoom=5&edge=curl&source=gbs_api",
//           "thumbnail": "http://books.google.com/books/content?id=abYKXvCwEToC&printsec=frontcover&img=1&zoom=1&edge=curl&source=gbs_api"
//         },
//         "language": "en",
//         "previewLink": "http://books.google.com/books?id=abYKXvCwEToC&pg=PR11&dq=harryPoter&hl=&as_pt=BOOKS&cd=6&source=gbs_api",
//         "infoLink": "http://books.google.com/books?id=abYKXvCwEToC&dq=harryPoter&hl=&as_pt=BOOKS&source=gbs_api",
//         "canonicalVolumeLink": "https://books.google.com/books/about/Harry_Potter.html?hl=&id=abYKXvCwEToC"
//       },
//       "saleInfo": {
//         "country": "IL",
//         "saleability": "NOT_FOR_SALE",
//         "isEbook": false
//       },
//       "accessInfo": {
//         "country": "IL",
//         "viewability": "PARTIAL",
//         "embeddable": true,
//         "publicDomain": false,
//         "textToSpeechPermission": "ALLOWED_FOR_ACCESSIBILITY",
//         "epub": {
//           "isAvailable": true,
//           "acsTokenLink": "http://books.google.com/books/download/Harry_Potter-sample-epub.acsm?id=abYKXvCwEToC&format=epub&output=acs4_fulfillment_token&dl_type=sample&source=gbs_api"
//         },
//         "pdf": {
//           "isAvailable": true,
//           "acsTokenLink": "http://books.google.com/books/download/Harry_Potter-sample-pdf.acsm?id=abYKXvCwEToC&format=pdf&output=acs4_fulfillment_token&dl_type=sample&source=gbs_api"
//         },
//         "webReaderLink": "http://play.google.com/books/reader?id=abYKXvCwEToC&hl=&as_pt=BOOKS&printsec=frontcover&source=gbs_api",
//         "accessViewStatus": "SAMPLE",
//         "quoteSharingAllowed": false
//       },
//       "searchInfo": {
//         "textSnippet": "Dissecting the success of J.K. Rowling and the \u003cb\u003eHarry Potter\u003c/b\u003e series from a \u003cbr\u003e\nbusiness perspective is an interesting challenge. The business and societal \u003cbr\u003e\neffects of a trend that becomes a phenomenon are far-reaching and often deeply \u003cbr\u003e\nemotional."
//       }
//     },
//     {
//       "kind": "books#volume",
//       "id": "BoX-6R21MgQC",
//       "etag": "i4QbhfQKJUA",
//       "selfLink": "https://www.googleapis.com/books/v1/volumes/BoX-6R21MgQC",
//       "volumeInfo": {
//         "title": "The Psychology of Harry Potter",
//         "subtitle": "An Unauthorized Examination Of The Boy Who Lived",
//         "authors": [
//           "Neil Mulholland"
//         ],
//         "publisher": "BenBella Books, Inc.",
//         "publishedDate": "2009-06-22",
//         "description": "Harry Potter has provided a portal to the wizarding world for millions of readers, but an examination of Harry, his friends and his enemies will take us on yet another journey: through the psyche of the Muggle (and wizard!) mind. The twists and turns of the series, as well as the psychological depth and complexity of J. K. Rowling’s characters, have kept fans enthralled with and puzzling over the many mysteries that permeate Hogwarts and beyond: Do the Harry Potter books encourage disobedience? Why is everyone so fascinated by Professor Lupin? What exactly will Harry and his friends do when they finally pass those N.E.W.T.s? Do even wizards live by the ticking of the clock? Is Harry destined to end up alone? And why did it take Ron and Hermione so long to get together? Now, in The Psychology of Harry Potter, leading psychologists delve into the ultimate Chamber of Secrets, analyzing human mind and motivation by examining the themes and characters that make the Harry Potter books the bestselling fantasy series of all time. Grab a spot on the nearest couch, and settle in for some fresh revelations about our favorite young wizard!",
//         "industryIdentifiers": [
//           {
//             "type": "ISBN_13",
//             "identifier": "9781935251378"
//           },
//           {
//             "type": "ISBN_10",
//             "identifier": "1935251376"
//           }
//         ],
//         "readingModes": {
//           "text": true,
//           "image": true
//         },
//         "pageCount": 326,
//         "printType": "BOOK",
//         "categories": [
//           "Psychology"
//         ],
//         "averageRating": 3.5,
//         "ratingsCount": 10,
//         "maturityRating": "NOT_MATURE",
//         "allowAnonLogging": true,
//         "contentVersion": "1.1.2.0.preview.3",
//         "panelizationSummary": {
//           "containsEpubBubbles": false,
//           "containsImageBubbles": false
//         },
//         "imageLinks": {
//           "smallThumbnail": "http://books.google.com/books/content?id=BoX-6R21MgQC&printsec=frontcover&img=1&zoom=5&edge=curl&source=gbs_api",
//           "thumbnail": "http://books.google.com/books/content?id=BoX-6R21MgQC&printsec=frontcover&img=1&zoom=1&edge=curl&source=gbs_api"
//         },
//         "language": "en",
//         "previewLink": "http://books.google.com/books?id=BoX-6R21MgQC&pg=PA233&dq=harryPoter&hl=&as_pt=BOOKS&cd=7&source=gbs_api",
//         "infoLink": "http://books.google.com/books?id=BoX-6R21MgQC&dq=harryPoter&hl=&as_pt=BOOKS&source=gbs_api",
//         "canonicalVolumeLink": "https://books.google.com/books/about/The_Psychology_of_Harry_Potter.html?hl=&id=BoX-6R21MgQC"
//       },
//       "saleInfo": {
//         "country": "IL",
//         "saleability": "NOT_FOR_SALE",
//         "isEbook": false
//       },
//       "accessInfo": {
//         "country": "IL",
//         "viewability": "PARTIAL",
//         "embeddable": true,
//         "publicDomain": false,
//         "textToSpeechPermission": "ALLOWED",
//         "epub": {
//           "isAvailable": true,
//           "acsTokenLink": "http://books.google.com/books/download/The_Psychology_of_Harry_Potter-sample-epub.acsm?id=BoX-6R21MgQC&format=epub&output=acs4_fulfillment_token&dl_type=sample&source=gbs_api"
//         },
//         "pdf": {
//           "isAvailable": true,
//           "acsTokenLink": "http://books.google.com/books/download/The_Psychology_of_Harry_Potter-sample-pdf.acsm?id=BoX-6R21MgQC&format=pdf&output=acs4_fulfillment_token&dl_type=sample&source=gbs_api"
//         },
//         "webReaderLink": "http://play.google.com/books/reader?id=BoX-6R21MgQC&hl=&as_pt=BOOKS&printsec=frontcover&source=gbs_api",
//         "accessViewStatus": "SAMPLE",
//         "quoteSharingAllowed": false
//       },
//       "searchInfo": {
//         "textSnippet": "Lyubansky examines the question of racial prejudice in the world of \u003cb\u003eHarry Potter\u003c/b\u003e. \u003cbr\u003e\nRowling portrays a race-blind society at Hogwarts but pursues the issue of race \u003cbr\u003e\nthrough proxy: the hatred of the pure- bloods for the “Mudbloods” and the slavery\u003cbr\u003e\n&nbsp;..."
//       }
//     },
//     {
//       "kind": "books#volume",
//       "id": "rQy-zQEACAAJ",
//       "etag": "7SQpShVgO6Y",
//       "selfLink": "https://www.googleapis.com/books/v1/volumes/rQy-zQEACAAJ",
//       "volumeInfo": {
//         "title": "Harry Potter Trivia Book",
//         "subtitle": "Bonus Spells, Facts, Potions, Quizzes & Butterbeer Recipe",
//         "authors": [
//           "Amina Gerhold"
//         ],
//         "publishedDate": "2020-08-10",
//         "description": "I am excited about how popular Harry Potter trivia nights are becoming. Of course, we Harry Potter fans know too much not to do anything with all that knowledge. And now, anyone can have their own Harry Potter trivia ultimate list. You can always claim to be an expert in Harry Potter's wizardry. But can you prove it? We have seven books and eight incredible movies from J. K. Rowling on the exciting adventures of Harry Potter. You certainly cannot know everything about the world of wizarding, right? However, you can get some good ways to actually test your knowledge of magic. Go through this ultimate trivia of seven levels, comprising thirty questions at each level. You can enjoy it alone or with a couple of friends. You'll even see a wizarding marking guide, where you can access your grades. Then you'll know whether or not you are smarter than Hermione. ★★ Look at the following examples of the questions: Which sweet shop was at Hogsmeade? When the first book ended, what gift did Harry receive from Hagrid? Where are all of Dumbledore's memories kept? If you want to clear out a Dementor, what spell would you throw? How much do you have to pay for a ticket on the Knight Bus if it comes with hot chocolate? ★★ Also in the book, in addition to the quiz, you will find: Interesting facts about Harry Potter books, movies, and actors. Lists of spells with a description of what they are used for. A list of 7 powerful potions. And finally, a recipe for delicious cream beer. Have fun with our collection of interesting Harry Potter trivia!",
//         "industryIdentifiers": [
//           {
//             "type": "ISBN_13",
//             "identifier": "9798673994481"
//           }
//         ],
//         "readingModes": {
//           "text": false,
//           "image": false
//         },
//         "pageCount": 220,
//         "printType": "BOOK",
//         "maturityRating": "NOT_MATURE",
//         "allowAnonLogging": false,
//         "contentVersion": "preview-1.0.0",
//         "panelizationSummary": {
//           "containsEpubBubbles": false,
//           "containsImageBubbles": false
//         },
//         "imageLinks": {
//           "smallThumbnail": "http://books.google.com/books/content?id=rQy-zQEACAAJ&printsec=frontcover&img=1&zoom=5&source=gbs_api",
//           "thumbnail": "http://books.google.com/books/content?id=rQy-zQEACAAJ&printsec=frontcover&img=1&zoom=1&source=gbs_api"
//         },
//         "language": "en",
//         "previewLink": "http://books.google.com/books?id=rQy-zQEACAAJ&dq=harryPoter&hl=&as_pt=BOOKS&cd=8&source=gbs_api",
//         "infoLink": "http://books.google.com/books?id=rQy-zQEACAAJ&dq=harryPoter&hl=&as_pt=BOOKS&source=gbs_api",
//         "canonicalVolumeLink": "https://books.google.com/books/about/Harry_Potter_Trivia_Book.html?hl=&id=rQy-zQEACAAJ"
//       },
//       "saleInfo": {
//         "country": "IL",
//         "saleability": "NOT_FOR_SALE",
//         "isEbook": false
//       },
//       "accessInfo": {
//         "country": "IL",
//         "viewability": "NO_PAGES",
//         "embeddable": false,
//         "publicDomain": false,
//         "textToSpeechPermission": "ALLOWED",
//         "epub": {
//           "isAvailable": false
//         },
//         "pdf": {
//           "isAvailable": false
//         },
//         "webReaderLink": "http://play.google.com/books/reader?id=rQy-zQEACAAJ&hl=&as_pt=BOOKS&printsec=frontcover&source=gbs_api",
//         "accessViewStatus": "NONE",
//         "quoteSharingAllowed": false
//       },
//       "searchInfo": {
//         "textSnippet": "Then you&#39;ll know whether or not you are smarter than Hermione. ★★ Look at the following examples of the questions: Which sweet shop was at Hogsmeade? When the first book ended, what gift did Harry receive from Hagrid?"
//       }
//     },
//     {
//       "kind": "books#volume",
//       "id": "c_KYSDoCYQ4C",
//       "etag": "Q2KJkJzcscw",
//       "selfLink": "https://www.googleapis.com/books/v1/volumes/c_KYSDoCYQ4C",
//       "volumeInfo": {
//         "title": "The Magic of Harry Potter",
//         "authors": [
//           "Daniel Mitchell"
//         ],
//         "publisher": "Lulu.com",
//         "publishedDate": "2007-12-01",
//         "description": "The Harry Potter books by J. K. Rowling have been phenomenal bestsellers winning fans world wide. These essays look at the magic, literary devices and moral themes in the Harry Potter series. In addition, the controversy between Christians over the moral themes is discussed.",
//         "industryIdentifiers": [
//           {
//             "type": "ISBN_13",
//             "identifier": "9780615172828"
//           },
//           {
//             "type": "ISBN_10",
//             "identifier": "0615172822"
//           }
//         ],
//         "readingModes": {
//           "text": true,
//           "image": true
//         },
//         "pageCount": 108,
//         "printType": "BOOK",
//         "categories": [
//           "Fiction"
//         ],
//         "maturityRating": "NOT_MATURE",
//         "allowAnonLogging": false,
//         "contentVersion": "0.1.2.0.preview.3",
//         "imageLinks": {
//           "smallThumbnail": "http://books.google.com/books/content?id=c_KYSDoCYQ4C&printsec=frontcover&img=1&zoom=5&edge=curl&source=gbs_api",
//           "thumbnail": "http://books.google.com/books/content?id=c_KYSDoCYQ4C&printsec=frontcover&img=1&zoom=1&edge=curl&source=gbs_api"
//         },
//         "language": "en",
//         "previewLink": "http://books.google.com/books?id=c_KYSDoCYQ4C&pg=PA91&dq=harryPoter&hl=&as_pt=BOOKS&cd=9&source=gbs_api",
//         "infoLink": "http://books.google.com/books?id=c_KYSDoCYQ4C&dq=harryPoter&hl=&as_pt=BOOKS&source=gbs_api",
//         "canonicalVolumeLink": "https://books.google.com/books/about/The_Magic_of_Harry_Potter.html?hl=&id=c_KYSDoCYQ4C"
//       },
//       "saleInfo": {
//         "country": "IL",
//         "saleability": "NOT_FOR_SALE",
//         "isEbook": false
//       },
//       "accessInfo": {
//         "country": "IL",
//         "viewability": "PARTIAL",
//         "embeddable": true,
//         "publicDomain": false,
//         "textToSpeechPermission": "ALLOWED",
//         "epub": {
//           "isAvailable": true,
//           "acsTokenLink": "http://books.google.com/books/download/The_Magic_of_Harry_Potter-sample-epub.acsm?id=c_KYSDoCYQ4C&format=epub&output=acs4_fulfillment_token&dl_type=sample&source=gbs_api"
//         },
//         "pdf": {
//           "isAvailable": false
//         },
//         "webReaderLink": "http://play.google.com/books/reader?id=c_KYSDoCYQ4C&hl=&as_pt=BOOKS&printsec=frontcover&source=gbs_api",
//         "accessViewStatus": "SAMPLE",
//         "quoteSharingAllowed": false
//       },
//       "searchInfo": {
//         "textSnippet": "There are many themes in \u003cb\u003eHarry Potter\u003c/b\u003e, but all the themes are woven together \u003cbr\u003e\nlike a tapestry. The threads intertwine and crisscross each other such that if you \u003cbr\u003e\nfollow any one of them it will eventually intersect with the main thread. That one&nbsp;..."
//       }
//     },
//     {
//       "kind": "books#volume",
//       "id": "K5zOroHn_LYC",
//       "etag": "I3YxR/uoJmk",
//       "selfLink": "https://www.googleapis.com/books/v1/volumes/K5zOroHn_LYC",
//       "volumeInfo": {
//         "title": "The Harry Potter Companion",
//         "authors": [
//           "Acascias Riphouse"
//         ],
//         "publisher": "Virtualbookworm Publishing",
//         "publishedDate": "2004-07",
//         "description": "This is a magical, unofficial companion to the \"Harry Potter\" series that will help you enjoy the adventures more thoroughly. Learn about the wizard lifestyle, get to know Hogwarts inside and out and discover everything you ever wanted to know about Animagi. Descriptions, definitions, maps, timelines and additional commentary will guide you every step of the way.",
//         "industryIdentifiers": [
//           {
//             "type": "ISBN_10",
//             "identifier": "1589395824"
//           },
//           {
//             "type": "ISBN_13",
//             "identifier": "9781589395824"
//           }
//         ],
//         "readingModes": {
//           "text": false,
//           "image": true
//         },
//         "pageCount": 537,
//         "printType": "BOOK",
//         "categories": [
//           "Literary Criticism"
//         ],
//         "averageRating": 5,
//         "ratingsCount": 1,
//         "maturityRating": "NOT_MATURE",
//         "allowAnonLogging": false,
//         "contentVersion": "0.1.1.0.preview.1",
//         "panelizationSummary": {
//           "containsEpubBubbles": false,
//           "containsImageBubbles": false
//         },
//         "imageLinks": {
//           "smallThumbnail": "http://books.google.com/books/content?id=K5zOroHn_LYC&printsec=frontcover&img=1&zoom=5&edge=curl&source=gbs_api",
//           "thumbnail": "http://books.google.com/books/content?id=K5zOroHn_LYC&printsec=frontcover&img=1&zoom=1&edge=curl&source=gbs_api"
//         },
//         "language": "en",
//         "previewLink": "http://books.google.com/books?id=K5zOroHn_LYC&pg=PA64&dq=harryPoter&hl=&as_pt=BOOKS&cd=10&source=gbs_api",
//         "infoLink": "http://books.google.com/books?id=K5zOroHn_LYC&dq=harryPoter&hl=&as_pt=BOOKS&source=gbs_api",
//         "canonicalVolumeLink": "https://books.google.com/books/about/The_Harry_Potter_Companion.html?hl=&id=K5zOroHn_LYC"
//       },
//       "saleInfo": {
//         "country": "IL",
//         "saleability": "NOT_FOR_SALE",
//         "isEbook": false
//       },
//       "accessInfo": {
//         "country": "IL",
//         "viewability": "PARTIAL",
//         "embeddable": true,
//         "publicDomain": false,
//         "textToSpeechPermission": "ALLOWED",
//         "epub": {
//           "isAvailable": false
//         },
//         "pdf": {
//           "isAvailable": false
//         },
//         "webReaderLink": "http://play.google.com/books/reader?id=K5zOroHn_LYC&hl=&as_pt=BOOKS&printsec=frontcover&source=gbs_api",
//         "accessViewStatus": "SAMPLE",
//         "quoteSharingAllowed": false
//       },
//       "searchInfo": {
//         "textSnippet": "\u003cb\u003eHarry Potter\u003c/b\u003e : His broomstick was a Nimbus 2000 from Sep 91 - Nov 93 . After it \u003cbr\u003e\nwas destroyed , he received a Firebolt from Sirius , Dec 25 , 1993 , which he \u003cbr\u003e\ncontinues to ride . Ravenclaw Team : All team members rode the Cleansweep 7 \u003cbr\u003e\nin 93&nbsp;..."
//       }
//     }
//   ]

//   // return apiBooks
//   return Promise.resolve(apiBooks)
// }

