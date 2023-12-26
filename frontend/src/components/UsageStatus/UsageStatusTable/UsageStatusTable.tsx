import React, { ReactNode } from 'react';
import './UsageStatusTable.css';

interface UsageStatusProps {
    columns: string[];
    data: any[];
}

const UsageStatusTable = (_usageStatusProps: UsageStatusProps) => {
    const { columns, data } = _usageStatusProps;
    return (
        <table className="table table-bordered">
            <thead>
                <tr>
                    {columns.map((column) => (
                        <th key={column} scope="col">{column}</th>
                    ))}
                </tr>
            </thead>
            <tbody>
                {data.map((row,i) => (
                    <tr key = {"row-" + i}>
                        {Object.values(row).map((value,j) => {
                            if (value instanceof Date) {
                                value = value.toLocaleDateString('en-GB');
                            }
                            return (
                                <td key={"row-" + i + "-col-" + j}>
                                    <input type="text"
                                        defaultValue={value as string}>
                                    </input>
                                </td>
                            )
                        }
                        )
                        }
                    </tr>
                ))}
            </tbody>
        </table>
    )
}

export default UsageStatusTable;