// conditionNode.js

import { useState } from 'react';
import { BaseNode } from './BaseNode';

export const ConditionNode = ({ id, data }) => {
    const [operator, setOperator] = useState(data?.operator || 'equals');
    const [compareValue, setCompareValue] = useState(data?.compareValue || '');

    return (
        <BaseNode
            id={id}
            title="Condition"
            icon="⚡"
            inputs={[{ id: 'input' }]}
            outputs={[
                { id: 'true' },
                { id: 'false' },
            ]}
        >
            <label className="base-node__field">
                <span>Operator</span>
                <select value={operator} onChange={(e) => setOperator(e.target.value)}>
                    <option value="equals">==</option>
                    <option value="notEquals">!=</option>
                    <option value="gt">&gt;</option>
                    <option value="lt">&lt;</option>
                    <option value="contains">contains</option>
                </select>
            </label>
            <label className="base-node__field">
                <span>Value</span>
                <input
                    type="text"
                    value={compareValue}
                    onChange={(e) => setCompareValue(e.target.value)}
                    placeholder="compare value"
                />
            </label>
        </BaseNode>
    );
};
