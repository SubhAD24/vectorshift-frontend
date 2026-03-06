// textNode.js

import { useState, useEffect, useRef, useMemo } from 'react';
import { Position } from 'reactflow';
import { BaseNode } from './BaseNode';

export const TextNode = ({ id, data }) => {
  const [currText, setCurrText] = useState(data?.text || '{{input}}');
  const textareaRef = useRef(null);

  // Auto-resize textarea when content changes
  useEffect(() => {
    const el = textareaRef.current;
    if (el) {
      el.style.height = 'auto';
      el.style.height = el.scrollHeight + 'px';
    }
  }, [currText]);

  // Detect {{variable}} patterns and create dynamic input handles
  const variables = useMemo(() => {
    const matches = currText.match(/\{\{(\w+)\}\}/g) || [];
    // deduplicate, preserve order
    const seen = new Set();
    return matches
      .map((m) => m.replace(/\{|\}/g, ''))
      .filter((v) => {
        if (seen.has(v)) return false;
        seen.add(v);
        return true;
      });
  }, [currText]);

  const dynamicInputs = variables.map((v) => ({
    id: v,
    position: Position.Left,
  }));

  return (
    <BaseNode
      id={id}
      title="Text"
      icon="📝"
      inputs={dynamicInputs}
      outputs={[{ id: 'output' }]}
    >
      <label className="base-node__field">
        <span>Text</span>
        <textarea
          ref={textareaRef}
          className="base-node__textarea"
          value={currText}
          onChange={(e) => setCurrText(e.target.value)}
          rows={1}
        />
      </label>
      {variables.length > 0 && (
        <div className="base-node__variables">
          {variables.map((v) => (
            <span key={v} className="base-node__variable-tag">{`{{${v}}}`}</span>
          ))}
        </div>
      )}
    </BaseNode>
  );
};
