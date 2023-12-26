import React from "react";
import './DeviceInfo.css';

const DeviceInfo: React.FC = () => {
    return (
        <div className="container-fluid">
            <p className="text-center fs-5 mt-3">Tên thiết bị</p>
        <form className="row g-3 mx-3 border">
            <div className="col-md-7">
                <div className="row mt-2">
                    <div className="col-md-4 d-flex align-items-center">
                        <p className="mb-0 mx-3">ID</p>
                        <input type="text" className="form-control ml-2 border-0" aria-describedby="basic-addon1" />
                    </div>
                    <div className="col-md-6 d-flex align-items-center justify-content-end">
                        <p className="mb-0 mx-3">Loại thiết bị</p>
                        <div className="form-check">
                            <input className="form-check-input small mx-1" type="radio" name="flexRadioDefault" id="flexRadioDefault1" />
                            <label className="form-check-label small mx-1" htmlFor="flexRadioDefault1">
                                Physical
                            </label>
                        </div>
                        <div className="form-check">
                            <input className="form-check-input small mx-1" type="radio" name="flexRadioDefault" id="flexRadioDefault2" />
                            <label className="form-check-label small mx-1" htmlFor="flexRadioDefault2">
                                Virtual
                            </label>
                        </div>
                    </div>
                </div>
                <div className="row mt-3">
                    <div className="col-md-6 d-flex align-items-center">
                        <p className="mb-0 mx-3">Hostname:</p>
                        <input type="text" className="form-control ml-2" aria-describedby="basic-addon1" />
                    </div>
                    <div className="col-md-6 d-flex align-items-center justify-content-end">
                        <p className="mb-0 mx-3">IpAddress</p>
                        <input type="text" className="form-control ml-2" aria-describedby="basic-addon1" />
                    </div>
                </div>
                <div className="row mt-3">
                    <div className="d-flex align-items-center">
                        <p className="mb-0 mx-3">OS</p>
                        <input type="text" className="form-control ml-2" aria-describedby="basic-addon1" />
                    </div>
                </div>
                <div className="row mt-3">
                    <div className="d-flex align-items-center">
                        <p className="mb-0 mx-3">Description</p>
                        <textarea className="form-control" id="textAreaExample" rows={3}></textarea>
                    </div>
                </div>
            </div>
            <div className="col-md-5">
                <div className="row">
                    <div className="d-flex align-items-center">
                        <p className="mb-0 mx-3">Hardware_Chassis</p>
                        <input type="text" className="form-control ml-2" aria-describedby="basic-addon1" />
                    </div>
                </div><div className="row mt-3">
                    <div className="d-flex align-items-center">
                        <p className="mb-0 mx-3">Hardware_MT</p>
                        <input type="text" className="form-control ml-2" aria-describedby="basic-addon1" />
                    </div>
                </div><div className="row mt-3">
                    <div className="d-flex align-items-center">
                        <p className="mb-0 mx-3">Serial Number</p>
                        <input type="text" className="form-control ml-2" aria-describedby="basic-addon1" />
                    </div>
                </div><div className="row mt-3">
                    <div className="d-flex align-items-center">
                        <p className="mb-0 mx-3">CPU</p>
                        <input type="text" className="form-control ml-2" aria-describedby="basic-addon1" />
                    </div>
                </div><div className="row mt-3">
                    <div className="d-flex align-items-center">
                        <p className="mb-0 mx-3">Vị trí đặt thiết bị</p>
                        <input type="text" className="form-control ml-2" aria-describedby="basic-addon1" />
                    </div>
                </div>
            </div>
        </form>
        </div>
    );
}

export default DeviceInfo;