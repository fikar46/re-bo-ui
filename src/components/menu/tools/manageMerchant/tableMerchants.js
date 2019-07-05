import React from 'react';
import { MDBDataTable } from 'mdbreact';

const TableMerchants = () => {
  
  const data = {
    columns: [
      {
        label: 'No',
        field: 'no',
        sort: 'asc',
        width: 150
      },
      {
        label: 'Mall Id',
        field: 'position',
        sort: 'asc',
        width: 270
      },
      {
        label: 'Merchant Name',
        field: 'office',
        sort: 'asc',
        width: 200
      },
      {
        label: 'Level',
        field: 'age',
        sort: 'asc',
        width: 100
      },
      {
        label: 'Status',
        field: 'date',
        sort: 'asc',
        width: 150
      },
      {
        label: 'Category',
        field: 'salary',
        sort: 'asc',
        width: 100
      },
      {
        label: 'Edu Status',
        field: 'salary',
        sort: 'asc',
        width: 100
      },
      {
        label: 'Shared Key',
        field: 'salary',
        sort: 'asc',
        width: 100
      }
    ],
    rows: [
      {
        no: 'Tiger Nixon',
        position: 'System Architect',
        office: 'Edinburgh',
        age: '61',
        date: '2011/04/25',
        salary: '$320',
        edu:'sds',
        shared:'sda'
      },
      {
        no: 'Tsiger Nixon',
        position: 'dafcv Architsdsdect',
        office: 'asda',
        age: '61',
        date: '2011/04/25',
        salary: '$320',
        edu:'sds',
        shared:'sda'
      },
      {
        no: 'Tigser Nixon',
        position: 'asd Architect',
        office: 'asd',
        age: '61231',
        date: '2011/04/25',
        salary: '$320',
        edu:'sds',
        shared:'sda'
      }
    ]
  };

  return (
    <MDBDataTable
      striped
      bordered
      small
      order={['age', 'asc' ]}
      data={data}
      searching={false}
    />
  );
}

export default TableMerchants;