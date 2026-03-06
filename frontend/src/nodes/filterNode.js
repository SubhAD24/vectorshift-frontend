// filterNode.js

import { useState } from 'react';
import { BaseNode } from './BaseNode';

export const FilterNode = ({ id, data }) => {
    const [field, setField] = useState(data?.field || '');
    const [condition, setCondition] = useState(data?.condition || 'equals');

    return (
        <BaseNode
            id={id}
            title="Filter"
            icon="🔍"
            inputs={[{ id: 'data-in' }]}
            outputs={[
                { id: 'matched' },
                { id: 'unmatched' },
            ]}
        >
            <label className="base-node__field">
                <span>Field</span>
                <input
                    type="text"
                    value={field}
                    onChange={(e) => setField(e.target.value)}
                    placeholder="field name"
                />
            </label>
            <label className="base-node__field">
                <span>Condition</span>
                <select value={condition} onChange={(e) => setCondition(e.target.value)}>
                    <option value="equals">Equals</option>
                    <option value="contains">Contains</option>
                    <option value="greaterThan">Greater Than</option>
                    <option value="lessThan">Less Than</option>
                </select>
            </label>
        </BaseNode>
    );
};
