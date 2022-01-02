import React, { useState } from "react";
// import logo from "./logo.svg";
import * as XLSX from "xlsx";

function ClassDetails() {

    const [items, setItems] = useState([]);

    const readExcel = (file) => {
        const promise = new Promise((resolve, reject) => {
            const fileReader = new FileReader();
            fileReader.readAsArrayBuffer(file);

            fileReader.onload = (e) => {
                const bufferArray = e.target.result;

                const wb = XLSX.read(bufferArray, { type: "buffer" });

                const wsname = wb.SheetNames[0];

                const ws = wb.Sheets[wsname];

                const data = XLSX.utils.sheet_to_json(ws);

                resolve(data);
            };

            fileReader.onerror = (error) => {
                reject(error);
            };
        });

        promise.then((d) => {
            //console.log(d);
            setItems(d);
        });
    };


    return (
        <div>
            <input
                type="file"
                onChange={(e) => {
                    const file = e.target.files[0];
                    readExcel(file);
                }}
            />

            <table class="table container">
                <thead>
                    <tr>

                        <th scope="col">Reg No</th>
                        <th scope="col">Name</th>
                        <th scope="col">Dept</th>
                    </tr>
                </thead>
                <tbody>
                    {items.map((d) => (
                        <tr>
                            <th>{d.RegNO}</th>
                            <td>{d.Name}</td>
                            <td>{d.Dept}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    )
}

export default ClassDetails;
