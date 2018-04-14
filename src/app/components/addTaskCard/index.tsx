import * as React from 'react';
import { Card } from './styled';
import { Button, Checkbox, IconButton } from 'material-ui';
import { ViewList, ViewModule, ClearAll } from 'material-ui-icons';

import { dictionary } from '../../constants/dictionary';

interface AddTaskCardProps {
    onExecute(): void;
    isModule: boolean;
    toggleMode(): void;
    clearAll(): void;
}

export const AddTaskCard = (props: AddTaskCardProps) => {
    let { onExecute, isModule, toggleMode, clearAll } = props;
    return (
        <Card>
            <Button
                variant="raised"
                color="primary"
                onClick={onExecute}
            >
                {dictionary.add}
            </Button>
            <Checkbox
                color="primary"
                checked={isModule}
                icon={<ViewModule />}
                checkedIcon={<ViewList />}
                title={'Переключить'}
                onChange={toggleMode}
            />
            <IconButton
                onClick={clearAll}
                className="clear-all-button"
            >
                <ClearAll />
            </IconButton>
        </Card>
    );
};