// submit.js

import { useState } from 'react';
import { useStore } from './store';
import { useShallow } from 'zustand/react/shallow';

const selector = (state) => ({
    nodes: state.nodes,
    edges: state.edges,
});

export const SubmitButton = () => {
    const { nodes, edges } = useStore(useShallow(selector));
    const [result, setResult] = useState(null);
    const [loading, setLoading] = useState(false);

    const handleSubmit = async () => {
        if (loading) return;

        // ── Validation ──
        if (nodes.length === 0) {
            alert('Pipeline must contain at least one node.');
            return;
        }

        if (nodes.length > 1 && edges.length === 0) {
            alert('Please connect nodes before submitting.');
            return;
        }

        // Check if graph is fully connected (all nodes must be part of at least one edge, unless there is only 1 node)
        if (nodes.length > 1) {
            const connectedNodeIds = new Set();
            edges.forEach(edge => {
                connectedNodeIds.add(edge.source);
                connectedNodeIds.add(edge.target);
            });

            if (connectedNodeIds.size !== nodes.length) {
                alert('Please connect all nodes before submitting.');
                return;
            }
        }

        setLoading(true);

        try {
            const API_URL = process.env.REACT_APP_API_URL || 'http://localhost:8000';
            const response = await fetch(`${API_URL}/pipelines/parse`, {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ nodes, edges }),
            });

            if (!response.ok) throw new Error(`Server error ${response.status}`);

            const data = await response.json();
            setResult(data);
        } catch (err) {
            alert('Failed to connect to backend: ' + err.message);
        } finally {
            setLoading(false);
        }
    };

    return (
        <>
            <div className="submit-bar">
                <button
                    className="submit-btn"
                    type="button"
                    onClick={handleSubmit}
                    disabled={loading}
                >
                    {loading ? 'Submitting...' : 'Submit Pipeline'}
                </button>
            </div>

            {/* ── Result Modal ── */}
            {result && (
                <div className="result-overlay" onClick={() => setResult(null)}>
                    <div className="result-card" onClick={(e) => e.stopPropagation()}>
                        <div className="result-card__title">Pipeline Analysis</div>

                        <div className="result-card__grid">
                            <div className="result-card__stat">
                                <span className="result-card__stat-value">{result.num_nodes}</span>
                                <span className="result-card__stat-label">Nodes</span>
                            </div>
                            <div className="result-card__stat">
                                <span className="result-card__stat-value">{result.num_edges}</span>
                                <span className="result-card__stat-label">Edges</span>
                            </div>
                            <div className="result-card__stat">
                                <span className="result-card__stat-value">
                                    {result.num_edges > 0
                                        ? (result.num_edges / result.num_nodes).toFixed(1)
                                        : '0'}
                                </span>
                                <span className="result-card__stat-label">Avg Deg</span>
                            </div>
                        </div>

                        <div
                            className={`result-card__dag ${result.is_dag ? 'result-card__dag--yes' : 'result-card__dag--no'
                                }`}
                        >
                            {result.is_dag ? '✓ Valid DAG' : '✗ Not a DAG (has cycles)'}
                        </div>

                        <br />

                        <button className="result-card__close" onClick={() => setResult(null)}>
                            Close
                        </button>
                    </div>
                </div>
            )}
        </>
    );
};
