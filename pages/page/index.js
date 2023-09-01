import React, { useEffect, useState } from 'react';
import Link from 'next/link';
import axios from 'axios';
import Date from '@/components/Date';

function index() {
    const [users, setUsers] = useState([]);
    useEffect(() => {
      let url = (`http://localhost/wp-headless/wordpress/wp-json/wp/v2/pages?per_page=19`);
      axios.get(url).then((res) => {
        const { data } = res;
        setUsers(data);
      });
  
    }, []);
  console.log(users);
    return (
       
        <ul>
        {
          Object.keys(users).length ? users.map(post => {
            return (
              <>
              <li key={post.id} className='grid grid-cols-5 gap-4 mb-4 '>
                <div className='col-span-2'>
                    <img src={post.fimg_url} className='w-full h-64 object-cover rounded-xl'/>
                </div>
                <div className='col-span-3'>
                 <Link href={`/page/${post.id}`}>
                  <h1 className='py-4 text-blue-400 text-2xl hover:text-blue-600  '>
                    {post.title.rendered}
                  </h1>
                  </Link>
                  <div className='py-4'>
                    {post.status} on <Date dateString={post.date}/>
                  </div>
                  <Link href={`/page/${post.id}`}>
                  <div className='text-lg' dangerouslySetInnerHTML={{ __html: post.excerpt.rendered }}></div>
                  </Link>
                </div>
              </li>

              </>
            )
          }) : (
            <div className='col-span-3 w-5 h-5 absolute left-1/2 top-1/2 rounded-full border-2 border-b-0 border-blue-500 animate-spin' />

          )

        }

    </ul>
        

    )
}

export default index
