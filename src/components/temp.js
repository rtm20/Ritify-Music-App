
  //   const [page, setPage] = useState(0);

  // //import the data from the data.js file and store it in a state.
  // const [songs] = useState(trackList);

  // //number of records to be displayed per page should be fixed.
  // const songsPerPage = 2;

  // //track the number of pages visited by the user.
  // const numberOfsongsVistited = page *  songsPerPage;

  // const displaySongs = songs
  //   .slice(
  //     numberOfsongsVistited,
  //     numberOfsongsVistited +  songsPerPage // 6+3
  //   ) //mapped into the displayEmployees. This will be used to render the records on the UI. 
  //   .map((temp)=>trackList.map((index) => {


  // const totalPages = Math.ceil(songs.length / songsPerPage);
// console.log("total pages are :");
// console.log(totalPages);

// const changePage = ({ selected }) => {
//   setPage(selected);
// };

// return (
//  <div>
//     {displaySongs} 

//     <ReactPaginate
//     // important props define the functionaity of pagination
//       previousLabel={"Previous"}
//       nextLabel={"Next"}
//       pageCount={totalPages}
//       onPageChange={changePage}
      
//       // the remaining props define the CSS properties 
//       containerClassName={"navigationButtons"}
//       previousLinkClassName={"previousButton"}
//       nextLinkClassName={"nextButton"}
//       disabledClassName={"navigationDisabled"}
//       activeClassName={"navigationActive"}
//     />
//     ;
//   </div>
// );