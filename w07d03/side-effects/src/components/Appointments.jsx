import {useEffect, useState} from 'react';
import axios from 'axios';

const Appointments = () => {
  const [appointments, setAppointments] = useState({});
  const [selectedAppt, setSelectedAppt] = useState(null);
  const [apptId, setApptId] = useState('');

  useEffect(() => {
    // GET /api/appointments
    axios.get('http://localhost:8001/api/appointments')
      .then((response) => {
        console.log(response.data);
        setAppointments(response.data);
      });
  }, []);

  useEffect(() => {
    console.log('apparently the id has changed');
    const targetAppt = appointments[apptId];
    console.log(targetAppt);
    setSelectedAppt(targetAppt);
  }, [apptId]);

  return (
    <div>
      <h2>All the Appointments</h2>
      <h2>Total Appointments: { Object.keys(appointments).length }</h2>

      <div>
        <label>Enter an Appt Id</label>
        <br/>
        <input
          value={apptId}
          onChange={(event) => setApptId(event.target.value)}
        />
      </div>

      { selectedAppt && (
        <div>
          <h2>Selected Appt Information</h2>
          <h2>Interview #{selectedAppt.id} at {selectedAppt.time}</h2>
          { selectedAppt.interview && (
            <>
              <h2>Student: {selectedAppt.interview.student}</h2>
              <h2>Interviewer: {selectedAppt.interview.interviewer}</h2> 
            </>
          ) }
        </div>
      ) }
    </div>
  );
};

export default Appointments;
