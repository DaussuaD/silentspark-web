import React, { useState, useEffect } from "react";
import axios from "axios";
import "../../assets/css/pesanan.css";

const Pesanan = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedStatuses, setSelectedStatuses] = useState([]);
  const [isFilterDropdownVisible, setIsFilterDropdownVisible] = useState(false);
  const [ordersData, setOrdersData] = useState([]);

  useEffect(() => {
    const token = localStorage.getItem("token");
    axios
      .get("http://localhost:3000/pesanan", {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })
      .then((response) => {
        setOrdersData(response.data.data);
        console.log(ordersData);
      })
      .catch((error) => {
        console.error("Error fetching orders:", error);
        setOrdersData([]);
      });
  }, []);

  const handleSearch = (event) => {
    setSearchTerm(event.target.value);
  };

  const handleStatusChange = (event) => {
    const status = event.target.value;
    setSelectedStatuses((prevStatuses) =>
      prevStatuses.includes(status)
        ? prevStatuses.filter((s) => s !== status)
        : [...prevStatuses, status],
    );
  };

  const toggleFilterDropdown = () => {
    setIsFilterDropdownVisible(!isFilterDropdownVisible);
  };

  const handleDeleteOrder = async (orderId) => {
    try {
      const token = localStorage.getItem("token");
      await axios.delete(`http://localhost:3000/pesanan/${orderId}`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });

      // Remove the deleted order from the state
      setOrdersData((prevOrders) => prevOrders.filter(order => order.id !== orderId));
    } catch (error) {
      console.error("Error deleting order:", error);
    }
  };

  const filteredOrders = ordersData.filter(
    (order) =>
      (order.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
        order.phone.includes(searchTerm)) &&
      (selectedStatuses.length === 0 ||
        selectedStatuses.includes(order.status)),
  );

  return (
    <div className="orders-container">
      <h3 className="fw-bold">Daftar Pesanan</h3>
      <div className="filter-container">
        <input
          type="text"
          placeholder="Cari berdasarkan nama atau nomor ponsel..."
          className="search-input"
          value={searchTerm}
          onChange={handleSearch}
        />
        <button className="filter-button" onClick={toggleFilterDropdown}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="16"
            height="16"
            fill="currentColor"
            className="bi bi-filter"
            viewBox="0 0 16 16"
          >
            <path d="M6 10.5a.5.5 0 0 1 .5-.5h3a.5.5 0 0 1 0 1h-3a.5.5 0 0 1-.5-.5m-2-3a.5.5 0 0 1 .5-.5h7a.5.5 0 0 1 0 1h-7a.5.5 0 0 1-.5-.5m-2-3a.5.5 0 0 1 .5-.5h11a.5.5 0 0 1 0 1h-11a.5.5 0 0 1-.5-.5" />
          </svg>{" "}
          Filter
        </button>
        {isFilterDropdownVisible && (
          <div className="filter-dropdown">
            <label>
              <input
                type="checkbox"
                value="Dibatalkan"
                onChange={handleStatusChange}
                checked={selectedStatuses.includes("Dibatalkan")}
              />
              Dibatalkan
            </label>
            <label>
              <input
                type="checkbox"
                value="Belum lunas"
                onChange={handleStatusChange}
                checked={selectedStatuses.includes("Belum lunas")}
              />
              Belum lunas
            </label>
            <label>
              <input
                type="checkbox"
                value="Sedang Berlangsung"
                onChange={handleStatusChange}
                checked={selectedStatuses.includes("Sedang Berlangsung")}
              />
              Sedang Berlangsung
            </label>
            <label>
              <input
                type="checkbox"
                value="Selesai"
                onChange={handleStatusChange}
                checked={selectedStatuses.includes("Selesai")}
              />
              Selesai
            </label>
          </div>
        )}
      </div>

      <table className="orders-table">
        <thead>
          <tr>
            <th>Nomor Ponsel</th>
            <th>Nama Siswa</th>
            <th>Sisa Sesi Perhari</th>
            <th>Status</th>
            <th>Sesi</th>
            <th>Aksi</th>
          </tr>
        </thead>
        <tbody>
          {filteredOrders.map((order) => (
            <tr key={order.id}>
              <td>{order.phone}</td>
              <td>{order.name}</td>
              <td>{order.sessionsPerDay}</td>
              <td>
                <span
                  className={`status ${order.status.toLowerCase().replace(" ", "-")}`}
                >
                  {order.status}
                </span>
              </td>
              <td>{order.duration}</td>
              <td>
                <button className="nav-link scrollto getstarted" onClick={() => handleDeleteOrder(order.id)}>
                  Hapus
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Pesanan;
