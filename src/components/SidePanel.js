import React, { useState } from 'react';
import { CSVLink } from 'react-csv';
import jsPDF from 'jspdf';
import Modal from './Modal';
import './SidePanel.css';
import { fetchPanelData } from './api';

const SidePanel = () => {
  const [modalData, setModalData] = useState({ isOpen: false, title: "", data: [] });

  const openModal = async (title) => {
    const data = await fetchPanelData(title);
    setModalData({ isOpen: true, title, data });
  };

  const closeModal = () => {
    setModalData({ ...modalData, isOpen: false });
  };

  const exportPDF = () => {
    const doc = new jsPDF();
    doc.text(modalData.title, 10, 10);
    modalData.data.forEach((item, index) => {
      doc.text(`${Object.values(item).join(" - ")}`, 10, 20 + index * 10);
    });
    doc.save(`${modalData.title}.pdf`);
  };

  const sendEmail = () => {
    alert("Email functionality is a placeholder and will be implemented later.");
  };

  return (
    <div className="side-panel">
      <div className="tile" onClick={() => openModal("Current Issues")}>
        <h3>Current Issues</h3>
      </div>
      <div className="tile" onClick={() => openModal("Solved Issues")}>
        <h3>Solved Issues</h3>
      </div>
      <div className="tile" onClick={() => openModal("Reports")}>
        <h3>Reports</h3>
      </div>

      <Modal isOpen={modalData.isOpen} onClose={closeModal} title={modalData.title}>
        <table>
          <thead>
            <tr>
              {Object.keys(modalData.data[0] || {}).map((key) => (
                <th key={key}>{key}</th>
              ))}
            </tr>
          </thead>
          <tbody>
            {modalData.data.map((item, index) => (
              <tr key={index}>
                {Object.values(item).map((value, i) => (
                  <td key={i}>{value}</td>
                ))}
              </tr>
            ))}
          </tbody>
        </table>
        <div className="export-buttons">
          <CSVLink data={modalData.data} filename={`${modalData.title}.csv`} className="export-btn">
            Export as CSV
          </CSVLink>
          <button onClick={exportPDF} className="export-btn">Export as PDF</button>
          <button onClick={sendEmail} className="export-btn">Email</button>
        </div>
      </Modal>
    </div>
  );
};

export default SidePanel;
