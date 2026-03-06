// mergeNode.js

import { useState } from 'react';
import { BaseNode } from './BaseNode';

export const MergeNode = ({ id, data }) => {
    const [strategy, setStrategy] = useState(data?.strategy || 'concat');

    return (
        <BaseNode
            id={id}
            title="Merge"
            icon="🔗"
            inputs={[
                { id: 'input-a' },
                { id: 'input-b' },
            ]}
            outputs={[{ id: 'merged' }]}
        >
            <label className="base-node__field">
                <span>Strategy</span>
                <select value={strategy} onChange={(e) => setStrategy(e.target.value)}>
                    <option value="concat">Concatenate</option>
                    <option value="zip">Zip</option>
                    <option value="join">Join</option>
                </select>
            </label>
        </BaseNode>
    );
};
