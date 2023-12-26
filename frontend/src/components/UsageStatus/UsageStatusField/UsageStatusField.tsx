import React, { ReactNode, useState } from "react";
import UsageStatusTable from "components/UsageStatus/UsageStatusTable/UsageStatusTable";
import { UsageStatusFieldProps } from "types/UsageStatus.types";


const UsageStatusField = (_usageStatusFieldProps: UsageStatusFieldProps) => {
    const { columns, data, history_data } = _usageStatusFieldProps;
    const [tableData, setTableData] = useState(data);
    const emptyRow = {
        UsageID: tableData.length + 1, 
        ItemName: "", 
        Used: NaN, 
        Value: NaN, 
        Unit: "GHz", 
        CollectDate: new Date("2021-01-01"), 
        ItemVersion: ""
    };
    const clearEmptyRow = () => {
        setTableData(tableData.filter((row) => row.ItemName !== ""));
    }

    const newTableRecord = () => {
        const newRow = emptyRow;
        // sua lai o day thanh new row theo yeu cau
        setTableData([...tableData, newRow]);
    }
    // need to detect what new row is
    // use state to store data
    return (
        <div className="row">
            <div className="col-9">
                <UsageStatusTable columns={columns} data={tableData} />
            </div>
            <div className="col-3 d-flex flex-column border-start border-3">
                <button className="btn btn-primary mt-3" onClick={newTableRecord}>Tạo mới bộ số liệu cho hoạt động của thiết bị hôm nay</button>
                <button className="btn btn-primary mt-3" onClick={clearEmptyRow}>Xoá bản ghi chưa có dữ liệu</button>
                <p className=" text-black-50 mt-3">Lịch sử thay đổi cấu hình</p>
                <table className="table table-bordered">
                    <thead>
                        <tr>
                            <th scope="col">Version</th>
                            <th scope="col">Date</th>
                        </tr>
                    </thead>
                    <tbody>
                        {history_data.map((row) => (
                            <tr key={row.version}>
                                <td>{row.version}</td>
                                <td>{row.date.toLocaleDateString('en-GB')}</td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    );
};



export default UsageStatusField;