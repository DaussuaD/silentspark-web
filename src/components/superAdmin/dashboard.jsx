import React, { useEffect, useRef, useState } from 'react';
import Chart from 'chart.js/auto'; 
import '../../assets/css/superAdmin.css';
import { useNavigate } from 'react-router-dom';

const Dashboard = () => {
    const [filterOption, setFilterOption] = useState('monthly'); // Default filter: bulanan
    const chartRef = useRef(null);
    const navigate = useNavigate()

    const handleNavigateToPelamar = () => {
        navigate('/pelamarPages'); // Navigasi ke halaman pelamar
    };

    // Data dummy untuk statistik guru dan pelamar
    const dummyData = {
        dailyTeacherStats: [
            { date: '2024-06-10', activeTeachers: 8 },
            { date: '2024-06-11', activeTeachers: 9 },
            { date: '2024-06-12', activeTeachers: 10 },
            { date: '2024-06-13', activeTeachers: 7 },
            { date: '2024-06-14', activeTeachers: 5 },
        ],
        weeklyTeacherStats: [
            { week: 'Week 23', activeTeachers: 13 },
            { week: 'Week 24', activeTeachers: 14 },
            { week: 'Week 25', activeTeachers: 15 },
            { week: 'Week 26', activeTeachers: 14 },
            { week: 'Week 27', activeTeachers: 13 },
        ],
        monthlyTeacherStats: [
            { month: 'Jan', activeTeachers: 35 },
            { month: 'Feb', activeTeachers: 38 },
            { month: 'Mar', activeTeachers: 40 },
            { month: 'Apr', activeTeachers: 37 },
            { month: 'May', activeTeachers: 36 },
            { month: 'Jun', activeTeachers: 20}
        ],
        yearlyTeacherStats: [
            { year: 2021, activeTeachers: 120 },
            { year: 2022, activeTeachers: 202 },
            { year: 2023, activeTeachers: 100 },
            { year: 2024, activeTeachers: 210 },
            { year: 2025, activeTeachers: 150 },
        ],
        monthlyApplicantStats: [
            { month: 'Jan', applicants: 25 },
            { month: 'Feb', applicants: 30 },
            { month: 'Mar', applicants: 35 },
            { month: 'Apr', applicants: 28 },
            { month: 'May', applicants: 22 },
        ],
    };

    const totalActiveTeachers = dummyData.monthlyTeacherStats.reduce((acc, stat) => acc + stat.activeTeachers, 0);

    const totalStudents = 250;

    const totalApplicants = dummyData.monthlyApplicantStats.reduce((acc, stat) => acc + stat.applicants, 0);


    const getLabelsAndData = () => {
        let labels = [];
        let data = [];

        switch (filterOption) {
            case 'daily':
                labels = dummyData.dailyTeacherStats.map(stat => stat.date);
                data = dummyData.dailyTeacherStats.map(stat => stat.activeTeachers);
                break;
            case 'weekly':
                labels = dummyData.weeklyTeacherStats.map(stat => stat.week);
                data = dummyData.weeklyTeacherStats.map(stat => stat.activeTeachers);
                break;
            case 'monthly':
                labels = dummyData.monthlyTeacherStats.map(stat => stat.month);
                data = dummyData.monthlyTeacherStats.map(stat => stat.activeTeachers);
                break;
            case 'yearly':
                labels = dummyData.yearlyTeacherStats.map(stat => stat.year);
                data = dummyData.yearlyTeacherStats.map(stat => stat.activeTeachers);
                break;
            default:
                break;
        }

        return { labels, data };
    };

    useEffect(() => {
        const { labels, data } = getLabelsAndData();

        const chartInstance = new Chart(chartRef.current, {
            type: 'bar',
            data: {
                labels: labels,
                datasets: [{
                    label: `Statistik Guru (${filterOption})`,
                    data: data,
                    backgroundColor: '#bba661',
                    borderColor: '#bba661',
                    borderWidth: 1,
                    barThickness: 50,
                }],
            },
            options: {
                scales: {
                    y: {
                        beginAtZero: true,
                    },
                },
            },
        });

        return () => {
            chartInstance.destroy();
        };
    }, [filterOption]);


    return (
        <div>
            <div className="dashboard-container">
                <h3>Hii, Tyas Moon S! 👋</h3>
                <div className="dashboard-summary">
                    <div className="summary-item">
                        <h3>Total Guru Aktif</h3>
                        <div className="summary-value">{totalActiveTeachers}</div>
                    </div>
                    <div className="summary-item">
                        <h3>Total Murid</h3>
                        <div className="summary-value">{totalStudents}</div>
                    </div>
                    <div className="summary-item">
                        <h3>Total Pelamar</h3>
                        <div className="summary-value">{totalApplicants}</div>
                    </div>
                </div>
                <div className="dashboard-charts">
                    <div className="filter-menu">
                        <button className="filter-button" onClick={() => setFilterOption('daily')}>Harian</button>
                        <button className="filter-button" onClick={() => setFilterOption('weekly')}>Mingguan</button>
                        <button className="filter-button" onClick={() => setFilterOption('monthly')}>Bulanan</button>
                        <button className="filter-button" onClick={() => setFilterOption('yearly')}>Tahunan</button>
                    </div>
                
                </div>
                    <div className="chart-container">
                        <h3>Statistik</h3>
                        <canvas ref={chartRef}></canvas>
                    </div>
                <div>
                    <button className="pelamar" onClick={handleNavigateToPelamar}>Pelamar</button>
                </div>
                
            </div>
        </div>
    );
};

export default Dashboard;
