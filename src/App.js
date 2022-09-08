import { useState } from "react";
import "./style.css";
function App() {
  const [data, setData] = useState([
    { id: 1, nomi: "kartoshka", narxi: 4230, sanoq: 0 },
    { id: 2, nomi: "pamidor", narxi: 1950, sanoq: 0 },
    { id: 3, nomi: "piyoz", narxi: 3500, sanoq: 0 },
    { id: 4, nomi: "sabzi", narxi: 4500, sanoq: 0 },
    { id: 5, nomi: "qovoq", narxi: 2800, sanoq: 0 },
    { id: 6, nomi: "karam", narxi: 1900, sanoq: 0 },
    { id: 7, nomi: "shalg'am", narxi: 4300, sanoq: 0 },
    { id: 8, nomi: "baqlajon", narxi: 1700, sanoq: 0 },
  ]);
  const [modal, setModal] = useState(true);
  function minus(i) {
    if (i.sanoq > 0) {
      setData(
        data.map((p) => (i.id === p.id ? { ...p, sanoq: i.sanoq - 1 } : p))
      );
    }
  }
  function plus(i) {
    setData(
      data.map((p) => (i.id === p.id ? { ...p, sanoq: i.sanoq + 1 } : p))
    );
  }

  let ochir = (i) => {
    let filt = data.filter((item) => item !== i);
    setData(filt);
  };

  let modalFunc = () => {
    setModal(!modal);
  };

  return (
    <>
      <div>
        <button onClick={modalFunc}> malumot qo'shish </button>
      </div>
      <div className={modal ? "modal_oyna" : "modal_oyna active"} onClick={() => setModal(false)} >
        <form onClick={(e) => e.stopPropagation()}></form>
      </div>
      <table border={1}>
        <thead>
          <tr>
            <th>№</th>
            <th>nomi</th>
            <th>narxi (so'm) </th>
            <th>total</th>
            <th colSpan={3}>soni</th>
            <th colSpan={2}>action</th>
          </tr>
        </thead>
        <tbody>
          {data.map((item, index) => (
            <tr key={index}>
              <td>{index + 1}</td>
              <td>{item.nomi}</td>
              <td>{item.narxi} so'm</td>
              <td>{item.narxi * item.sanoq} so'm</td>
              <td>
                <button onClick={() => minus(item)}>-</button>
              </td>
              <td>{item.sanoq}</td>
              <td>
                <button className="green" onClick={() => plus(item)}>
                  +
                </button>
              </td>
              <td>
                <button className="green">edit</button>
              </td>
              <td>
                <button onClick={() => ochir(item)}>delete</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </>
  );
}

export default App;
