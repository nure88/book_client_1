import { use} from 'react';


// import required modules
import { EffectCoverflow, Pagination } from 'swiper/modules';
import SingleHomeCard from '../singlehomeCard/SingleHomeCard';

export default function HomeCard({bookPromise}) {
const books = use(bookPromise);
console.log(books);

  
  return (
    <>
     
     <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 bg-[#ECF4E8] mt-2'>
       {
        books.map((book)=> <SingleHomeCard key={book._id} book={book}/>)
      }
     </div>
       
        
      
    </>
  );
}
