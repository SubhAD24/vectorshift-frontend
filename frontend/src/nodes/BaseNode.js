// BaseNode.js
// Reusable abstraction for creating pipeline nodes

import { Handle, Position } from 'reactflow';
import { useStore } from '../store';
import { useShallow } from 'zustand/react/shallow';

/**
 * BaseNode - A reusable wrapper for all pipeline nodes.
 *
 * Props:
 *   id       – ReactFlow node id
 *   title    – Display title (e.g. "Input", "LLM")
 *   icon     – Emoji or short icon string
 *   inputs   – Array of { id, label?, position?, style? }
 *   outputs  – Array of { id, label?, position?, style? }
 *   children – The node body content (fields, controls, etc.)
 *   className – Optional extra CSS class
 */
export const BaseNode = ({
    id,
    title,
    icon,
    inputs = [],
    outputs = [],
    children,
    className = '',
}) => {
    const { deleteNode } = useStore(useShallow((state) => ({ deleteNode: state.deleteNode })));

    return (
        <div className={`base-node ${className}`}>
            {/* ── Header ── */}
            <div className="base-node__header">
                {icon && <span className="base-node__icon">{icon}</span>}
                <span className="base-node__title">{title}</span>
                <button className="base-node__delete" onClick={() => deleteNode(id)}>✕</button>
            </div>

            {/* ── Body ── */}
            <div className="base-node__body">{children}</div>

            {/* ── Input Handles ── */}
            {inputs.map((input, idx) => (
                <Handle
                    key={input.id}
                    type="target"
                    position={input.position || Position.Left}
                    id={`${id}-${input.id}`}
                    className="base-node__handle base-node__handle--target"
                    style={{
                        top: inputs.length === 1
                            ? '50%'
                            : `${((idx + 1) / (inputs.length + 1)) * 100}%`,
                        ...input.style,
                    }}
                />
            ))}

            {/* ── Output Handles ── */}
            {outputs.map((output, idx) => (
                <Handle
                    key={output.id}
                    type="source"
                    position={output.position || Position.Right}
                    id={`${id}-${output.id}`}
                    className="base-node__handle base-node__handle--source"
                    style={{
                        top: outputs.length === 1
                            ? '50%'
                            : `${((idx + 1) / (outputs.length + 1)) * 100}%`,
                        ...output.style,
                    }}
                />
            ))}
        </div>
    );
};
