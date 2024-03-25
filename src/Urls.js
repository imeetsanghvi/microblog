let baseurl = ""
// My Local host data
//  SUpports all operations
baseurl = "http://localhost:8000/blogs"

// My local host data but deployed to github
// Only support read/get, emulates the write delete patch
baseurl = "https://my-json-server.typicode.com/imeetsanghvi/microblog-demo-server/blogs"

// Open source Free Fake Reliable API For Testing and Prototyping
// Only support read/get, emulates the write delete patch
baseurl = "https://jsonplaceholder.typicode.com/posts/"

// JSONServer.io work in progress
// will support all operations online
export default baseurl