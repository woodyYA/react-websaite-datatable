import React, { useEffect, useState } from 'react';

const DataTable = () => {
  const [data, setData] = useState([])

  useEffect(() => {
    fetch('/DataJSON.json')
      .then(res => res.json())
      .then(data => setData(data))
      .catch(error => console.error('Error fetching the data:', error));
  }, []);

  return (
    <div>
      <table>
        <thead>
          <tr>
            <th>NO.</th>
            <th>TITLE</th>
            <th>CONTENT</th>
          </tr>
        </thead>
        <tbody>
          {data.map((item, i) => (
            <tr key={i}>
              <td>{item.id}</td>
              <td>{item.title}</td>
              <td>{item.body}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default DataTable;
