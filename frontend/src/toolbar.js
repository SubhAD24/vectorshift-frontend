// toolbar.js

import { DraggableNode } from './draggableNode';

export const PipelineToolbar = () => {
    return (
        <div className="toolbar">
            <span className="toolbar__brand">⚡ VectorShift</span>
            <DraggableNode type="customInput" label="Input" icon="📥" />
            <DraggableNode type="llm" label="LLM" icon="🤖" />
            <DraggableNode type="customOutput" label="Output" icon="📤" />
            <DraggableNode type="text" label="Text" icon="📝" />
            <DraggableNode type="filter" label="Filter" icon="🔍" />
            <DraggableNode type="merge" label="Merge" icon="🔗" />
            <DraggableNode type="condition" label="Condition" icon="⚡" />
            <DraggableNode type="api" label="API Call" icon="🌐" />
            <DraggableNode type="timer" label="Timer" icon="⏱️" />
        </div>
    );
};
