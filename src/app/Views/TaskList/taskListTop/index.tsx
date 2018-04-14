import * as React from 'react';
import { Field } from 'redux-form';
import { TextField, Paper } from 'material-ui';

import { Wrapper } from './styled';

let filterRender = (props: any) => {
    let { input: { value, onChange }} = props;
    return (
        <TextField
            onChange={(val) => props.input.onChange(val)}
            label="Фильтр"
            fullWidth={true}
            type="search"
            helperText="отфильтруйте записи"
            value={value}
        />
    );
};

interface TaskListTopProps {

}

export const TaskListTop = (props: TaskListTopProps) => {
    
    return (
        <Wrapper>
            <Paper>
                <Field
                    name="filtrValue"
                    component={filterRender}
                />
            </Paper>
        </Wrapper>
    );
};