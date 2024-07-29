import { useState, useEffect } from "react";
import { db } from "../FiberBase";

const Dashboard = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const ref = db.collection("data");
      const snapshot = await ref.get();
      const data = snapshot.docs.map((doc) => doc.data());
      setData(data);
    };
    fetchData();
  }, []);

  return (
    <div>
      <h1>Dashboard</h1>
      <ul>
        {data.map((item) => (
          <li key={item.id}>{item.name}</li>
        ))}
      </ul>
    </div>
  );
};

export default Dashboard;
