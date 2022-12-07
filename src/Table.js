import MaterialTable from 'material-table';
import { forwardRef, useEffect, useState } from 'react';
//icons
import {
  Edit,
  LastPage,
  ChevronLeft,
  FirstPage,
  ChevronRight,
  Check,
  Clear,
  ArrowDownward,
  Remove,
  ViewColumn,
  SaveAlt,
  FilterList,
  Search,
  DeleteOutline,
  AddBox,
} from '@material-ui/icons';

const tableicons = {
  Add: forwardRef((props, ref) => <AddBox {...props} ref={ref} />),
  Check: forwardRef((props, ref) => <Check {...props} ref={ref} />),
  Clear: forwardRef((props, ref) => <Clear {...props} ref={ref} />),
  Delete: forwardRef((props, ref) => <DeleteOutline {...props} ref={ref} />),
  DetailPanel: forwardRef((props, ref) => (
    <ChevronRight {...props} ref={ref} />
  )),
  Edit: forwardRef((props, ref) => <Edit {...props} ref={ref} />),
  Export: forwardRef((props, ref) => <SaveAlt {...props} ref={ref} />),
  Filter: forwardRef((props, ref) => <FilterList {...props} ref={ref} />),
  FirstPage: forwardRef((props, ref) => <FirstPage {...props} ref={ref} />),
  LastPage: forwardRef((props, ref) => <LastPage {...props} ref={ref} />),
  NextPage: forwardRef((props, ref) => <ChevronRight {...props} ref={ref} />),
  PreviousPage: forwardRef((props, ref) => (
    <ChevronLeft {...props} ref={ref} />
  )),
  ResetSearch: forwardRef((props, ref) => <Clear {...props} ref={ref} />),
  Search: forwardRef((props, ref) => <Search {...props} ref={ref} />),
  SortArrow: forwardRef((props, ref) => <ArrowDownward {...props} ref={ref} />),
  ThirdStateCheck: forwardRef((props, ref) => <Remove {...props} ref={ref} />),
  ViewColumn: forwardRef((props, ref) => <ViewColumn {...props} ref={ref} />),
};

const myData = [
  {
    createdAt: '2022-12-01T22:35:04.866Z',
    firstName: 'adasd',
    age: 12,
    lastName: 'asdasd',
    maried: false,
    id: '1',
  },
  {
    createdAt: '2022-12-02T08:12:19.203Z',
    firstName: 'asdasd',
    age: 23,
    lastName: 'asdasd',
    maried: true,
    id: '2',
  },
  {
    createdAt: '2022-12-01T16:46:44.319Z',
    firstName: 'ssss',
    age: 24,
    lastName: 'ssss',
    maried: false,
    id: '3',
  },
  {
    createdAt: '2022-12-01T20:47:07.785Z',
    firstName: 'ssss',
    age: 54,
    lastName: 'ssss',
    maried: true,
    id: '4',
  },
  {
    createdAt: '2022-12-01T20:04:26.823Z',
    firstName: 'ssss',
    age: 54,
    lastName: 'sss',
    maried: false,
    id: '5',
  },
  {
    createdAt: '2022-12-01T15:00:01.329Z',
    firstName: 'ddddddd',
    age: 23,
    lastName: 'dddddd',
    maried: true,
    id: '6',
  },
  {
    createdAt: '2022-12-06T22:43:16.905Z',
    firstName: 'new',
    age: 44,
    lastName: 'new',
    maried: false,
    id: '7',
  },
  {
    createdAt: '2022-12-07T08:55:37.513Z',
    firstName: 'dddd',
    age: 34,
    lastName: 'dd',
    maried: true,
    id: '8',
  },
  {
    createdAt: '2022-12-06T20:59:01.062Z',
    firstName: 'hhh',
    age: 32,
    lastName: 'hh',
    maried: false,
    id: '9',
  },
  {
    createdAt: '2022-12-07T01:13:20.723Z',
    firstName: 'ddff',
    age: 15,
    lastName: 'ff',
    maried: true,
    id: '10',
  },
  {
    createdAt: '2022-12-07T07:06:26.633Z',
    firstName: 'gg',
    age: 77,
    lastName: 'gg',
    maried: false,
    id: '11',
  },
];

const marieds = {
  true: 'yes',
  false: 'no',
};

const columns = [
  { title: 'First Name', field: 'firstName' },
  { title: 'Last Name', field: 'lastName' },
  { title: 'age', field: 'age' },
  { title: 'maried', field: 'maried', lookup: marieds },
];
const Table = () => {
  const [data, setData] = useState();
  const [loading, setLoading] = useState(true);

  /**
   * fetching data from api after monting
   * and everytime that a user is added or edited
   */
  useEffect(() => {
    setData(myData);
    setLoading(false);
  }, []);

  return (
    <>
      <MaterialTable
        title="test panel"
        columns={columns}
        data={data}
        isLoading={loading}
        icons={tableicons}
        options={{
          selection: true,
        }}
        localization={{
          pagination: {
            labelRowsSelect: 'ردیف',
            firstTooltip: 'اولین صفحه',
            previousTooltip: 'صفحه قبل',
            nextTooltip: 'صفحه بعد',
            lastTooltip: 'آخرین صفحه',
          },

          body: {
            emptyDataSourceMessage: 'صبر کنید...',
            addTooltip: 'اضافه کردن',
            editTooltip: 'ویرایش',
            editRow: {
              deleteText: 'آیا این ردیف حذف شود؟',
              saveTooltip: 'ذخیره',
              cancelTooltip: 'انصراف',
            },
          },
        }}
        editable={{
          onRowAdd: (newData) =>
            new Promise((resolve, reject) => {
              setTimeout(() => {
                setData([...data, newData]);

                resolve();
              }, 1000);
            }),
          onRowUpdate: (newData, oldData) =>
            new Promise((resolve, reject) => {
              setTimeout(() => {
                const dataUpdate = [...data];
                const index = oldData.tableData.id;
                dataUpdate[index] = newData;
                setData([...dataUpdate]);

                resolve();
              }, 1000);
            }),
          onRowDelete: (oldData) =>
            new Promise((resolve, reject) => {
              setTimeout(() => {
                const dataDelete = [...data];
                const index = oldData.tableData.id;
                dataDelete.splice(index, 1);
                setData([...dataDelete]);

                resolve();
              }, 1000);
            }),
        }}
      />
    </>
  );
};

export default Table;
