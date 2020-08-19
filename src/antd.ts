import EditableTable01 from './table/editAbleRow/editAbleRow01';

const getComponent = (type: string) => {
  switch (type) {
    case 'table-editAbleRow-editAbleRow01':
      return EditableTable01;
    case '':
      break;

    default:
      break;
  }
};

export default getComponent;
