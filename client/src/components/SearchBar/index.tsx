import {  Select } from "@mantine/core"
import { IconSearch } from '@tabler/icons-react';
import { bindActionCreators } from "redux";
import { State, actionCreators } from "../../state";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";


const SearchBar = () =>{
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const { quickSearchProducts, getProduct } = bindActionCreators(actionCreators, dispatch);
    const { quickSearch } = useSelector((state: State) => state.quickSearch);

    const handlerSearch = (value: any) => {
        quickSearchProducts(value);
    };

    const handlerSearchSelect = (id: any) => {
        getProduct(id);
        navigate(`/product/${id}`);
    };
    return<>
            <Select
            style ={{width: '400px', backgroundColor: 'var(--secondary-white)'}}
            my = '5px'
            mx = '20px'
            size="sm"
            placeholder="What are you looking for?"
            rightSection={<IconSearch style={{ width: '16px', height: '16px' }} stroke={1.5} />}
            // onSearchChange={(e) => handlerSearch(e)}
            // onChange={(e) => handlerSearchSelect(e)}
            data={quickSearch}
            searchable
            nothingFoundMessage="Nothing found..."
            />
    </>
}

export default SearchBar