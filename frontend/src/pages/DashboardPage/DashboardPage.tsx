import React from "react";
import './DashboardPage.css';
import { Header,DeviceInfo, UsageStatus, Footer } from "components";

const DashboardPage: React.FC = () => {
    return (
        <div>
            <Header />
            <DeviceInfo />
            <UsageStatus />
            <Footer />
        </div>
    );
}

export default DashboardPage;