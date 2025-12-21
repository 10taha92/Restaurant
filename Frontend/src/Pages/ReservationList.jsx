import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchReservations } from "../Slice/ReservationSlice";
// import "./ReservationList.css"; // include CSS file

const ReservationList = () => {
  const dispatch = useDispatch();

  const { loading, reservations, error } = useSelector(
    (state) => state.reservations
  );

  useEffect(() => {
    dispatch(fetchReservations());
  }, [dispatch]);

  if (loading) return <h2>Loading reservations...</h2>;
  if (error) return <h2 style={{ color: "red" }}>Error: {error}</h2>;

  return (
    <section className="table-container">
      <h1 className="table-title">Reservations List</h1>

      <table className="reservation-table">
        <thead>
          <tr>
            <th>First Name</th>
            <th>Last Name</th>
            <th>Email</th>
            <th>Phone</th>
            <th>Date</th>
            <th>Time</th>
          </tr>
        </thead>

        <tbody>
          {reservations.length === 0 ? (
            <tr>
              <td colSpan="6" className="no-data">
                No reservations found
              </td>
            </tr>
          ) : (
            reservations.map((data) => (
              <tr key={data._id}>
                <td>{data.firstName}</td>
                <td>{data.lastName}</td>
                <td>{data.email}</td>
                <td>{data.phone}</td>
                <td>{data.date}</td>
                <td>{data.time}</td>
              </tr>
            ))
          )}
        </tbody>
      </table>
    </section>
  );
};

export default ReservationList;
