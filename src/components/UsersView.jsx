import { useState, useEffect } from 'react';


export function UsersView() {
  let [data, setData] = useState([]);
  useEffect(() => {
    async function getResponse() {
      const res = await fetch('https://jsonplaceholder.typicode.com/users');
      const parsed = await res.json();
      setData(parsed.slice(0, 10));
    }
    getResponse();
  }, []);
  console.log(data);

  return (
    <div className='albums-list'>
      {data.map((item) => (
        <div key={item.id} className='album'>
          <div className='album-title'>{item.title}</div>
          <div className='album-info'>some image</div>
        </div>

      ))}
    </div>
  );
}