import React, { useEffect, useState } from 'react';
import axios from 'axios';
import Spinner from '../components/Spinner';
import { Link } from 'react-router-dom';
import { AiOutlineEdit } from 'react-icons/ai';
import { BsInfoCircle } from 'react-icons/bs';
import { MdOutlineAddBox, MdOutlineDelete } from 'react-icons/md';
import BooksTable from '../components/home/BooksTable';


const Home = () => {
    const [books, setBooks] = useState([]);
    const [loading, setLoading] = useState(false);
    const [showType, setShowType] = useState('table');
  
    useEffect(() => {
      setLoading(true);
      axios
        .get('http://localhost:5555/books')
        .then((response) => {
          setBooks(response.data.data);
          setLoading(false);
        })
        .catch((error) => {
          console.log(error);
          setLoading(false);
        });
    }, []);


    return (<div class="h-screen p-8 bg-[url('https://i.guim.co.uk/img/media/d305370075686a053b46f5c0e6384e32b3c00f97/0_50_5231_3138/master/5231.jpg?width=1200&quality=85&auto=format&fit=max&s=dfc589d3712148263b1dd1cb02707e91')]">
        <div className='p-4 bg-gradient-to-r from-indigo-500 from-10% via-sky-500 via-30% to-emerald-500 to-90% ...'>
          {/* <div className='flex justify-center items-center gap-x-40'>
            <button
              className='bg-sky-300 hover:bg-sky-600 px-4 py-1 rounded-lg'
              onClick={() => setShowType('table')}
            >
              Table
            </button>
            <button
              className='bg-sky-300 hover:bg-sky-600 px-4 py-1 rounded-lg'
              onClick={() => setShowType('card')}
            >
              Card
            </button>
          </div> */}
          <div className='flex justify-between items-center'>
            <h1 className='text-5xl font-bold my-8'>Books List</h1>
            <Link to='/books/create'>
              <MdOutlineAddBox className='text-sky-800 text-4xl' />
            </Link>
          </div>
            <BooksTable books={books} />
        </div>
        </div>
      );
    };
    
    export default Home;
