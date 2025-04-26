import React, { useEffect, useMemo, useState } from 'react';
import { FormControl, InputAdornment, ListSubheader, MenuItem, Select, TextField } from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';
import { useSearchParams } from 'next/navigation';
import { Categories } from '@/constant';

const containsText: any = (categories: any, query: string) => {
    const lowerCaseQuery = query.toLowerCase();
    return categories.filter((category: any) => {
        const filteredItems = category.items.filter((item: any) => item.toLowerCase().includes(lowerCaseQuery));
        return filteredItems.length > 0;
    }).map((category: any) => {
        return {
            category: category.category,
            items: category.items.filter((item: any) => item.toLowerCase().includes(lowerCaseQuery))
        };
    });
}

const renderSelectGroup = (category: any) => {
    const items = category.items.map((p: any) => {
        return (<MenuItem key={p}  className={'font-inter'} value={p} sx={{
            width: '100%', fontWeight: 100, fontSize: '15px', backgroundColor: '#1c2025', color: '#d7d7d7', '&:hover': {
                backgroundColor: '#6474B3',
            }, '&.Mui-selected': {
                backgroundColor: '#6474B3', color: '#d7d7d7', '&:hover': {
                    backgroundColor: '#6474B3', color: '#d7d7d7',
                },
            },
        }}>
            {p}
        </MenuItem>);
    });

    return [<ListSubheader className={'font-inter'} sx={{
        backgroundColor: '#2b3138f7', position: 'sticky', zIndex: 1, top: 80, color: '#d7d7d799', fontWeight: 400, fontSize: '16px', width: '100%'
    }}>{category.category}</ListSubheader>, items];
};
export default function CategoryDropdown({ formik }: any) {

    const params = useSearchParams()


    const [searchText, setSearchText] = useState('');
    const displayedOptions = useMemo(() => containsText(Categories, searchText), [searchText]);


    useEffect(() => {
        console.log('formik', formik.values.projectCategory);
        console.log('searchText', searchText);
    }, [formik.values.projectCategory, searchText]);

    return (<FormControl sx={{ minWidth: '100%' }}>
        <Select
            // Disables auto focus on MenuItems and allows TextField to be in focus
            MenuProps={{ autoFocus: false }}
            value={formik.values.projectCategory || ''}
            defaultValue=""
            onChange={(e) => {
                formik.setFieldValue('projectCategory', e.target.value);
            }}
            renderValue={() => {
                return formik.values.projectCategory;
            }}
            sx={{
                backgroundColor: '#383C4A', borderRadius: '8px', color: '#9CA3AF',
            }}
            inputProps={{
                MenuProps: {
                    MenuListProps: {
                        sx: {
                            backgroundColor: '#1c2025',
                            py: 0
                        }
                    },
                }
            }}
        >
            <ListSubheader sx={{ width: `100%`, backgroundColor: '#1c2025', position: 'sticky', top: 0, zIndex: 2, height: '80px', py: 2 }}>
                <TextField
                    size="small"
                    // Autofocus on textfield
                    autoFocus
                    placeholder="Type to search..."
                    fullWidth
                    InputProps={{
                        startAdornment: (<InputAdornment position="start">
                            <SearchIcon/>
                        </InputAdornment>),
                        sx: {
                            height: '48px'
                        }
                    }}
                    onChange={(e) => setSearchText(e.target.value)}
                    onKeyDown={(e) => {
                        if (e.key !== 'Escape') {
                            // Prevents autoselecting item while typing (default Select behaviour)
                            e.stopPropagation();
                        }
                    }}
                    sx={{
                        backgroundColor: '#fff',
                        borderRadius: '8px',
                        height: '48px'
                    }}
                />
            </ListSubheader>
            {displayedOptions.map((option: any, i: any) => (renderSelectGroup(option)))}
        </Select>
    </FormControl>);
}
