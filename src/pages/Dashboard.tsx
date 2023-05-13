import React from "react";
import { BsArrowDownRight, BsArrowUpRight } from "react-icons/bs";
import { Column } from "@ant-design/plots";
import { Table } from "antd";
import type { ColumnsType } from "antd/es/table";
interface DataType {
  key: React.Key;
  name: string;
  product: number;
  status: string;
}

const columns: ColumnsType<DataType> = [
  {
    title: "id",
    dataIndex: "key",
    width: 150,
  },
  {
    title: "Name",
    dataIndex: "name",
    width: 150,
  },
  {
    title: "Product",
    dataIndex: "product",
  },
  {
    title: "Status",
    dataIndex: "status",
  },
];

const data1: DataType[] = [];
for (let i = 0; i < 100; i++) {
  data1.push({
    key: i,
    name: `Customer ${i}`,
    product: 32,
    status: `Random Address ${i}`,
  });
}

const Dashboard = () => {
  const data = [
    {
      type: "Jan",
      sales: 38,
    },
    {
      type: "Feb",
      sales: 52,
    },
    {
      type: "Mar",
      sales: 61,
    },
    {
      type: "April",
      sales: 100,
    },
    {
      type: "May",
      sales: 48,
    },
    {
      type: "Jun",
      sales: 76,
    },
    {
      type: "Jul",
      sales: 80,
    },
    {
      type: "Aug",
      sales: 128,
    },
    {
      type: "Sep",
      sales: 65,
    },
    {
      type: "Oct",
      sales: 38,
    },
    {
      type: "Nov",
      sales: 69,
    },
    {
      type: "Dec",
      sales: 45,
    },
  ];
  const config = {
    data,
    xField: "type",
    yField: "sales",
    label: {
      position: "middle",
      style: {
        fill: "#FFFFFF",
        opacity: 0.8,
      },
    },
    xAxis: {
      label: {
        autoHide: true,
        autoRotate: false,
      },
    },
    meta: {
      type: {
        alias: "Month",
      },
      sales: {
        alias: "Income",
      },
    },
  };
  return (
    <div>
      <h3 className="text-3xl mb-4">Dashboard</h3>
      <div className="flex justify-between items-center gap-3">
        <div className="flex flex-grow-1 justify-between items-center bg-white p-3 rounded-lg">
          <div className="flex flex-col gap-4">
            <p className="mb-0">Total</p>
            <h4 className="text-xl">1440$</h4>
          </div>
          <div className="flex flex-col items-end gap-4">
            <h6 className="flex green">
              <BsArrowUpRight />
              36%
            </h6>
            <p className="mb-0">Compare to April 2022</p>
          </div>
        </div>
        <div className="flex flex-grow-1 justify-between items-center bg-white p-3 rounded-lg">
          <div className="flex flex-col gap-4">
            <p className="mb-0">Total</p>
            <h4 className="text-xl mb-0">1440$</h4>
          </div>
          <div className="flex flex-col items-end gap-4">
            <h6 className="flex red">
              <BsArrowDownRight />
              36%
            </h6>
            <p className="mb-0">Compare to April 2022</p>
          </div>
        </div>
        <div className="flex flex-grow-1 justify-between items-center bg-white p-3 rounded-lg">
          <div className="flex flex-col gap-4">
            <p className="mb-0">Total</p>
            <h4 className="text-xl">1440$</h4>
          </div>
          <div className="flex flex-col items-end gap-4">
            <h6 className="flex green">
              <BsArrowUpRight />
              36%
            </h6>
            <p className="mb-0">Compare to April 2022</p>
          </div>
        </div>
      </div>
      <div className="mt-4">
        <h3 className="mb-4">Income Statics</h3>
        <div>
          <Column {...config} />;
        </div>
      </div>
      <div className="mt-4">
        <h3 className="mb-4">Recent Orders</h3>
        <div>
          <Table
            columns={columns}
            dataSource={data1}
            pagination={{ pageSize: 50 }}
            scroll={{ y: 240 }}
          />
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
