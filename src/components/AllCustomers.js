import React, { useState, useEffect } from 'react';
import { collection, getDocs } from 'firebase/firestore';
import { database } from '../firebaseConfig';
import '../styles/allcustomers.css';

const AllCustomers = () => {
  const data = collection(database, 'customers');
  const [done, setDone] = useState([]);

  const getCustomers = async () => {
    const res = await getDocs(data);
    const done = res.docs.map((item) => {
      return { ...item.data() };
    });
    setDone(done);
  };

  useEffect(() => {
    const fetchData = async () => {
      await getCustomers();
    };

    fetchData();
  }, []); // Empty dependency array, indicating this effect runs only once

  return (
    <>
      <div></div>

      <table className='customers_table'>
        <thead>
          <tr className='headings'>
            <th>Serial number</th>
            <th>Name</th>
            <th>Account number</th>
            <th>Balance</th>
          </tr>
        </thead>
        <tbody>
          {done.map((item, i) => {
            return (
              <tr key={i} className='values'>
                <td>{i + 1}</td>
                <td>{item.name}</td>
                <td>{item.account_number}</td>
                <td>{item.balance}</td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </>
  );
};

export default AllCustomers;
