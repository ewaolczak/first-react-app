import styles from './SearchForm.module.scss';
import TextInput from '../TextInput/TextInput';
import Button from '../Button/Button';
import { useDispatch, useSelector } from 'react-redux';
import { useState, useEffect } from 'react';
import {
  searchString,
  updateSearchString
} from '../../redux/searchStringRedux';

const SearchForm = () => {
  const defaultSearchString = useSelector(searchString);
  const [searchInputValue, setSearchInputValue] = useState(defaultSearchString);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(updateSearchString(''));
    setSearchInputValue('');
  }, [dispatch]);

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(updateSearchString(searchInputValue));
  };

  return (
    <form className={styles.searchForm} onSubmit={handleSubmit}>
      <TextInput
        placeholder='Search...'
        value={searchInputValue}
        onChange={(e) => setSearchInputValue(e.target.value)}
      />
      <Button>
        <span className='fa fa-search' />
      </Button>
    </form>
  );
};

export default SearchForm;
