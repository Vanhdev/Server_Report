import React from "react";

const Header: React.FC = () => {
    return (
        <div className="container-fluid d-flex justify-content-between" style={{backgroundColor: "aliceblue"}}>
            <div className="d-flex align-items-center">
            <svg height={75} width={100} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" id="device"><path fill="#eff2fa" d="M21 21.804v-10a1 1 0 0 1 1-1h5v-2a2 2 0 0 0-2-2H6a2 2 0 0 0-2 2v14h18a1 1 0 0 1-1-1z"></path><path fill="#d5e5f1" d="M21 21.804v-10a1 1 0 0 1 1-1h-1a1 1 0 0 0-1 1v8a1 1 0 0 1-1 1H4v2h18a1 1 0 0 1-1-1zm4-15h-1a2 2 0 0 1 2 2 1 1 0 0 1-1 1h-1v1h3v-2a2 2 0 0 0-2-2z"></path><circle cx="24.5" cy="19.804" r=".5"></circle><path fill="#eff2fa" d="M27 21.804h-5a1 1 0 0 1-1-1v-9a1 1 0 0 1 1-1h5a1 1 0 0 1 1 1v9a1 1 0 0 1-1 1z"></path><path fill="#d5e5f1" d="M27 10.804h-1a1 1 0 0 1 1 1v8a1 1 0 0 1-1 1h-6v1h7a1 1 0 0 0 1-1v-9a1 1 0 0 0-1-1z"></path><path fill="#90cff1" d="M22 11.804h5v7h-5z"></path><path fill="#90cff1" d="M21 11.804a1 1 0 0 1 1-1h3v-2H6v11h15v-8z"></path><path fill="#72b7e5" d="M23 9.804h-1a2 2 0 0 0-2 2v7l1 1v-8a1 1 0 0 1 1-1h3v-1h-2z"></path><path fill="#72b7e5" d="M20 11.804v8h1v-8a1 1 0 0 1 1-1h-1a1 1 0 0 0-1 1z"></path><path fill="#41667d" d="M24 20.804a.5.5 0 0 1 0-1h1a.5.5 0 0 1 0 1h-1z"></path><path fill="#41667d" d="M25.25 20.804h-1.5a.25.25 0 0 1-.25-.25v-.5a.25.25 0 0 1 .25-.25h1.5a.25.25 0 0 1 .25.25v.5a.25.25 0 0 1-.25.25z"></path><path fill="#4c6d86" d="M27 24.804H4a2 2 0 0 1-2-2v-1h27v1a2 2 0 0 1-2 2z"></path><path fill="#41667d" d="M27 21.804a2 2 0 0 1-2 2H2.277c.346.595.984 1 1.723 1h23a2 2 0 0 0 2-2v-1h-2z"></path><path fill="#617e95" d="M12.5 21.804v.5a1 1 0 0 0 1 1h4a1 1 0 0 0 1-1v-.5h-6z"></path><path fill="#41667d" d="M17.5 21.804v.5a1 1 0 0 1-1 1h1a1 1 0 0 0 1-1v-.5h-1z"></path></svg>
            <h3>Thiết bị</h3>
            </div>
            <div className="d-flex align-items-center">
                <p className=" text-black-50 mb-0">Khách hàng</p>
                <select className="form-select w-25 me-5">
                    {/* chỗ này lấy list từ danh sách khách hàng và render thành các choice */}
                    <option value="1">1</option>
                    <option value="2">2</option>
                </select>
                <p className=" text-black-50 mb-0">Sử dụng từ ngày</p>
                <input type="date" className="form-control w-25 me-5" />
                <p className=" text-black-50 mb-0">tới ngày</p>
                <input type="date" className="form-control w-25 me-5" />
            </div>
        </div>
    )
}

export default Header;