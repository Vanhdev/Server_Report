

export interface UsageStatusData {
    UsageID: number,
    ItemName: string,
    Used: number,
    Value: number,
    Unit: string,
    CollectDate: Date,
    ItemVersion: string,
};

export interface DeviceConfigData {
    PhanLoai: string,
    TenLK: string,
    MoTa: string,
    DungLuong: number,
    DonViTinh: string,
    SN: string,
    Ver: string,
    VerDate: Date,
}



export interface ChangeHistoryData {
    version: string,
    date: Date,
}

export interface UsageStatusFieldProps {
    columns: string[],
    data: UsageStatusData[],
    history_data: ChangeHistoryData[],
}

export interface DeviceConfigProps {
    columns: string[],
    data: DeviceConfigData[],
}
