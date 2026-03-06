// apiNode.js

import { useState } from 'react';
import { BaseNode } from './BaseNode';

export const ApiNode = ({ id, data }) => {
    const [method, setMethod] = useState(data?.method || 'GET');
    const [url, setUrl] = useState(data?.url || '');

    return (
        <BaseNode
            id={id}
            title="API Call"
            icon="🌐"
            inputs={[{ id: 'body' }]}
            outputs={[{ id: 'response' }]}
        >
            <label className="base-node__field">
                <span>Method</span>
                <select value={method} onChange={(e) => setMethod(e.target.value)}>
                    <option value="GET">GET</option>
                    <option value="POST">POST</option>
                    <option value="PUT">PUT</option>
                    <option value="DELETE">DELETE</option>
                </select>
            </label>
            <label className="base-node__field">
                <span>URL</span>
                <input
                    type="text"
                    value={url}
                    onChange={(e) => setUrl(e.target.value)}
                    placeholder="https://api.example.com"
                />
            </label>
        </BaseNode>
    );
};
