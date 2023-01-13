import styles from './ColumnForm.module.scss';
import TextInput from '../TextInput/TextInput';
import Button from '../Button/Button';
import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addColumn } from '../../redux/store';

const ColumnForm = (props) => {
  const [title, setTitle] = useState('');
  const [icon, setIcon] = useState('');

  const dispatch = useDispatch();
  let listId = props.columnId;

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(addColumn({ title, icon, listId }));
    setTitle('');
    setIcon('');
  };

  return (
    <form className={styles.columnForm} onSubmit={handleSubmit}>
      <div>
        <label>Title:</label>
        <TextInput
          type='text'
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
      </div>
      <div>
        <label>Icon:</label>
        <TextInput
          type='text'
          value={icon}
          onChange={(e) => setIcon(e.target.value)}
        />
      </div>
      <Button>Add column</Button>
    </form>
  );
};

export default ColumnForm;
