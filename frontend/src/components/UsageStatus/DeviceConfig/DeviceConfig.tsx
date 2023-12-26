import React, { useState } from "react";
import UsageStatusTable from "../UsageStatusTable/UsageStatusTable";
import { DeviceConfigProps } from "types/UsageStatus.types";

const DeviceConfig = (_deviceConfigProps:DeviceConfigProps) => {
    const { columns, data } = _deviceConfigProps;
    const [tableData, setTableData] = useState(data);
    const newTableRecord = () => {
        const newRow = {
            PhanLoai: "", 
            TenLK: "", 
            MoTa: "", 
            DungLuong: NaN, 
            DonViTinh: "", 
            SN: "", 
            Ver: "", 
            VerDate: new Date("2021-01-01")
        };
        // sua lai o day thanh new row theo yeu cau
        setTableData([...tableData, newRow]);
    }
    return (
        <div className="row">
            <div className="col-9">
                <div className="row">
                <div className="d-flex align-items-center justify-content-center">
                    <p className="text-black-50 mt-3 text-nowrap w-50">Lựa chọn phiên bản cấu hình phần cứng</p>
                    <select className="form-select mx-3">
                        <option value="1">1</option>
                        <option value="2">2</option>
                    </select>
                    <p className=" text-primary mt-3 text-nowrap w-50">(Cấu hình mới nhất <b>1</b> ngày <b>anh mất em</b> )</p>
                </div>
                </div>
                <div className="row">
                    <i>đây là dòng hướng dẫn sử dụng, không hướng dẫn cách tìm lại niềm tin đã mất</i>
                </div>
                <div className="row px-2">
                    <UsageStatusTable columns={columns} data={tableData}/>
                </div>
            </div>
            <div className="col-3 border-start border-3">
                <button className="btn btn-primary w-100 h-25 m-3 ms-0" onClick={newTableRecord}>Tạo cấu hình mới</button>
            </div>

        </div>
    );
}


export default DeviceConfig;