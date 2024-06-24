import React, { useContext } from 'react';
import foto from '../../assets/img/student.png'

const assignments = [
  {
    title: 'TUGAS 1',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore.',
    dueDate: '31 Oktober 2023',
    submissionDate: '26 Oktober 2023',
    fileLink: 'path/to/assignment1.pdf',
    feedback: '85'
  },
  {
    title: 'TUGAS 2',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore.',
    dueDate: '23 Juli 2023',
    submissionDate: '23 Juli 2023',
    fileLink: 'path/to/assignment2.pdf',
    feedback: '90'
  },
  {
    title: 'TUGAS 3',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore.',
    dueDate: '15 Agustus 2023',
    submissionDate: '15 Agustus 2023',
    fileLink: 'path/to/assignment3.pdf',
    feedback: '88'
  }
];

const MuridDetail = () => {

  return (
    <div className="murid-detail-page">
      {/* Komponen MuridDetail */}
      <div className="murid-detail">
        <div className="murid-header">
          <h4>Detail Kelas Anda</h4>
          <h4>Alokasi Kelas</h4>
          <p>Topik: Memahami macam layout (layout dan lainnya)</p>
          <p>Zoom: <a href="http://us02web.zoom.us/j/89678558927?pwd=CUdlZkc3VW1YT0c2QWJKemp4ay9aQT09">http://us02web.zoom.us/j/89678558927?pwd=CUdlZkc3VW1YT0c2QWJKemp4ay9aQT09</a></p>
        </div>
        <div className="murid-info">
          <img src={foto} alt="Ayu Nindiya" />
          <div className="murid-bio">
            <h4>Ayu Nindiya</h4>
            <p>Periode: 1</p>
            <p>Bergabung pada: 2 Juni 2022</p>
          </div>
        </div>
      </div>

      {/* Komponen AssignmentCard */}
      <h4 className="tugas">Daftar Tugas</h4>
      {assignments.map((assignment, index) => (
        <div key={index} className="assignment-card">
          <h4 className="fw-bold">{assignment.title}</h4>
          <p>{assignment.description}</p>
          <div className="assignment-info">
            <div className="assignment-file">
              <a href={assignment.fileLink} download>{assignment.fileLink.split('/').pop()}</a>
            </div>
            <div className="assignment-feedback">
              <label>Penilaian:</label>
              <p>{assignment.feedback}</p>
            </div>
          </div>
          <div className="assignment-dates">
            <span>Submitted on: {assignment.submissionDate}</span>
            <span>Due date: {assignment.dueDate}</span>
          </div>
        </div>
      ))}

      {/* Tombol */}
      <button className="btnsimpan">Simpan Semua</button>
    </div>
    
  );
};

export default MuridDetail
