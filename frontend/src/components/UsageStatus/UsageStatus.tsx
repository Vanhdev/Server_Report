import React, { ReactNode, useState } from "react";
import UsageStatusField from "./UsageStatusField/UsageStatusField";
import DeviceConfig from "./DeviceConfig/DeviceConfig";
import { USAGE_COLUMNS, DEVICE_CONFIG_COLUMNS } from "constants/UsageStatus.const";


const _usageData = [{ UsageID: 1, ItemName: "CPU", Used: 1, Value: 1, Unit: "GHz", CollectDate: new Date("2021-01-01"), ItemVersion: "1.0.0" },
{ UsageID: 2, ItemName: "CPU", Used: 2, Value: 2, Unit: "GHz", CollectDate: new Date("2021-01-01"), ItemVersion: "1.0.0" },
{ UsageID: 3, ItemName: "CPU", Used: 3, Value: 3, Unit: "GHz", CollectDate: new Date("2021-01-01"), ItemVersion: "1.0.0" }];
const _usageHistoryChange = [{version: "1.0.0", date:new Date("2021-01-01")}, {version: "1.0.1", date: new Date("2021-01-01")}, {version: "1.0.2", date: new Date("2021-01-01")}]; 
const _deviceConfigData = [{PhanLoai: "CPU", TenLK: "Intel Core i7", MoTa: "Intel Core i7", DungLuong: 1, DonViTinh: "GHz", SN: "123456789", Ver: "1.0.0", VerDate: new Date("2021-01-01")},
{PhanLoai: "CPU", TenLK: "Intel Core i7", MoTa: "Intel Core i7", DungLuong: 1, DonViTinh: "GHz", SN: "123456789", Ver: "1.0.0", VerDate: new Date("2021-01-01")},
{PhanLoai: "CPU", TenLK: "Intel Core i7", MoTa: "Intel Core i7", DungLuong: 1, DonViTinh: "GHz", SN: "123456789", Ver: "1.0.0", VerDate:new Date("2021-01-01")}];



const UsageStatus = () => {
    const [usageStatusPicked, setUsageStatusPicked] = useState(true);
    const usageStatusPickedOn = () => setUsageStatusPicked(true);
    const usageStatusPickedOff = () => setUsageStatusPicked(false);
    return (
        <div className="m-3">
            <nav>
                <ul className="pagination">
                    <li className="page-item"><a className="page-link" onClick={usageStatusPickedOn}>TÌnh trạng sử dụng thực tế</a></li>
                    <li className="page-item"><a className="page-link" onClick={usageStatusPickedOff}>Cấu hình</a></li>
                </ul>
            </nav>
            {usageStatusPicked? <UsageStatusField columns={USAGE_COLUMNS} data={_usageData} history_data={_usageHistoryChange} />
             : 
             <DeviceConfig columns={DEVICE_CONFIG_COLUMNS} data={_deviceConfigData}/>}
        </div>
    );
};

export default UsageStatus;